import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import { FiTwitter } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGlobeAfrica } from 'react-icons/fa'


function Footer() {
  return (
    <div className='container'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Me</h2>
                <Link to='/'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>About Me</h2>
                <Link to='/'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                {/* <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Tosin &nbsp;
                    </Link>
                </div> */}
            <small className='website-rights'>Tosin © 2022</small>
                <div className='social-icons'>
                    <Link className='social-icons-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='Linkedin'
                    >
                    <AiFillLinkedin />
                    </Link>
                    <Link className='social-icons-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <FiTwitter />
                    </Link>
                    <Link className='social-icons-link website'
                    to='/'
                    target='_blank'
                    aria-label='Website'
                    >
                    <FaGlobeAfrica />
                    </Link>
                </div>
            </div>
            </section>

    </div>
    )
}

export default Footer