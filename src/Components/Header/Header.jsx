import './header.css';
import logo from './picture/logo.svg';
import './picture/Vector.svg'
import HeaderMenuLinkList from '../HeaderMenuLinkList/HeaderMenuLinkList'

const Header = () => {

    return <header className='header'>
        <div>
        <HeaderMenuLinkList />

        <img
        className='desktop__menu-logo'
        src={logo}
        alt='logo'
        />
            <img
            className='littleLogo'
            src='./picture/Vector.svg'
            alt='vector'
            />
            <img
                className='littleLogo'
                src='./picture/Vector.svg'
                alt='vector1'
            />
            <img
                className='littleLogo'
                src='./picture/Vector.svg'
                alt='vector2'
            />
        </div>

    </header>
}

export default Header;