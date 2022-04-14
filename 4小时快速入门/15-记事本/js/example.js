const app = new Vue({
    el: "#todoapp",
    data: {
        //  总数据
        list: ["吃饭饭", "睡觉觉", "写代码"],
        //  输入的内容
        inputValue: []
    },
    // 方法
    methods: {
        // 增加任务
        add: function() {
            this.list.push(this.inputValue);
        },
        // 删除任务
        remove: function(index) {
            this.list.splice(index, 1);
        },
        clear: function() {
            this.list = [];
        }
    }
});