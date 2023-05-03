//引入mockjs模块
// import Mock from 'mockjs';
// //把json数据格式引入进去
// //webpack默认对外暴露的有图片和json数据格式
// 利用mockjs来mock数据接口
//mock技术，1.安装依赖 2.将写好的json文件引入进mockserve.js文件里（自己创建的）
//3.二次封装一个axios文件，基础路径baseUrl：'/mock',然后就可以在接口管理文件中引用并使用了。

import Mock from 'mockjs'
import country from './country.json'


// 提供广告位轮播数据的接口
Mock.mock('/mock/country',{
    code: 200,
    data: country,
})
