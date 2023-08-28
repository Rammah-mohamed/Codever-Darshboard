import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Widget from "../../components/Widget/Widget"
import Featured from "../../components/Featured/Featured"
import Chart from "../../components/Chart/Chart"
import MainTable from "../../components/MainTable/MainTable"
function Home({darkMode, setDarkMode}) {
  return (
    <div className="home">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="homeContainer">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="widgets">
          <Widget darkMode={darkMode} type={"users"}/>
          <Widget darkMode={darkMode} type={"orders"}/>
          <Widget darkMode={darkMode} type={"earnings"}/>
          <Widget darkMode={darkMode} type={"balance"}/>
        </div>
        <div className="charts">
          <Featured darkMode={darkMode}/>
          <Chart aspect={2 / 1} title={"Last 6 Month Revenue"} darkMode={darkMode}/>
        </div>
        <MainTable darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default Home