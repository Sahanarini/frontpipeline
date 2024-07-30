import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Editstudent() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // // const [salary, setSalary] = useState(0); // new state variable for salary
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9009/student/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  //   // calculate salary whenever gsalary, allow, or bonus changes
  //  /* if (name === "gsalary" || name === "allow" || name === "bonus") {
  //     const gsalary = parseInt(data.gsalary, 10);
  //     const allow = parseInt(data.allow, 10);
  //     const bonus = parseInt(data.bonus, 10);
  //     const newSalary = gsalary + allow + bonus;
  //     setSalary(newSalary);
  //   }
  //   */
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:9009/student", data)
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
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE APPLICANT DATA</h1>
            <div>
              <label data-testid="text-element" htmlFor="id">ID</label>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                value={data.id}
              // onChange={handleInputChange}
              />
            </div>
            <div>
              <label role="name" htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="mobile">dept :</label>
              <input
                type="text"
                name="dept"
                className="form-control"
                value={data.dept}
                onChange={(e) => setData({ ...data, dept: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="city">batch :</label>
              <input
                type="number"
                name="batch"
                className="form-control"
                value={data.batch}
                onChange={(e) => setData({ ...data, batch: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="city">mobile :</label>
              <input
                type="number"
                name="mobile "
                className="form-control"
                value={data.mobile}
                onChange={(e) => setData({ ...data, mobile: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="city">feedback :</label>
              <input
                type="text"
                name="feedback "
                className="form-control"
                value={data.feedback}
                onChange={(e) => setData({ ...data, feedback: e.target.value })}
              />
            </div>
            <br />
            <button  data-testid="button-element"  className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Editstudent;