//对于axios进行二次封装
import axios from "axios";
import  nprogress from "nprogress";
//引入进度条的样式
import "nprogress/nprogress.css" ;
//axios.create方法执行,其实返回一个axios和 mockRequests一样的
let  mockRequests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/mock",
    //超时的设置
    timeout: 5000,
});
//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
 mockRequests.interceptors.request.use(config => {
    nprogress.start();
    return config;
});
//响应拦截器：请求数据返回会执行
 mockRequests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (err) => {
    //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
    alert(err.message);
    //终止Promise链
    // return new Promise();
});
//最后需要暴露:暴露的是添加新的功能的axios,即为 mockRequests
export default  mockRequests;