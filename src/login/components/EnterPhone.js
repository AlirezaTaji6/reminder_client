import { Form, Input } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import '../style/EnterPhone.css'

export default function EnterPhone({ getFieldDecorator }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <div className='small-container'>
        <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
        .<textarea cols="30" rows="10"></textarea>
        <h2 className='section-title'>ورود | ثبت نام</h2>
        <p>
            لطفا شماره موبایل خود را وارد کنید
        </p>
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <Input className="area-code" defaultValue="+98" disabled />
            </Form.Item>
            <Form.Item>
                <Input className="mobile-input" minLength={10} maxLength={10} />
            </Form.Item>
            {/* <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
                <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                >
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item> */}
        </Form>
    </div>
  );
}