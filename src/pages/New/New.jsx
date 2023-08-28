import "./New.scss"
import "../../Dark.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import NoImage from "../../img/noImage.png"
import { useState } from "react";
function New({inputs, title,darkMode, setDarkMode}) {
  const [file, setFile] = useState("")
  return (
    <div className={darkMode?"new dark":"new"}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className="newContainer">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="top">
          <h2 className="title">{title}</h2>
        </div>
        <div className="bottom">
          <div className="wrapper">
          <div className="left">
            <div className="imgBox">
              <img src={file ? URL.createObjectURL(file) : NoImage} alt="avatar" />
            </div>
          </div>
          <div className="right">
            <form>
              <div className="inputBox">
                <label htmlFor="image" className="image">
                  <span>Import Image</span>
                  <UploadFileIcon className="icon"/>
                </label>
                <input type="file" name="image" id="image" onChange={e => setFile(e.target.files[0])}/>
              </div>
              {inputs.map(i => (
                <div className="inputBox" key={i.id}>
                  <label className="label" htmlFor={i.id}>{i.lable}</label>
                  <input type={i.type} placeholder={i.placeHolder} id={i.id}/>
                </div>
              ))}
              <button className="submit">Send</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New