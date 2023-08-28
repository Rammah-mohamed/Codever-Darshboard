import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Featured({darkMode}) {
  return (
    <div className={darkMode?"featured dark":"featured"}>
      <div className="top">
        <h3>Total Revenue</h3>
        <MoreVertIcon className="icon"/>
      </div>
      <div className="mid">
      <CircularProgressbar value={85} text="85%" className="circularChart" strokeWidth={5}/>
      <p className="text">Total sales made today</p>
      <span className="num">$800</span>
      </div>
      <div className="bottom">
        <p>previous transaction process last payment may not be included</p>
        <div className="items">
          <div className="item">
            <h4>Target</h4>
            <span className="num postive">
            <KeyboardArrowDownIcon className="icon"/>
            <span>$10 K</span>
            </span>
          </div>
          <div className="item">
            <h4>Last Week</h4>
            <span className="num negative">
            <KeyboardArrowUpIcon className="icon"/>
            <span>$22.8 K</span>
            </span>
          </div>
          <div className="item">
            <h4>Last Month</h4>
            <span className="num postive">
            <KeyboardArrowDownIcon className="icon"/>
            <span>$12.4 K</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured