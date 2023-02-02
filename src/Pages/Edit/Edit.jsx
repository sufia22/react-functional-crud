import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    skill: "",
    photo: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

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
    axios.patch(`http://localhost:5050/developers/${id}`, input);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/developers/${id}`).then((res) => {
      setInput(res.data);
    });
  }, []);

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
                  <h3 className="mb-3">Edit Developers</h3>
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
                        Update
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

export default Edit;
