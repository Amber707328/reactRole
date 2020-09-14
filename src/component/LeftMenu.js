import React from 'react';
import {Menu} from "antd";
import { NotificationOutlined } from '@ant-design/icons';
import {inject,observer} from "mobx-react";
import {Link} from "react-router-dom";
const { SubMenu } = Menu;
@inject("user")
@observer
class LeftMenu extends React.Component {
    //本组件中的状态传递
    constructor() {
        super();
        this.state ={
            leftMenu:[]
        }
    }
    // 生成左边的菜单
    buildMenu(menulist){
        let MenuList = menulist.map((item,index)=>{
            if(item.menuChilds.length===0){//孩子的长度为0 ，表示没有子菜单，就可以直接显示Menu.Item
                return <Menu.Item key={item.menuId}><Link key={item.menuId} to={item.menuUrl}>{item.menuName}</Link></Menu.Item>
            }else{//否则孩子长度不为0 ，就表示有子菜单，需要用SubMenu标签来显示
                return <SubMenu key={item.menuId} icon={<NotificationOutlined />} title={item.menuName}>
                            {/*这里又需要判断有无子菜单，所以直接调用自身判断的方法：也就叫递归*/}
                            {this.buildMenu(item.menuChilds)}
                        </SubMenu>
            }
        })
        return MenuList
    }
    //组件加载之前，调用buildMenu的方法来动态生成菜单
    componentDidMount() {
        let menuList = this.buildMenu(this.props.user.user.menuInfo);
        this.setState({
            leftMenu:menuList
        })
    }
    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {this.state.leftMenu}
                </Menu>
            </div>
        )
    }
}

export {LeftMenu as default}