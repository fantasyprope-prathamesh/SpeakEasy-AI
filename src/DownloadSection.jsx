import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateResult } from "./store/slices/resultSlice";

function DownloadSection() {
  //accessing global result state..
  const resultText = useSelector((state) => {
    return state.result;
  });

  useEffect(() => {
    console.log("hellow this is downloadSection" + resultText);
  }, [resultText]);

  const contentRef = useRef(null);

  const handleExportClick = () => {
    console.log("my one : " + resultText);

    // const content = contentRef.current.innerText;
    const content = resultText;
    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-content.doc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* download section  */}
      <div
        className="bg-download-section-color d-flex justify-content-center align-self-center "
        style={{ height: "10vh" }}
      >
        <div
          id="content"
          ref={contentRef}
          className="inner-Download-Section   d-flex justify-content-center align-self-center"
          style={{
            height: "70%",
            width: "80%",
            marginTop: "0.7em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-primary"
            style={{ height: "80%" }}
            onClick={handleExportClick}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default DownloadSection;
