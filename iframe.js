// token
var token = result.data.token;

// 动态创建一个不可见的iframe, 在iframe中加载一个跨域HTML
var iframe = document.createElement("iframe");

iframe.src = "http://app1.com/localstorage.html";


document.body.append(iframe);


// 使用postMessage()方法将token传递给iframe
setTimeout(function(){
    iframe.contentWindow.postMessage(token,"http:app1.com");
},4000);

setTimeout(function(){
    iframe.remove();
}.6000);


// 在这个iframe所加载的HTML中绑定一个事件监听器，
// 当事件被触发时，把接收到的token数据写入localStorage

window.addEventListener("message",function(event){
    localStorage.setItem("token",event.data)
})


// 前端实现SSO 是iframe + postMessage(0方式 将同一个token写入多个域下的LocalStorage中)
// 读取Token 在请求中懈怠 这样实现了同一份Token被多个域所共享


