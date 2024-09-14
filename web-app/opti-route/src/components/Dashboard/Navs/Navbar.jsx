import './Navbar.css'

function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">OptiRoute</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-light" href="#">Accidents</a>
                    <a className="nav-link text-light" href="#">Vioaltions</a>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
