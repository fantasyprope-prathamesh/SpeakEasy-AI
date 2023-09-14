import React from "react";
import ResultSection from "./ResultSection";
import PromptSection from "./PromptSection";
import DownloadSection from "./DownloadSection";

function ResultDownloadPromptSection() {
  return (
    <>
      <div className="col-9 vh-100 ">
        <ResultSection />

        <DownloadSection />

        <PromptSection />
      </div>
    </>
  );
}

export default ResultDownloadPromptSection;
