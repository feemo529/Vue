// 类型注解:是一种轻量级的为函数或者变量添加的约束
(() => {
    function showMsg(str) {
        return '窗前没遇过,' + str;
    }
    let msg = '疑是地上霜';
    // let msg = [12,132,32]
    console.log(showMsg(msg));
})();
