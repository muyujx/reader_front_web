import axios from 'axios'
import {ResponseModel} from "../model/responseModel";
import router from "../route";


interface RequestParam {
    url: string,
    body?: any
    queryParam?: any
}
let toLogin = true;
async function afterRq<T>(axiosRq: Promise<any>): Promise<T> {
    const result = await axiosRq;
    const response: ResponseModel<T> = result.data;



    // 报错需要登录
    if (response.code == 100) {

        if (toLogin) {
            toLogin = false;

            await router.push({
                name: "Login"
            });

            setTimeout(() => {
                toLogin = true;
            }, 500);

        }

        return Promise.reject("need login!");
    }

    if (response.code != 0) {
        return Promise.reject(response);
    }
    return response.data;
}


export default {

    post<T>(rqParam: RequestParam): Promise<T> {
        const url: string = rqParam.url;
        const body: any = rqParam.body;
        return afterRq(axios.post(url, body));
    },

    get<T>(rqParam: RequestParam): Promise<T> {
        const url: string = rqParam.url;
        return afterRq(axios.get(url, {
            params: rqParam.queryParam
        }));
    }
}