import "./List.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import DataTable from "../../components/DataTable/DataTable"

function List({component, title, darkMode, setDarkMode}) {
  return (
    <div className="list">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="listContainer">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <DataTable component={component} title={title} darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default List