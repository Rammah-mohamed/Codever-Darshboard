import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from "react-router-dom";

function Sidebar({darkMode, setDarkMode}) {
  return (
    <div className={darkMode?"sidebar dark":"sidebar"}>
      <div className="top">
        <Link to={"/"} style={{textDecoration:"none"}}>
        <h2>Codever Admin</h2>
        </Link>
      </div>
        <hr />
      <div className="mid">
        <div className="sideList">
          <h3>MAIN</h3>
          <ul>
            <Link to={"/"} style={{textDecoration:"none"}}>
              <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sideList">
          <h3>LISTS</h3>
          <ul>
            <Link to={"/users"} style={{textDecoration:"none"}}>
              <li>
                <PersonIcon className="icon"/>
                <span>Users</span>
              </li>
            </Link>
            <Link to={"/products"} style={{textDecoration:"none"}}>
              <li>
                <SellIcon className="icon"/>
                <span>Products</span>
              </li>
            </Link>
            <li>
              <FactCheckIcon className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon"/>
              <span>Delivery</span>
            </li>
          </ul>
        </div>
        <div className="sideList">
          <h3>USEFUL</h3>
          <ul>
            <li>
              <QueryStatsIcon className="icon"/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsIcon className="icon"/>
              <span>Notifications</span>
            </li>
          </ul>
        </div>
        <div className="sideList">
          <h3>SERVICES</h3>
          <ul>
            <li>
              <LocalHospitalIcon className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <LoginIcon className="icon"/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="sideList">
          <h3>USER</h3>
          <ul>
            <li>
              <AssignmentIndIcon className="icon"/>
              <span>Profile</span>
            </li>
            <li>
              <LoginIcon className="icon"/>
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="white" onClick={() => setDarkMode(false)}></div>
        <div className="dark" onClick={() => setDarkMode(true)}></div>
      </div>
    </div>
  )
}

export default Sidebar