import { Link } from 'react-router-dom'
import './index.scss'
import LogoDB from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoDB} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="portfolio"/>
        </Link>
    </div>
)

export default Sidebar
