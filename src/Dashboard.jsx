import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Sidebar from "./Sidebar";
import ResultDownloadPromptSection from "./ResultDownloadPromptSection";

function Dashboard() {
  return (
    <>
      <div className="container-fluid vh-100 m-0 p-0">
        <div className="row g-0 m-0">
          {/* side bar  ------------------------------------------------------*/}
          <Sidebar />
          {/* right container ---------------------------------------------*/}
          <ResultDownloadPromptSection />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
