import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({cartAllProduct}) => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 bg-primary  d-flex justify-content-between px-5">
                <ul className='d-flex gap-5  align-items-center p-0 py-1'>
                    <Link to='/' className='list-unstyled text-light p-0 pointer fs-3'><i class="fa-solid fa-house"></i></Link>
                    <li className='list-unstyled text-light p-0 pointer'>ABOUT</li>
                    <li className='list-unstyled text-light p-0 pointer'>CONTACT</li>
                </ul>
                <ul className='m-0 p-0 py-3 position-relative'>

                    <Link to='cart' className='list-unstyled text-light p-0 pointer'>
                        <i class="fa-solid fa-cart-shopping fs-3"></i>
                        <span className='text-decoration-none py-1 p-2 text-dark position-absolute top-0' style={{background:'yellow',raduis:'25px'}} >{cartAllProduct?.length}</span>
                        </Link>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
