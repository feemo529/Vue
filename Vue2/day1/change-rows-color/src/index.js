// 1.使用ES6导入语法 导入JQuery
import $ from 'jquery'
// 导入样式(在webpack中，一切皆模块，都可以通过Es6语法导入和使用)
import '@/css/index.css'
import './css/index.less'

import './js/test/inofo.js'


// 导入图片
import logo from './images/logo.jpg'
console.log(logo);
// 给img动态赋值
$('.box').attr('src', logo)

// 2.定义JQuery的入口函数
$(function() {
    // 3.实现奇偶行变色
    $('li:even').css('background-color', 'pink')
    $('li:odd').css('background-color', 'red')
})

// 定义装饰器函数
function info(target) {
    target.info = 'Person info.'
}

// 定义一个普通的类
// @info
// class Person {}

// console.log(Person.info);