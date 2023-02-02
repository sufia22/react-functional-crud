import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    skill: "",
    photo: "",
  });
  const navigate = useNavigate();

  // handle input change
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/developers", input).then((res) => {
      setInput({
        name: "",
        age: "",
        skill: "",
        photo: "",
      });
    });
    navigate("/");
  };

  return (
    <>
      <div className="add my-5">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <Link to={"/"} className="btn btn-primary mb-3">
                Go back
              </Link>
              <div className="card shadow">
                <div className="card-header bg-primary text-center text-white pb-0">
                  <h3 className="mb-3">Add Developers</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleForm}>
                    <div className="my-2">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Age</label>
                      <input
                        type="text"
                        name="age"
                        value={input.age}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Skill</label>
                      <input
                        type="text"
                        name="skill"
                        value={input.skill}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Photo</label>
                      <input
                        type="text"
                        name="photo"
                        value={input.photo}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-3">
                      <button type="submit" className="btn btn-primary">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
