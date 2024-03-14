import React from "react";
import { MdDownload } from "react-icons/md";
import "./Resume.css";
import { Link } from "react-router-dom";

const Resume = () => {
  const resume_pdf = "http://localhost:3000/Assets/Mohammed_Ishrath.pdf";

  const downloadFile = (url) => {
    const pdfUrl = resume_pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mohammed_Ishrath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-page">
      <div className="download-links">
        <div className="box">
          <Link className="text">
            <MdDownload className="download-resume" />
          </Link>
          <button className="button" onClick={() => downloadFile(resume_pdf)}>
            <p className="buttonName">Download Resume</p>
          </button>
        </div>
        <div className="box">
          <Link className="text">
            <MdDownload className="download-resume" />
          </Link>
          <button className="button">
            <p className="buttonName">Download CV</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
