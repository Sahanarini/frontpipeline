import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function Viewstudent() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:9009/student/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:9009/student/" + id)
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
        <h1 id="app2" className="text-center text-bg-secondary ">
          Registered Customer
        </h1>
        <div className="text-end">
          <Link to="/customerreg" className="btn btn-secondary">
            Add +
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
              
                <td>{d.name}</td>
                <td>{d.dept}</td>
                <td>{d.batch}</td>
                <td>{d.mobile}</td>
                {/* <td>{d.title}</td> */}
                <td>{d.feed.title}</td>
                {/* <td>{d.payroll.salary}</td> */}

                <td>
                  <Link
                    to={`/updateemp/${d.sid}`}
                    className="btn btn-sm btn-primary "
                  >
                    update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.sid)}
                    className="btn btn-sm ms-1 btn-secondary"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewstudent;