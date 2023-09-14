import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faShare,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updatePrompts } from "./store/slices/promptSlice";

function PromptSection() {
  const allPrompts = useSelector((state) => {
    return state.prompts;
  });

  useEffect(() => {
    console.log(allPrompts);
  }, [allPrompts]);

  //=-----------------------------------------------------

  const [currentPrompt, setCurrentPrompt] = useState("");
  const handlingPrompt = (value) => {
    // console.log(value)
    setCurrentPrompt(value);
  };

  //--------------------------------------------

  const dispatch = useDispatch();

  const executePrompt = (value) => {
    // console.log("promt from state  : " + value );

    dispatch(updatePrompts(value));
  };

  return (
    <>
      {/* prompt section */}
      <div
        className="bg-secondary-medium d-flex  justify-content-center
         align-self-center "
        style={{ height: "20vh" }}
      >
        <div
          className="inner-Prompt-Section d-flex justify-content-center
         align-self-center"
          style={{
            height: "45%",
            width: "80%",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          {/* input box */}

          <div
            className="input-parent d-flex "
            style={{
              height: "100%",
              width: "100%",
              outline: "none",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <input
              style={{
                width: "90%",
                outline: "none",
                border: "white",
                backgroundColor: "rgb(56, 55, 55)",
                color: "white",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
              type="text"
              placeholder="Enter Prompt"
              id="prompt"
              className="prompt p-4"
              // on change event

              onChange={(event) => {
                handlingPrompt(event.target.value);
              }}
            />

            <FontAwesomeIcon
              icon={faCaretRight}
              onClick={(event) => {
                executePrompt(currentPrompt);
              }}
              className=" "
              style={{
                width: "10%",
                height: "100%",
                color: "green",
                backgroundColor: "rgb(56, 55, 55)",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PromptSection;
