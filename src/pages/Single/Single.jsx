import "./Single.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Avatar from "../../img/avatar.jpg"
import Chart from "../../components/Chart/Chart"
import DataTable from "../../components/DataTable/DataTable"

function Single({darkMode, setDarkMode}) {
  return (
    <div className={darkMode?"single dark":"single"}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="singleContainer">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="top">
          <div className="left">
            <div className="header">
              <h4 className="title">Information</h4>
              <button className="edit">Edit</button> 
            </div>
            <div className="infoBox">
              <div className="imgBox">
                <img src={Avatar} alt="avatar" />
              </div>
              <div className="info">
                <h2 className="title">Jane Doe</h2>
                <div className="items">
                  <div className="item">
                    <div className="key">Email :</div>
                    <div className="value">happybird@gmail.com</div>
                  </div>
                  <div className="item">
                    <div className="key">phone :</div>
                    <div className="value">+ 249 111 084 874</div>
                  </div>
                  <div className="item">
                    <div className="key">Address :</div>
                    <div className="value">Eg, cairo Giza</div>
                  </div>
                  <div className="item">
                    <div className="key">Email :</div>
                    <div className="value">happybird@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User Last 6 Month Spending"}/>
          </div>
        </div>
        <div className="bottom">
          <DataTable title={"Last Transaction"}/>
        </div>
      </div>
    </div>
  )
}

export default Single