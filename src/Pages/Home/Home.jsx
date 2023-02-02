import axios from "axios";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [developers, setDevelopers] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  // handle delete
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5050/developers/${id}`).then((res) => {
          setDevelopers(developers.filter((data) => data.id !== id));
        });
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/developers?_sort=id&_order=desc")
      .then((res) => {
        setDevelopers(res.data);
      });
  }, [setDevelopers]);

  return (
    <>
      <div className="home my-5">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Link to={"/create"} className="btn btn-primary mb-3">
                Add new developer
              </Link>
              <div className="card shadow">
                <div className="card-header bg-primary text-center text-white pb-0">
                  <h3 className="mb-3">Our Developers</h3>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                        <th>Photo</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {developers.map((devs, index) => (
                        <tr key={index} className="align-middle">
                          <td>{index + 1}</td>
                          <td>{devs.name}</td>
                          <td>{devs.age}</td>
                          <td>{devs.skill}</td>
                          <td>
                            <img
                              className="table-photo"
                              src={devs.photo}
                              alt=""
                            />
                          </td>
                          <td>
                            {modalShow && (
                              <Modal title={"Information"} hide={setModalShow}>
                                <div className="row">
                                  <div className="col-md-6">
                                    <img
                                      className="w-100"
                                      src={devs.photo}
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <h2>{devs.name}</h2>
                                    <hr />
                                    <p>Age : {devs.age}</p>
                                    <p>Skill : {devs.skill}</p>
                                  </div>
                                </div>
                              </Modal>
                            )}
                            <button
                              onClick={() => setModalShow(true)}
                              className="btn btn-sm btn-primary"
                            >
                              <i class="bx bx-show"></i>
                            </button>
                            <Link
                              to={`/edit/${devs.id}`}
                              className="btn btn-sm btn-warning mx-1"
                            >
                              <i class="bx bx-edit"></i>
                            </Link>
                            <button
                              onClick={() => handleDelete(devs.id)}
                              className="btn btn-sm btn-danger"
                            >
                              <i class="bx bx-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
