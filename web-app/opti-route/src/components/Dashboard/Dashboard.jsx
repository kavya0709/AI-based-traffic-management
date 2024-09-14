import './Dashboard.css'
import Navbar from './Navs/Navbar'
import CamDisplay from '../Cameras/CamDisplay'

function Dashboard() {
    // var camSingle = false;
    return(
        <>
        <div className="dashboard-container">
            <Navbar />
            <CamDisplay />
        </div>
        </>
    )
}

export default Dashboard
