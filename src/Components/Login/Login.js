import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

export const Login = () => {
    const onFinish = (values, actionType) => {
        const { name, email } = values;
        if (actionType === 'login') {
            // Handle login action
            axios.post('http://localhost:3001/login', { name, email })
                .then(res => {
                    if (res.data.validation) {
                        alert('Your credentials are correct. Thank You');
                    } else {
                        alert('Wrong Credentials. Please try again');
                    }
                })
                .catch(error => {
                    console.error('Login Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        } else if (actionType === 'register') {
            // Handle register action
            axios.post('http://localhost:3001/register', { name, email })
                .then(res => {
                    if (res.data.success) {
                        alert('Registration successful. You can now login.');
                    } else {
                        alert('Registration failed. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Registration Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 400 }}>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={values => onFinish(values, 'login')}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <h1 style={{ textAlign: 'center' }}>Register</h1>
                <Form
                    name="register-form"
                    initialValues={{ remember: true }}
                    onFinish={values => onFinish(values, 'register')}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
