import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Addfeedback() {
  const [inputData, setInputData] = useState({
    title: "",
    rating: "",
    comment: "",
    suggestion: ""
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9009/feedback", inputData)
      .then((res) => {
        // alert("Data added Successfully");
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="add2" className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <center><h1>Book Taxi</h1></center>
        
          <div>
            <label role="title" htmlFor="title">title</label>
            <input type="text" name="title" className="form-control" onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }/>
          </div>
          <div>
            <label data-testid="text-element" htmlFor="city">rating:</label>
            <input type="text" name="rating" className="form-control" onChange={(e) =>
                setInputData({ ...inputData, rating: e.target.value })
              }/>
          </div>
          <div>
            <label htmlFor="bonus">comment :</label>
            <input type="text" name="comment" className="form-control" onChange={(e) =>
                setInputData({ ...inputData, comment: e.target.value })
              }/>
          </div>
          <div>
            <label htmlFor="bonus">suggestion:</label>
            <input type="text" name="suggestion" className="form-control" onChange={(e) =>
                setInputData({ ...inputData, suggestion: e.target.value })
              }/>
          </div>
          <br />
          <center><button data-testid="button-element" className="btn btn-info ">Submit</button></center>
        </form>
      </div>
    </div>
  );
}

export default Addfeedback;