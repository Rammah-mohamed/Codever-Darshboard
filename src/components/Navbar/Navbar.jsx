import "./Navbar.scss"
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from "../../img/avatar.jpg"

function Navbar({darkMode, setDarkMode}) {
  return (
    <div className={darkMode?"navbar dark":"navbar" }>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            <span>English</span>
          </div>
          <div className="item" onClick={() => setDarkMode(!darkMode)}>
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <ZoomInMapIcon className="icon"/>
          </div>
          <div className="item">
            <span className="notify">1</span>
            <NotificationsIcon className="icon"/>
          </div>
          <div className="item">
            <span className="notify">3</span>
            <MessageIcon className="icon"/>
          </div>
          <div className="item">
            <ListIcon className="icon"/>
          </div>
          <div className="item">
            <img src={Avatar} alt="" />
          </div>
          <div className="item">
            <SettingsIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar