export default {
    sidebar: {
        mediaList: 'mediaList',
        mangaList: 'mangaList',
        chapterList: 'chapterList',
        history: 'history',
        bookmark: 'bookmark',
        account: 'account',
        mediaManage: 'mediaManage',
        mangaManage: 'mangaManage',
        pathManage: 'pathManage',
        chapterManage: 'chapterManage',
        bookmarkManage: 'bookmarkManage',
        compressManage: 'compressManage',
        wiki: 'wiki',
    },
    option: {
        option: 'option',
        add: 'add',
        delete: 'delete',
        modify: 'modify',
        remove: 'remove',
        confirm: 'Ok',
        cancel: 'Cancel',
        bookmark: 'addBookmark',
        removeFirst:'removeFirstPage',
        recoveryFirst:'recoveryFirstPage',
        direction:'switchDirection',
        ltr: 'left -> right',
        rtl: 'right -> left',
        before: 'before',
        next: 'next',
    },
    account: {
        add: 'addUser',
        modify: 'modifyUser',
        serial: 'Ser',
        id: 'userId',
        name: 'userName',
        pass: 'passWord',
        nameLabel: 'userName:',
        passLabel: 'passWord:',
        registerTime: 'registerTime',
        option: 'option',
        namePlace: 'place enter userName',
        passPlace: 'place enter passWord(Leave blank to not modify)',
        confirmBoxTitle: 'confirm deletion',
        confirmBoxText: 'are you sure to delete this user?',
        formWarning: 'The user name is 3-20 characters long and starts with a letter',
    },
    mediaManage: {
        add: 'addMedia',
        modify: 'modifyMedia',
        id: 'mediaId',
        name: 'mediaName',
        createTime: 'createTime',
        path: 'path',
        form: {
            name: 'mediaName:',
            type: 'mediaType',
            file: 'fileType',
            browse: 'defaultBrowse',
            directory: 'directoryType'
        },
        place: {
            name: 'please enter mediaName',
            browse: 'please enter default browse'
        },
        select: {
            mediaType0: 'manga(manga->chapter->images',
            mediaType1: 'single(manga->images)',
            fileType0: 'image',
            browse0: 'flow',
            browse1: 'single',
            browse2: 'double',
            directory0: 'manga->chapter(or zip)->images',
            directory1: 'directory->manga->chapter(or zip)->images'
        },
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this media?',
        }
    },
    path: {
        id: 'pathId',
        add: 'addPath',
        modify: 'modifyPath',
        path: 'path',
        createTime: 'createTime',
        form: {
            add: 'addPath:',
            path: 'path:',
        },
        place: {
            add: 'please enter the path',
        },
        button: {
            re: 'reScan',
            update: 'addScan',
        },
        warning: {
            name: 'mediaName cannot be empty!',
        },
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this media?',
            title1: '',
            text1: 'are you sure to delete this path? The associated manga and chapter also will be deleted!',
            title2: 'confirm reScan',
            text2: 'are you sure to reScan this path? The associated manga and chapter also will be cleared and rescanned to add!',
        }
    },
    mangaManage: {
        id: 'mangaId',
        name: 'mangaName',
        createTime: 'createTime',
        updateTime: 'updateTime',
        modify: 'modifyMange',
        form: {
            name: 'mangaName:',
            browse: 'browseType:',
            path: 'mangaPath:',
            poster: 'mangaPoster:',
        },
        place: {
            name: 'please enter mangaName',
            browse: 'please select browseType',
            path: 'please enter manga path',
            poster: 'please enter manga poster path',
        },
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this manga?',
            title1: 'confirm remove',
            text1: 'are you sure to remove this manga?',
            title2: 'confirm deletion',
            text2: 'are you sure to remove this manga and delete source file?',
        },
        warning: {
            name: 'mangaName cannot be empty!',
            path: 'mangaPath cannot be empty!'
        }
    },
    chapterManage: {
        id: 'chapterId',
        name: 'chapterName',
        createTime: 'createTime',
        updateTime: 'updateTime',
        modify: 'modifyChapter',
        form: {
            name: 'chapterName:',
            path: 'chapterPath:',
            poster: 'chapterPoster:',
        },
        place: {
            name: 'please enter chapterName',
            path: 'please enter chapterPath',
            poster: 'please enter chapterPoster path'
        },
        warning: {
            name: 'chapterName cannot be empty!',
            path: 'chapterPath cannot be empty!',
        },
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this chapter?',
            title1: 'confirm remove',
            text1: 'are you sure to remove this chapter?',
            title2: 'confirm deletion',
            text2: 'are you sure to remove this chapter and delete source file?',
        },
    },
    bookmarkManage: {
        add: 'addBookmark',
        remove: 'removeBookmark',
        id: "bookmarkId",
        page: 'page',
        createTime: 'createTime',
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this bookmark?',
        },
    },
    compressManage: {
        id: 'compressId',
        type: 'fileType',
        source: 'sourcePath',
        path: 'compressPath',
        num: 'imagesCount',
        createTime: 'createTime',
        confirm: {
            title: 'confirm deletion',
            text: 'are you sure to delete this compress record?',
        },
    },
    browse: {
        flow: 'flow',
        single: 'single',
        double: 'double',
    },
    404: 'The file you requested does not exist',
}

