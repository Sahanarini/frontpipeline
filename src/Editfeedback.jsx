import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Editfeedback() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // // const [salary, setSalary] = useState(0); // new state variable for salary
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9009/feedback/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:9009/feedback", data)
      .then((res) => {
        alert("User Updated Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center ">
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE Feedback</h1>
            <div>
              <label role="test-id" htmlFor="id">ID</label>
              <input
                type="number"
                disabled
                name="fid"
                className="form-control"
                value={data.fid}
                // onChange={handleInputChange}
              />
            </div>
            <div>
              <label data-testid="text-element" htmlFor="name">title:</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={data.title}
                onChange={(e) => setData({...data, title: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="mobile">comment :</label>
              <input
                type="text"
                name="comment"
                className="form-control"
                value={data.comment}
                onChange={(e) => setData({...data, comment: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="city">suggestion :</label>
              <input
                type="text"
                name="suggestion"
                className="form-control"
                value={data.suggestion}
                onChange={(e) => setData({...data, suggestion: e.target.value})}
              />
            </div>
            <br />
            <button data-testid="button-element" className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Editfeedback;