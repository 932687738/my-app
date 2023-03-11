import React,{useRef} from 'react';
import './index.css'
import { Button, Form, Input, Image, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {$requestPost} from 'utils/request/request'
import {CACHE_LOGIN_INFO} from 'common/const/redux_const'
import store from 'reduxP/store/bas_store';

function Login(props) {

    const form = useRef()

    const onFinish = async (values) => {
         let data = await $requestPost('/sysUser/login',values)
        if (data.code) {
            store.dispatch({ type: CACHE_LOGIN_INFO, data })
        } else {
            message.error(data.message)
        }
        form.current.resetFields()
    };
    const onFinishFailed = (errorInfo) => {
        message.error('请输入正确的账户和密码')
    };

    return (
        <div className='login'>
            <Form
                name="basic"
                ref={form}
                labelCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Image
                    preview={false}
                    width={104}
                    src="http://static.yqcode0563.cn/logo.png"
                />
                <Form.Item
                    name="account"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号!',
                        },
                        {
                            min: 5, max: 15, message: "长度在5到15个字符之间"
                        }
                    ]}
                >
                    <Input placeholder="请输入账号" prefix={<UserOutlined />} style={{ color: "grey" }} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                        {
                            min: 5, max: 15, message: "长度在5到15个字符之间"
                        }
                    ]}
                >
                    <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} style={{ color: "grey" }} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                    <Button type="text" style={{ color: "white" }}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;