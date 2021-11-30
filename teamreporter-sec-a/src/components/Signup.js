import React from "react";
import { Form, Input, Button } from "antd";
import "./signup.css";

const Signup = () => {

  return (
    <div className="signupParent">
      <div className="signupField">
        <h2>Signup</h2>


        <Input placeholder="User Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Form>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
