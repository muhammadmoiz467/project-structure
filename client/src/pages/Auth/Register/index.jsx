import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Item } = Form;

const initialState = { name: '', email: '', password: '', confirmPassword: '' }

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)


    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        let { name, email, password, confirmPassword } = state

        name = name.trim()
        if(!window.isValidName(name)){ return window.toastify("Please enter your name", "error") }
        if(!window.isValidEmail(email)){ return window.toastify("Please enter a valid email", "error") }
        if(password.length < 6){ return window.toastify("Password must be at least 6 characters long", "error") }
        if(password !== confirmPassword){ return window.toastify("Passwords do not match", "error") }

        e.preventDefault()
        setIsProcessing(true)
        console.log('state', state)
        setIsProcessing(false)
        console.log(window.getRandomId())
        window.toastify("Register Successfully", "success")
        console.log("Date().now.toString(36)", Date.now().toString(36))
    
    }

    return (
        <main className='auth p-3 p-md-4 p-lg-5'>
            <div className="card p-3 p-md-4">
                <Row>
                    <Col span={24}>
                        <Title level={2} className='text-center'>Register</Title>
                        <Paragraph className='text-center'>Already have an account? <Link to="/auth/login">Login</Link></Paragraph>
                    </Col>
                    <Col span={24}>
                        <Form layout='vertical'>
                            <Item label="Name" required>
                                <Input placeholder='Enter your name' size='large' name="name" value={state.name} onChange={handleChange} />
                            </Item>
                            <Item label="Email" required>
                                <Input placeholder='Enter your email' size='large' name="email" value={state.email} onChange={handleChange} />
                            </Item>
                            <Item label="Password" required>
                                <Input.Password placeholder='Enter your password' size='large' name="password" value={state.password} onChange={handleChange} />
                            </Item>
                            <Item label="Confirm Password" required>
                                <Input.Password placeholder='Confirm your password' size='large' name="confirmPassword" value={state.confirmPassword} onChange={handleChange} />
                            </Item>
                            <Item className='mb-0'>
                                <Button type="primary" size='large' block className='mb-2' htmlType="submit" loading={isProcessing} onClick={handleSubmit}>Register</Button>
                            </Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Register