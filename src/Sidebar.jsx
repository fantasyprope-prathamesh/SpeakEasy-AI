import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward , faShare , faCaretRight, faMessage   } from "@fortawesome/free-solid-svg-icons";
import { updatePrompts , emptyPrompts } from "./store/slices/promptSlice";


function Sidebar() {

  //---------------------------------------------------------------
  const allPrompts = useSelector((state) => {
    return state.prompts;
  });

  const dispatch = useDispatch();

  const handleNewChat = ()=>{
    dispatch( emptyPrompts() )
  }
  //---------------------------------------------------------------


  //----------------------------------------------------------------------------------

  const [currPrompt, setCurrPrompt] = useState([]);

  useEffect(() => {
    console.log("side bar aso affected");

    setCurrPrompt(allPrompts);
  }, [allPrompts]);


  //icons array..
  // const combinedMessageIcon = [faRegular,faMessage];

  return (
    <>
      {/* left container */}
      <div className="col-3 bg-secondary-dark vh-100 p-3 ">

        <div
        className="newChat border border-light"
        
        onClick={handleNewChat}

        style={{color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2",
            cursor:"pointer",
            fontSize:"1.5em",
            fontWeight:"700"
            }} >

               +  New Chat
        </div>

        <div
          className="inner-sidebar  vh-100"
          style={{
            marginTop:"20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "2",

            overflow:'auto'
          }}
        >
          {allPrompts.map((value, index) => {
            return (
              <div key={index} style={{padding:"3px"}}>

                <FontAwesomeIcon
                  icon= {faMessage}
                  
                  className=" "
                  style={{
                    // width: "10%",
                    // height: "100%",
                  }}
                />{" "}
                
                {/* prompts display.. */}
                {value}

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
