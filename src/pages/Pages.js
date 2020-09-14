import React from 'react';
import { Layout } from 'antd';//引入布局
import { Form, Input, Button, Checkbox } from 'antd';//引入表单样式
import {inject,observer} from "mobx-react";
const { Header, Footer, Content } = Layout;
@inject("user")
@observer
class Login extends React.Component {
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        //登录输入，验证成功的回调
        const onFinish = values => {
            console.log('Success:', values);
            //登录成功后，values里获取到的是用户输入的用户名和密码，此时，要把这个数据传到服务器端进行验证
            //这里调用的login（）方法，在userStore里返回的是一个Promise对象，所以可以直接用.then()的方法来编写登录成功之后的跳转
            this.props.user.login().then(data=>{
                console.log(data)
                //跳转到IndexPages
                this.props.history.push("/index")
            }).catch(err=>{
                console.log(err)
            });
        };
        //登录输入，验证失败的回调
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <Layout>
                    <Header>seven后台管理系统</Header>
                    <Content>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" >
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                    <Footer>备案号：川xxxxx</Footer>
                </Layout>
            </div>
        )
    }
}
//首页组件
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>首页</h2>
            </div>
        )
    }
}

//关于我们
class About extends React.Component {
    render() {
        return (
            <div>
                <h1>关于我们页面</h1>
            </div>
        )
    }
}

//商品页
class Product extends React.Component {
    render() {
        return (
            <div>
                <h1>商品页面</h1>
            </div>
        )
    }
}

//联系我们
class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>联系我们页面</h1>
            </div>
        )
    }
}

//事件组件
class Events extends React.Component {
    render() {
        return (
            <div>
                <h1>事件页面</h1>
            </div>
        )
    }
}

class Quanxian extends React.Component {
    render() {
        return (
            <div>
                <h1>你没有进入这个页面的权限</h1>
            </div>
        )
    }
}

class Xiaoshi extends React.Component {
    render() {
        return (
            <div>
                <h1>小事页面</h1>
            </div>
        )
    }
}

class Haoshi extends React.Component {
    render() {
        return (
            <div>
                <h1>好事页面</h1>
            </div>
        )
    }
}

class Huaishi extends React.Component {
    render() {
        return (
            <div>
                <h1>坏事页面</h1>
            </div>
        )
    }
}

export {
    Login,
    Home,
    About,
    Product,
    Contact,
    Events,
    Quanxian,
    Xiaoshi,
    Haoshi,
    Huaishi
}