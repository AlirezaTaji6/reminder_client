import { Card, Form, InputNumber } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCode } from "../loginSlice";
import '../style/VerifyPhone.css'
function VerfiyPhone() {
    const [code, setCode] = useState('')
    const [redirect, setRedirect] = useState(false)
  
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch()
    console.log(login);
    const handleChange = () => {
      const inputs = document.getElementsByClassName('code-item')

      let completeCode = ''
      for(const i of inputs) {
        // input number is div in div
        completeCode+=i.children[0].children[0].value
      }

      setCode(completeCode)
    }
  
    const handleSubmit = () => {
      dispatch(addCode(code))
      setRedirect(true)
    };

    return ( 
        <Card className='small-box'>
            <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            <h2 className='section-title'>کد ارسال شده را وارد کنید</h2>
            <p className="description"><Link to="/login" className="resend">ویرایش</Link> شماره را اشتباه وارد کردید؟</p>
            <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <InputNumber className="code-item" controls={false} min={1} max={9} maxLength={1} itemType='number' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <InputNumber className="code-item" controls={false} min={1} max={9} maxLength={1} itemType='number' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <InputNumber className="code-item" controls={false} min={1} max={9} maxLength={1} itemType='number' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <InputNumber className="code-item" controls={false} min={1} max={9} maxLength={1} itemType='number' onChange={handleChange} />
            </Form.Item>
            <Form.Item>
              <button type="submit" className='submit' onClick={handleSubmit}>تایید</button>
            </Form.Item>
            </Form>
        </Card>
     );
}

export default VerfiyPhone;