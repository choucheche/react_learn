import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();

/*响应式代码*/
// var iScale = 1;
// var userScal = window.devicePixelRatio;
// iScale = iScale / userScal;
// var meta_viewport = document.getElementsByTagName('meta')['viewport'];
// meta_viewport.content = 'width=device-width,user-scalable=no,initial-scale=' + iScale + ",minimum-scale=" + iScale + ",maximum-scale=" + iScale + '';
// // document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ",minimum-scale=" + iScale + ",maximum-scale=" + iScale + '">');
// var iWidth = document.documentElement.clientWidth;
// // 用来设置 font-size 的 rem => px
// if (iWidth / userScal >= 750) {
//   document.getElementsByTagName("html")[0].style.fontSize = 100 + 'px';
// } else {
//   document.getElementsByTagName("html")[0].style.fontSize = iWidth / 7.5 + "px";
// }

(function IsPC() {
  /*修改meta*/
  var iScale = 1;
  // var userScal = window.devicePixelRatio;
  // iScale = iScale / userScal;
  var meta_viewport = document.getElementsByTagName('meta')['viewport'];
  meta_viewport.content = 'width=device-width,user-scalable=no,initial-scale=' + iScale + ",minimum-scale=" + iScale + ",maximum-scale=" + iScale + '';
  /*修改meta 结束*/
  /*判断是 移动端 还是 PC*/
  for (var userAgentInfo = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], flag = !0, v = 0; v < Agents.length; v++)
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      console.log('移动');
      document.getElementsByTagName('html')[0].style.fontSize = window.screen.width / 7.5 + 'px';
      //body字体大小为页面宽度除以 7.5
      return
    }
  console.log('PC');
  document.getElementsByTagName("body")[0].style.width = "375px";
  document.getElementsByTagName("body")[0].style.margin = "0 auto";
  document.getElementsByTagName("html")[0].style.fontSize = 100 + 'px';
  document.getElementById("footer").style.width = "375px";
  document.getElementById("footer").style.left = "50%";
  document.getElementById("footer").style.marginLeft = "-187.5px";
  /*
    设置页面 html 文字根字号大小为100，为了让 sass 好计算
    这样 sass 里的数值是多少就是多少 px了
  */
  return
})();
/*响应式代码结束*/

$(function() {
  $(window).resize(function() {
    /*响应式代码*/
    (function IsPC() {
      /*判断是 移动端 还是 PC*/
      for (var userAgentInfo = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], flag = !0, v = 0; v < Agents.length; v++)
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          console.log('移动');
          document.getElementsByTagName('html')[0].style.fontSize = window.screen.width / 7.5 + 'px';
          //body字体大小为页面宽度除以 7.5
          return
        }
      console.log('PC');
      document.getElementsByTagName("body")[0].style.width = "375px";
      document.getElementsByTagName("body")[0].style.margin = "0 auto";
      document.getElementsByTagName("html")[0].style.fontSize = 100 + 'px';
      document.getElementById("footer").style.width = "375px";
      document.getElementById("footer").style.left = "50%";
      document.getElementById("footer").style.marginLeft = "-187.5px";
      /*
        设置页面 html 文字根字号大小为100，为了让 sass 好计算
        这样 sass 里的数值是多少就是多少 px了
      */
      return
    })();
    /*响应式代码结束*/
  });

  $('.box').css('border', '1px #000 solid');
});