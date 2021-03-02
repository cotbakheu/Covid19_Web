import Logo from '../assets/images/logo_covid.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const home = {
    //     color: 'red'
    // }
    return (
        <div className="container-fluid shadow-sm p-3 row fixed-top bg-light">
            <div className="ml-5 col-4">
                <Link to='/' style={{ color: 'red', textDecoration: 'none' }}><h1>
                    COVID-19
                <img className="ml-2" width="50px" src={Logo} alt="virus" />
                </h1>
                </Link>
            </div>
            <div className="col-7 d-flex justify-content-end">
                <Link to='/data' className="ml-2 mt-2"><h3>Data</h3></Link>
                <Link className="mx-5 mt-2"><h3>About Us</h3></Link>
            </div>
        </div>
    )
}

export default Navbar