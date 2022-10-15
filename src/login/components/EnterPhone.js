import { Card, Form, Input } from 'antd';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navigate } from 'react-router-dom';
import '../style/EnterPhone.css'

export default function EnterPhone({ }) {
  const [phone, setPhone] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleChange = () => {
    const value = document.getElementsByClassName('mobile-input')[0].value
    setPhone(value)
  }

  const handleSubmit = () => {
    setRedirect(true)
  };

  return (
    redirect ? <Navigate to='/home' /> :
    <Card className='small-box'>
        <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
        <h2 className='section-title'>ورود | ثبت نام</h2>
        <p className='description'>
            لطفا شماره موبایل خود را وارد کنید
        </p>
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <Input className="area-code" defaultValue="+98" disabled />
            </Form.Item>
            <Form.Item>
                <Input className="mobile-input" onChange={handleChange} minLength={10} maxLength={10} />
            </Form.Item>
            <Form.Item>
              <button type="submit" className='submit' onClick={handleSubmit}>ورود</button>
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
      </Card>
  );
}