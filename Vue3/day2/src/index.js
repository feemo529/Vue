// 使用ES6模块化的语法导入jquery
import $ from 'jquery'
import './css/index.css'
import './css/index.less'

// 2.实现隔行变色的效果
$(function () {
  $('li:odd').css('backgroundColor', 'cyan')
  $('li:even').css('backgroundColor', 'pink')
})

class Person {
  static info = 'person info'
}

console.log(Peson.info);