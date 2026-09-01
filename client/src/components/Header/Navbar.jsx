import React from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Floder Structure</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <div className="d-flex">
        <Space>
        <Link to="/auth/login" className='btn btn-success'>Login</Link>
        <Link to="/auth/register" className='btn btn-danger'>Register</Link>
        </Space>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar