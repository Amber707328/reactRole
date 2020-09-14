import {observable, action} from "mobx";//引入状态管理
import Axios from "../util/axios";//引用Axios
import api from "../api/indexApi";
export default class UserStore {
//需要观察的数据
    @observable user = []
    @observable isLogin = false
    @observable token = ""
// 登录的方法
    @action
    login=()=>{
        return new Promise((resolve,reject)=>{
            //用axios来请求数据
            Axios.post(api.user.userLogin,{userName:"abc",userPwd:"123"})
                .then(res=>{
                    console.log("axios请求的数据",res)
                    if(res.data.returnCode === 200){
                        this.user = res.data.data;
                        this.token = res.data.token;
                        resolve("登录成功");
                    }else {
                        reject("登录失败")
                    }
                })
        })
    }
}
