import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error fetching data:", err))
    }, []);
    return (
      <>
      <div
        className="d-flex vh-100 justify-content-center align-items-center"
        style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
      >
        <div className="container bg-white rounded p-4 shadow-lg">
          <h2 className="text-center mb-4 text-primary">Student List</h2>
          <div className="d-flex justify-content-end mb-3">
            <Link to="/create" className="btn btn-success btn-sm">
              Create +
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      No data available
                    </td>
                  </tr>
                ) : (
                  data.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <button className="btn btn-info btn-sm">Read</button>
                        <button className="btn btn-warning btn-sm mx-2">
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
