import React from 'react';
import {Route} from "react-router-dom";
import loadable from "@loadable/component";
import {inject,observer} from "mobx-react";
@inject("user")
@observer
class PrivateRoute extends React.Component {
    //本组件的状态
    constructor() {
        super();
        this.state={
            routeList:[]
        }
    }
    //根据mobx里面的user数据，创建菜单路由
    buildRoute(list){
        let routeList = list.map((item)=>{
            if(item.menuChilds.length===0){
                return <Route key={item.menuId} path={item.menuUrl} component={loadable(()=>import(`./${item.componentPath}`))}/>
            }else{
                if(item.isContainChildren){ //嵌套在父级中，记得在在父组件中，添加 {this.props.children}在要嵌套的位置
                    return  <Route key={item.menuId} path={item.menuUrl} render={() =>{
                        let ComponentName =loadable(() => import(`./${item.componentPath}`));
                        return <ComponentName {...this.props}>
                            {this.buildRoute(item.menuChilds)}
                        </ComponentName>
                    }}>
                    </Route>
                }else{ //不嵌套显示
                    return [...this.buildRoute(item.menuChilds),<Route key={item.menuId} path={item.menuUrl} component={ loadable(() => import(`./${item.componentPath}`))}/>]
                }

            }
        })
        return routeList
    }
    //挂载后调用创建菜单路由的方法
    componentDidMount() {
        // 通过this.props.user.user.menuInfo获取mobx里的数据，并赋值给menuList
        let menuList = this.buildRoute(this.props.user.user.menuInfo);
        console.log("私有路由的数据")
        console.log(menuList)
        // 使用setState的方法，把menuList赋值给本组件的状态存储器routeList
        this.setState({
            routeList:menuList
        })
    }
    render() {
        return (
            <div>
                {this.state.routeList}
            </div>
        )
    }
}

export {PrivateRoute as default}