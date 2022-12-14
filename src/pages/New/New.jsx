import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./New.scss";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
function New({ inputs, title }) {

  const [file,setFile]=useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image <DriveFolderUploadOutlinedIcon className="icon" />{" "}
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={e=>setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  placeholder="upload a new file"
                ></input>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input._id}>
                  <label> {input.label}</label>
                  <input type={input.type}
                   placeholder={input.placeholder}></input>
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
