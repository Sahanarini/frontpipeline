import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function Viewfeedback() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9009/feedback/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (fid) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:9009/feedback/" + fid)
        .then((res) => {
          alert("record has deleted");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 role="text-test" id="app2" className="text-center text-bg-secondary ">
          Booking History
        </h1>
        <div className="text-end">
          <Link to="/create" className="btn btn-secondary">
            Add
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.fid}</td>
                <td>{d.title}</td>
                <td>{d.comment}</td>
                <td>{d.suggestion}</td>
                {/* <td>{d.salary}</td> */}
              
                <td>
                  <Link
                    to={`/update/${d.fid}`}
                    className="btn btn-sm btn-primary "
                  >
                    update
                  </Link>
<button role="button-element" onClick={(e) => handleSubmit(d.fid)} className="btn btn-sm ms-1 btn-secondary">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewfeedback;