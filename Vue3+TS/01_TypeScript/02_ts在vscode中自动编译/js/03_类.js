// ts中书写js中的类，演示效果
(() => {
    // 定义一个类型
    class Person {
        // fullName: string
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            // this.fullName = this.firstName + '_' + this.lastName
        }
    }
    // 定义一个函数
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
