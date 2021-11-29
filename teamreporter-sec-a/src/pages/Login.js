import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
// import {auth} from '../firebase.js'
function Login() {

  return (

<div className="Login">
      <h1>Login</h1>

      <Form
        name="basic"

      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {

              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            <Link to='Home'> Login </Link>

          </Button>
          <Button type="primary" htmlType="submit">
            <Link to='signup'> Signup </Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;