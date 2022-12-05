import './header.css';

const Header = () => {

    return <header className='header'>
        <div className='desktopMenu'>
            <a href="#" className="title-1">Home</a>
            <a href="#" className="title-1">Product</a>
            <a href="#" className="title-1">Pricing</a>
            <a href="#" className="title-1">About</a>
            <a href="#" className="title-1">Contact</a>

        <img
        className='Logo'
        src='./picture/logo.png'
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