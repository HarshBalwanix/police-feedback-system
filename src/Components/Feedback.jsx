"use client";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/feedback.css";
import StarRating from "./StarRating";

function Feedback() {
  //const [statevis, setstatevis] = useState(false);
  //const [distvis, setdistvis] = useState(false);
  //const [cityvis, setcityvis] = useState(false);
  //const [stationvis, setstationvis] = useState(false);
  //const [finalvis, setfinalvis] = useState(false);
  // const navigate = useNavigate(false);
  // return (
  //   <div className="feedback_body">
  //     <form
  //       onSubmit={() => {
  //         // navigate("/Police");
  //       }}
  //     >
  //       <div className="feedback_form">
  //         <div>
  //           <h1>Feedback Form</h1>
  //         </div>
  //         <div className="inner_sub">
  //           <label>Name:</label>
  //           <input type="text" required></input>
  //         </div>
  //         <div className="inner_sub">
  //           <label>Aadhar Number:</label>
  //           <input type="number" required></input>
  //         </div>
  //         <div className="inner_sub">
  //           <label>Gender:</label>
  //           <select
  //             className={statevis ? "" : "placeh"}
  //             onChange={() => setstatevis(true)}
  //             required
  //           >
  //             <option className="placeh">select the Gender</option>
  //             <option className="noplace">Male</option>
  //             <option className="noplace">Female</option>
  //           </select>
  //         </div>
  //         {statevis && (
  //           <div className="inner_sub">
  //             <label>State</label>
  //             <select
  //               className={distvis ? "" : "placeh"}
  //               onChange={() => setdistvis(true)}
  //               required
  //             >
  //               <option className="placeh">select the state</option>
  //               <option className="noplace">Rajasthan</option>
  //               <option className="noplace">Jaipur</option>
  //             </select>
  //           </div>
  //         )}
  //         {distvis && (
  //           <div className="inner_sub">
  //             <label>District</label>
  //             <select
  //               className={cityvis ? "" : "placeh"}
  //               onChange={() => setcityvis(true)}
  //               required
  //             >
  //               <option className="placeh">select the District</option>
  //               <option className="noplace">Anupgarh</option>
  //               <option className="noplace">Ajmer</option>
  //             </select>
  //           </div>
  //         )}
  //         {cityvis && (
  //           <div className="inner_sub">
  //             <label>City</label>
  //             <select
  //               className={stationvis ? "" : "placeh"}
  //               onChange={() => setstationvis(true)}
  //               required
  //             >
  //               <option className="placeh">select the District</option>
  //               <option className="noplace">Jaipur</option>
  //               <option className="noplace">Jodhpur</option>
  //             </select>
  //           </div>
  //         )}
  //         {stationvis && (
  //           <div className="inner_sub">
  //             <label>Station List:</label>
  //             <select
  //               style={{ width: "17vw" }}
  //               className={finalvis ? "" : "placeh"}
  //               onChange={() => setfinalvis(true)}
  //               required
  //             >
  //               <option className="placeh">select the Police Station</option>
  //               <option className="noplace">Adarsh Nagar Police Station</option>
  //               <option className="noplace">
  //                 Jawahar Nagar Police Station
  //               </option>
  //             </select>
  //           </div>
  //         )}
  //         {finalvis && <button>Submit</button>}
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <>
      <main>
        <div>Title</div>
        <form action="">
          <div className="form-group">
            <div className="title">Police Station Name</div>
            <input
              autoFocus
              type="text"
              className="form-control under-label"
              id="name"
              name="name"
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <div className="title">Officer Name/ID (if known)</div>
            <input
              type="text"
              className="form-control under-label"
              id="officerName"
              name="officerName"
              aria-describedby="officerNameHelp"
            />
            <small id="officerNameHelp" className="form-text text-muted">
              Enter officer name or ID if known.
            </small>
          </div>

          <div className="form-group">
            <div className="title">
              Satisfaction with Interaction (Out of 5)
            </div>
            <select
              className="form-control"
              id="satisfaction"
              name="satisfaction"
              required
              aria-required="true"
            >
              <option value="5">5 - Very Satisfied</option>
              <option value="4">4 - Satisfied</option>
              <option value="3">3 - Neutral</option>
              <option value="2">2 - Dissatisfied</option>
              <option value="1">1 - Very Dissatisfied</option>
            </select>
          </div>

          <div className="form-group">
            <div className="title">Respectful Treatment by Police</div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="respectYes"
                name="respectfulTreatment"
                value="Yes"
                required
              />
              <label className="form-check-label" htmlFor="respectYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="respectNo"
                name="respectfulTreatment"
                value="No"
                required
              />
              <label className="form-check-label" htmlFor="respectNo">
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="title">Clear and Effective Communication</div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="communicationYes"
                name="communication"
                value="Yes"
                required
              />
              <label className="form-check-label" htmlFor="communicationYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="communicationNo"
                name="communication"
                value="No"
                required
              />
              <label className="form-check-label" htmlFor="communicationNo">
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="title">Professional Conduct by Police</div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="professionalYes"
                name="professionalConduct"
                value="Yes"
                required
              />
              <label className="form-check-label" htmlFor="professionalYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="professionalNo"
                name="professionalConduct"
                value="No"
                required
              />
              <label className="form-check-label" htmlFor="professionalNo">
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="title">Any Suggestions?</div>
            <textarea
              className="form-control"
              id="suggestions"
              name="suggestions"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <div className="title">Overall Service Rating (Out of 5)</div>
            <StarRating
              onChange={(rating) => console.log("Selected Rating:", rating)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Feedback;
