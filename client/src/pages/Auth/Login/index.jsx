import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@/context/Auth';

const { Title, Paragraph } = Typography;
const { Item } = Form;

const initialState = { email: '', password: '' }

const Login = () => {

    const { readProfile } = useAuth() 

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)


    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        let { email, password } = state

        if(!window.isValidEmail(email)){ return window.toastify("Please enter a valid email", "error") }
    
        const formData = { email, password }

        setIsProcessing(true)

        axios.post(window.api + '/api/auth/login', formData)
        .then((res) => {
            const { status, data } = res
            if (status === 200) {
                const { token } = data
                localStorage.setItem("jwt", data.token)
                console.log('data.token', data.token)
                window.toastify(data.message, "success")
                readProfile(token)
                setState(initialState)
            }
        })
        .catch(error => {
            const { status, data } = error.response
            if (status === 400) {
                window.toastify(data.message, "error")
            } else {
                window.toastify("Something went wrong", "error")
            }
        })
        .finally(() => {
            setIsProcessing(false)
        })
    }

    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <div className="card p-3 p-md-4">
                <Row>
                    <Col span={24}>
                        <Title level={2} className='text-center'>Login</Title>
                        <Paragraph className='text-center'>Don't have an account? <Link to="/auth/register">Register</Link></Paragraph>
                    </Col>
                    <Col span={24}>
                        <Form layout='vertical'>
                            <Item label="Email" required>
                                <Input placeholder='Enter your email' size='large' name="email" value={state.email} onChange={handleChange} />
                            </Item>
                            <Item label="Password" required>
                                <Input.Password placeholder='Enter your password' size='large' name="password" value={state.password} onChange={handleChange} />
                            </Item>
                            <Item className='mb-0'>
                                <Button type="primary" size='large' block className='mb-2' htmlType="submit" loading={isProcessing} onClick={handleSubmit}>Login</Button>
                            </Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Login