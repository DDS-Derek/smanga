import {defineComponent} from 'vue';
import userApi from '@/api/account';
import {Plus, Edit, Delete, Lollipop} from '@element-plus/icons-vue';
import {ElMessage, ElMessageBox} from 'element-plus';
import tablePager from '@/components/table-pager.vue';
import i18n from '@/i18n';
import mediaApi from '@/api/media';

const {t} = i18n.global;

export default defineComponent({
	name: 'account-index',
	setup() {
		return {
			Plus,
			Edit,
			Delete,
			Lollipop,
		};
	},
	// 数据
	data() {
		return {
			// 分页数据
			count: 0,
			addDialog: false,
			dialogFormVisible: false,
			dialogPower: false,
			tableData: [],
			form: {
				userId: 0,
				userName: '',
				passWord: '',
				role: 'admin',
				mediaPermit: 'all',
			},
			formInit: {
				userId: 0,
				userName: '',
				passWord: '',
			},
			formLabelWidth: '120px',
			medias: [],
		};
	},

	// 传值
	props: [],

	// 引用
	computed: {},

	// 组件
	components: {tablePager},

	// 方法
	methods: {
		/**
		 * 编辑用户
		 * @param index
		 * @param val
		 */
		handleEdit(index: number, val: any) {
			this.dialogFormVisible = true;
			Object.assign(this.form, val);
			this.form.passWord = '';

			// 加载媒体库许可列表
			this.medias.map((i: any) => {
				i.permit = val.mediaPermissons.includes(i.mediaId);
			});
		},

		/**
		 * 删除用户
		 * @param index
		 * @param val
		 * @returns {Promise<void>}
		 */
		async handleDelete(index: number, val: any) {
			ElMessageBox.confirm(
				t('account.confirmBoxTitle'),
				t('account.confirmBoxText'),
				{
					type: 'warning',
				}
			)
				.then(async () => {
					const res = await userApi.delete_account(val.userId);

					if (res.code === 0) {
						// 进入子组件调用刷新
						(this.$refs as any).pager.reload_page();
					}
				})
				.catch(() => {});
		},
		/**
		 * 加载表格
		 * @returns {Promise<void>}
		 */
		async load_table(page = 1, pageSize = 10) {
			const res = await userApi.get_account(page, pageSize);
			this.count = Number(res.count);
			this.tableData = res.list;
		},
		/**
		 * 更改用户请求
		 * @returns {Promise<void>}
		 */
		async do_update() {
			const targetUserId = this.form.userId;
			const res = await userApi.update_account(
				targetUserId,
				Object.assign(this.form, {mediaLimit: this.medias})
			);

			if (res.code === 0) {
				// 进入子组件调用刷新
				(this.$refs as any).pager.reload_page();
				this.dialogFormVisible = false;
			}
		},
		/**
		 * 关闭弹框
		 */
		dialog_close() {
			this.dialogFormVisible = false;
		},
		dialog_close_power() {
			this.dialogPower = false;
		},
		add_dialog_open() {
			Object.assign(this.form, this.formInit);
			this.addDialog = true;
		},
		add_dialog_close() {
			this.addDialog = false;
			this.reset();
		},
		/**
		 * 注册行为
		 * @returns {Promise<void>}
		 */
		async do_register() {
			const data = this.form;

			if (!/^[a-zA-Z]\w{1,19}$/.test(data.userName)) {
				ElMessage({
					message: t('account.formWarning'),
					type: 'warning',
				});
				return;
			}
			if (!data.passWord) {
				ElMessage({
					message: '密码不能为空',
					type: 'warning',
				});
			}
			const res = await userApi.register(
				Object.assign(this.form, {mediaLimit: this.medias})
			);

			if (res.code === 0) {
				this.add_dialog_close();
				this.load_table();
			}
		},

		/**
		 * 清空表单
		 */
		reset() {
			Object.assign(this.form, {
				userName: '',
				passWord: '',
			});
		},

		switch_change(val: any, activeVal: string, inactiveVal: string) {
			console.log(val);

			return val ? activeVal : inactiveVal;
		},
	},

	// 生命周期
	async created() {
		const res = await mediaApi.get(1, 10000);
		const medias = res.list;
		this.medias = medias;
		this.load_table();
	},
});
