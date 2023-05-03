import mockRequests from "./mockAjax";


//利用mock模拟接口(国家)
export const  reqcountry = () =>mockRequests.get("/country");
//
