import React from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Item } = Form;

const Register = () => {
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
                                <Input placeholder='Enter your name' size='large' name="name"  />
                            </Item>
                            <Item label="Email" required>
                                <Input placeholder='Enter your email' size='large' name="email" />
                            </Item>
                            <Item label="Password" required>
                                <Input.Password placeholder='Enter your password' size='large' name="password" />
                            </Item>
                            <Item label="Confirm Password" required>
                                <Input.Password placeholder='Confirm your password' size='large' name="confirmPassword" />
                            </Item>
                            <Item className='mb-0'>
                                <Button type="primary" size='large' block className='mb-2' htmlType="submit">Register</Button>
                            </Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </main>
  )
}

export default Register