import Logo from '../assets/images/logo_covid.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const home = {
    //     color: 'red'
    // }
    return (
        <div className="shadow-sm py-3 px-5 fixed-top bg-light">
            <div className='container-fluid row'>
                <div className="col-4">
                    <Link to='/' style={{ color: 'red', textDecoration: 'none' }}><h1>
                        COVID-19
                <img className="ml-2" width="50px" src={Logo} alt="virus" />
                    </h1>
                    </Link>
                </div>
                <div className="col-7 d-flex justify-content-end">
                    <Link to='/data' className="ml-5 mt-2"><h3>Data</h3></Link>
                    <Link to='/news' className="ml-5 mt-2"><h3>News</h3></Link>
                    <Link to='/preventions' className="mx-5 mt-2"><h3>Preventions</h3></Link>
                    <Link to='/about' className="mt-2"><h3>About Us</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar