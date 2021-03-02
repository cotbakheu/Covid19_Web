import Logo from '../assets/images/logo_covid.webp'

const Navbar = () => {
    // const home = {
    //     color: 'red'
    // }
    return (
        <div className="container-fluid shadow-sm p-3 row fixed-top bg-light">
            <div className="ml-5 col-4">
                <h1 style={{ color: 'red' }}> COVID-19
                <img className="ml-2" width="50px" src={Logo} alt="virus" />
                </h1>
            </div>
            <div className="col-7 d-flex justify-content-end">
                <h3 className="ml-2 mt-2">Data</h3>
                <h3 className="mx-5 mt-2">About Us</h3>
            </div>
        </div>
    )
}

export default Navbar