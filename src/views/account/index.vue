<template>
  <div class="account">
    <div class="account-table-box">
      <div class="add-btn-box">
        <el-button class="add-btn" type="primary" :icon="Plus" @click="add_dialog_open">{{ $t('account.add') }}
        </el-button>
      </div>
      <!--表格-->
      <el-table :data="tableData" stripe border>
        <el-table-column type="index" :label="$t('account.serial')" width="54">
        </el-table-column>

        <el-table-column prop="userId" :label="$t('account.id')" width="70">
        </el-table-column>

        <el-table-column prop="userName" :label="$t('account.name')" width="140">
        </el-table-column>

        <el-table-column prop="createTime" :label="$t('account.registerTime')" width="180">
        </el-table-column>

        <el-table-column :label="$t('account.option')">
          <template v-slot="scope">
            <el-button size="small" type="primary" :icon="Edit" @click="handleEdit(scope.$index, scope.row)">{{
              $t('option.modify') }}
            </el-button>
            <el-button size="small" type="danger" :icon="Delete" @click="handleDelete(scope.$index, scope.row)">{{
              $t('option.delete') }}
            </el-button>
            <!-- <el-button
                    size="small"
                    type="success"
                    :icon="Lollipop"
                    @click="handlePower(scope.$index, scope.row)">{{ $t('account.power') }}
            </el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <table-pager ref="pager" @pageChange="load_table" :count="count" />
    </div>

    <el-dialog :title="$t('account.add')" v-model="addDialog" :before-close="add_dialog_close">
      <el-form :model="form" label-width="100px">
        <el-form-item :label="$t('account.nameLabel')">
          <el-input v-model="form.userName" :placeholder="$t('account.namePlace')"></el-input>
        </el-form-item>
        <p class="note form-note">{{ $t('account.note.name') }}</p>

        <el-form-item :label="$t('account.passLabel')">
          <el-input v-model="form.passWord" :placeholder="$t('account.passPlace')"></el-input>
        </el-form-item>
        <p class="note form-note">{{ $t('account.note.pass') }}</p>
      </el-form>

      <el-form-item :label="'设置为管理员'">
        <el-switch class="auto-compress" v-model="form.role" active-value="admin" inactive-value="user" />
      </el-form-item>
      <p class="note form-note">开放设置界面</p>

      <el-form-item :label="'开放全媒体库'">
        <el-switch class="auto-compress" v-model="form.mediaPermit" active-value="all" inactive-value="limit" />
      </el-form-item>
      <p class="note form-note">可浏览全部媒体库</p>

      <!--媒体库权限-->
      <template v-if="form.mediaPermit !== 'all'">
        <p class="s-form-title">{{ $t('account.form.title.mediaPower') }}</p>
        <el-checkbox v-for="i in medias" v-model="i.permit" :label="i.mediaName" :key="i.mediaId" size="large" />
      </template>

      <template v-slot:footer>
        <div class="dialog-footer">
          <!--按钮盒子-->
          <div class="btn-box">
            <el-button type="primary" @click="do_register">{{ $t('option.confirm') }}</el-button>
            <el-button type="warning" @click="add_dialog_close">{{ $t('option.cancel') }}</el-button>
          </div>
        </div>
      </template>
    </el-dialog>
    <!-- 修改用户信息表单 -->
    <el-dialog :title="$t('account.modify')" v-model="dialogFormVisible" :before-close="dialog_close">
      <el-form :model="form" label-width="100px">
        <el-form-item :label="$t('account.nameLabel')">
          <el-input v-model="form.userName" :placeholder="$t('account.namePlace')"></el-input>
        </el-form-item>
        <p class="note form-note">{{ $t('account.note.name') }}</p>

        <el-form-item :label="$t('account.passLabel')">
          <el-input v-model="form.passWord" :placeholder="$t('account.passModifyPlace')"></el-input>
        </el-form-item>
        <p class="note form-note">{{ $t('account.note.pass') }}</p>

        <el-form-item :label="'设置为管理员'">
          <el-switch class="auto-compress" v-model="form.role" active-value="admin" inactive-value="user" />
        </el-form-item>
        <p class="note form-note">开放设置界面</p>

        <el-form-item :label="'开放全媒体库'">
          <el-switch class="auto-compress" v-model="form.mediaPermit" active-value="all" inactive-value="limit" />
        </el-form-item>
        <p class="note form-note">可浏览全部媒体库</p>

        <!--媒体库权限-->
        <template v-if="form.mediaPermit !== 'all'">
          <p class="s-form-title">{{ $t('account.form.title.mediaPower') }}</p>
          <el-checkbox v-for="i in medias" v-model="i.permit" :label="i.mediaName" :key="i.mediaId" size="large" />
        </template>

      </el-form>

      <template v-slot:footer>
        <div class="dialog-footer">
          <!--按钮盒子-->
          <div class="btn-box">
            <el-button type="primary" @click="do_update">{{ $t('option.confirm') }}</el-button>
            <el-button type="warning" @click="dialogFormVisible = false">{{ $t('option.cancel') }}</el-button>
          </div>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script lang='ts' src="./script/index.ts"></script>

<style scoped lang='less'>
.btn-box {
  display: flex;
  justify-content: flex-end;
}

.add-btn-box {
  margin-bottom: 1.4rem;
}

@media only screen and (min-width: 1200px) {
  .account-table-box {
    width: 100rem;
    margin: 3rem auto;
  }
}

@media only screen and (max-width: 1199px) and (min-width: 768px) {
  .account-table-box {
    width: 70rem;
    margin: 2rem auto;
  }
}

@media only screen and (max-width: 767px) {
  .account-table-box {
    width: 70rem;
    margin: 1rem auto;
  }
}
</style>
