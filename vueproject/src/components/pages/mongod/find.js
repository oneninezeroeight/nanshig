    //导入方法
    const {
        insert,
        find,
        update,
        deleteName

        //从这个路径去查找
    } = require('./db');


    (async () => {
        const result = await find('list1');
        // await insert('reglo',[{name : 'laoyao'},{name:'laoxie'},{name:'jingjing'}]);
        // await update('reglo', {
        //     name: 'zs'
        // }, {
        //     name: 'laoyao'
        // });
        // await deleteName('reglo',{name : 'lao'});
        console.log(result);
    })();