import "./Widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function Widget({type, darkMode}) {
  let data;

  const amount =  200;
  const diff =  20;

  switch(type) {
    case "users": 
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: <PersonIcon className="bottomIcon" style={{color:"green", backgroundColor: "#94af9482"}}/>
    };
    break;
    case "orders": 
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "See all orders",
      icon: <FactCheckIcon className="bottomIcon" style={{color:"goldenrod", backgroundColor:"#daa5204a"}}/>
    };
    break;
    case "earnings": 
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "See all earnings",
      icon: <AttachMoneyIcon className="bottomIcon" style={{color:"red", backgroundColor:"#ff000042"}}/>
    };
    break;
    case "balance": 
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See all balance",
      icon: <AccountBalanceWalletIcon className="bottomIcon" style={{color:"blue", backgroundColor:"#0000ff3b"}}/>
    };
    break;
    default:
    break;
  }

  return (
    <div className={darkMode?"widget dark":"widget"}>
      <div className="left">
        <h3>{data.title}</h3>
        <span className="num">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon className="icon"/>
          <span>{diff} %</span>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget