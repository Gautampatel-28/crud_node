import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/student", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex vh-100 justify-content-center align-items-center"
        style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
      >
        <div className="w-50 bg-white rounded shadow-lg p-4">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 text-primary">Add Student</h2>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label fw-bold">
                Name
              </label>
              <input
                id="nameInput"
                type="text"
                placeholder="Enter Name"
                className="form-control border-primary"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label fw-bold">
                Email
              </label>
              <input
                id="emailInput"
                type="email"
                placeholder="Enter Email"
                className="form-control border-primary"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
