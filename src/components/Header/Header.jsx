import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpend, setMenuOPened] = React.useState(false);

    return (
        <div className='header' id='home'>
            <img src={Logo} alt="" className='logo' />

            {(menuOpend === false && mobile === true) ? (<div className='bars-container'

                onClick={() => setMenuOPened(true)}>

                <img src={Bars} alt="" className='bars' />

            </div>) : <ul className='header-menu'>

                <li onClick={() => setMenuOPened(false)}>
                    <Link
                        activeClass="active"
                        to='home'
                        span={true}
                        smooth={true}
                    >
                        Home
                    </Link>
                </li>

                <li onClick={() => setMenuOPened(false)}>
                    <Link
                        to='programs'
                        span={true}
                        smooth={true}
                    >
                        Programs
                    </Link>
                </li>

                <li onClick={() => setMenuOPened(false)}>
                    <Link
                        to='reasons'
                        span={true}
                        smooth={true}
                    >
                        Why us
                    </Link>
                </li>

                <li onClick={() => setMenuOPened(false)}>
                    <Link
                        to='plans'
                        span={true}
                        smooth={true}
                    >
                        Plans
                    </Link>
                </li>

                <li onClick={() => setMenuOPened(false)}>
                    <Link
                        to='testimonials'
                        span={true}
                        smooth={true}
                    >
                        Testimonials
                    </Link>
                </li>

            </ul>}


        </div>
    )
}

export default Header
