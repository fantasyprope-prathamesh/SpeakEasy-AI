import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updatePrompts } from "./store/slices/promptSlice";
import { updateResult } from "./store/slices/resultSlice";

function ResultSection() {
  //----------------------------------------------------------------
  //use of useSelector..
  const currPrompt = useSelector((state) => {
    return state.prompts;
  });

  const dispatch = useDispatch();

  //---------------------------------------------------------------------
  //getting current prompt for result..
  const [newPrompt, setNewPrompt] = useState("");

  useEffect(() => {
    // console.log("I am from result :  " + currPrompt[0])

    setNewPrompt(currPrompt[0]);

    //-------
    //calll function.
    getResult();
  }, [currPrompt]);

  //current result.. storing..------------------------------

  const [result, setResult] = useState("");

  //========================

  //--------------------------------------------------------

  //request for server ..

  const getResult = async () => {
    console.log("heyyyyy");

    const options = {
      method: "POST",

      body: JSON.stringify({
        message: "hello",
        query: currPrompt[0],
      }),

      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8001/completions",
        options
      );

      const data = await response.json();

      //store this data into result state..
      setResult(data.choices[0].message.content);

      //also change global result so downlaodsection can able to access it..
      dispatch(updateResult(data.choices[0].message.content));

      console.log("your result :+ " + data.choices[0].message.content);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* result section */}
      <div
        className="bg-secondary-lighter d-flex justify-content-center align-self-center"
        style={{ height: "70vh", flexDirection: "column" , justifyContent:"center", alignItems:"center" }}
      >
        <div style={{ color: "white" , width: "80%" , fontWeight:"700",
        fontSize:"1.5em"
         }} className=" d-flex justify-content-center align-self-center">
          SpeakEasy AI
        </div>
     
          <div
            className="inner-ResultSection "
            style={{
              height: "80%",
              width: "80%",
              marginTop: "2rem",
              color: "white",
              overflow: "auto",
            }}
          >
            {result}
          </div>


      </div>
    </>
  );
}

export default ResultSection;

// return (
//   <>
//     {/* result section */}
//     <div className="bg-secondary-lighter d-flex justify-content-center align-self-center"
//     style={{ height: "70vh",flexDirection:"column"}}>

// <div style={{color:"white"}} className="border border-white">
//         jdkfdk
//       </div>

//       <div className="inner-ResultSection  "
//       style={{ height: "80%" ,width:"80%", marginTop:"4rem" , color: 'white',
//         overflow:'auto'
//        }}>

//        {result}

//       </div>
//     </div>
//   </>
// );
