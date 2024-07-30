import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Addstudent() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    id: "-1",
    name: "",
    dept: "",
    batch: "",
    mobile: "",
    back: "",
    feed: {
      fid: "",
      title: "",
      rating:"",
      comment: "",
      suggestion: "",
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:9009/feedback/idList")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  let handleChange = (e) => {
    if (e.target.name === "fid") {
      console.log(e.target.value);
      setInputData({ ...inputData, feedback: { fid: e.target.value } });
      axios.get("http://localhost:9009/feedback/" + e.target.value)
        .then((res) => {
          console.log(res.data);
          setInputData({ ...inputData, feedback: res.data });
          return res.data;
        })
        .catch((err) => console.error(err));
    }
  }

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9009/student", inputData)
      .then((res) => {
        console.log(inputData);
        alert("Data added Successfully");
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="add2" className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <center>
            <h1>student Registration</h1>
          </center>
          <div>
            <label role="text-name" htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            } />
          </div>
          <div>
            <label htmlFor="dept">dept:</label>
            <input type="text" name="dept" className="form-control" onChange={(e) =>
              setInputData({ ...inputData, dept: e.target.value })
            } />
          </div>
          <div>
            <label htmlFor="desg">batch:</label>
            <input type="number" name="batch" className="form-control" onChange={(e) =>
              setInputData({ ...inputData, batch: e.target.value })
            } />
          </div>
          <div>
            <label htmlFor="desg">mobile:</label>
            <input type="number" name="mobile" className="form-control" onChange={(e) =>
              setInputData({ ...inputData, mobile: e.target.value })
            } />
          </div>
          <div>
            <label  data-testid="feed" htmlFor="desg">feedback:</label>
            <input type="text" name="back" className="form-control" onChange={(e) =>
              setInputData({ ...inputData, back: e.target.value })
            } />
          </div>
          <div>
            <label htmlFor="fid">Booking Id</label>
            <select
              className="form-select"
              required="required"
              name="fid"
              title="Select ID "
              onChange={handleChange}
            >
              <option name="fid" selected="selected">
                Select One
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center>
            <button role="sub-id" className="btn btn-info ">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Addstudent;