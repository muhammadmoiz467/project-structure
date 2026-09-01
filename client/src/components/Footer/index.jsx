import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary text-white text-center py-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='mb-0'>&copy; {new Date().getFullYear()}. All Right Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer