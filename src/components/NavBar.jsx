import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function NavBar() {
    const location=useLocation();

 
  return (
    <div>
        <nav  className='flex items-center justify-between px-24'>
            <div className='flex  items-center'>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.125 0.125H1.875C0.907031 0.125 0.125 0.907031 0.125 1.875V42.125C0.125 43.093 0.907031 43.875 1.875 43.875H42.125C43.093 43.875 43.875 43.093 43.875 42.125V1.875C43.875 0.907031 43.093 0.125 42.125 0.125ZM22.0602 22.3336L11.5602 31.1383C11.2758 31.3789 10.8438 31.1766 10.8438 30.8047V27.3758C10.8438 27.25 10.9039 27.1242 11.0023 27.0422L17.007 22L11.0023 16.9578C10.9521 16.9181 10.9116 16.8674 10.8841 16.8095C10.8566 16.7517 10.8428 16.6883 10.8438 16.6242V13.1953C10.8438 12.8234 11.2758 12.6211 11.5602 12.8617L22.0602 21.6609C22.2734 21.8359 22.2734 22.1586 22.0602 22.3336ZM33.1562 30.8047C33.1562 31.0453 32.9703 31.2422 32.7461 31.2422H22.6289C22.4047 31.2422 22.2188 31.0453 22.2188 30.8047V28.1797C22.2188 27.9391 22.4047 27.7422 22.6289 27.7422H32.7461C32.9703 27.7422 33.1562 27.9391 33.1562 28.1797V30.8047Z" fill="#F8F8F8"/>
                </svg>
                <h3 className='p-4 font-icon text-2xl'>term@dev</h3>
            </div>
            <ul className='flex '>
                <li className='px-5'>
                    <Link to="" className={location.pathname === '/' ? 'active  text-2xl' : 'text-2xl'}>
                        QUIZ
                    </Link>
                </li>
                <li className='px-5'>
                    <Link to="html" className={location.pathname === '/html' ? 'active  text-2xl' : 'text-2xl'}>
                        HTML
                    </Link>
                </li>
                <li className='px-5'>
                    <Link to="css" className={location.pathname === '/css' ? 'active  text-2xl' : 'text-2xl'}>
                        CSS
                    </Link>
                </li>
                <li className='px-5'>
                    <Link to="js" className={location.pathname === '/js' ? 'active  text-2xl' : 'text-2xl'}>
                        JAVASCRIPT
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar