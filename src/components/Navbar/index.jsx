import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../../utils/Navbar'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbarCustom'>
        <ul>
            <li>
                {navbar.length > 0 && (
                    navbar.map((item) => (
                        <Link key={item.id} to={item.path}>{item.title}</Link>
                    ))
                )}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
