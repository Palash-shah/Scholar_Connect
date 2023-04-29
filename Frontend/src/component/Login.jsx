import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    applicationId: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setdata({ ...data, [name]: value });
  };
  const validateButton = () => {
    if (data.password !== "" && data.applicationId !== "") {
    axios.post('http://127.0.0.1:3001/login',data)
    .then((res)=>{
      if(res.data.user !== null){
        alert("Login Successful")
        navigate('/home')
      }else{
        alert("Login Unsuccessful")
        navigate('/')
      }
      })
    }else {
      alert("Filled is empty");
    }
  }
    
  return (
    <>
      {/*        HEADER         */}

      <div className="container-Header">
        <div className="image-One">
          <img
            src={require('../Indian_Symbol.png')}
            alt="indian Government log"
          />
        </div>
        <div className="HeadText">
          <p>Scholar Connect</p>
        </div>
        <div className="image-Two">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
            alt="logo"
          />
        </div>
      </div>

      <section className="formx vh-100 gradient-custom ">
        <div className="container py-5  ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="card bg-dark text-white">
                <div
                  className="card-body p-5 text-center h-1"
                  style={{ height: "40%" }}
                >
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Login for Fresh Application
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please provide your Application and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Application Id. . .</label>
                      <br></br>
                      <input
                        value={data.applicationId}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="applicationId"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        value={data.password}
                        onChange={(e) => handleChange(e)}
                        name="password"
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      onClick={() => {
                        validateButton();
                      }}
                      className="btn btn-outline-light btn-lg px-5"
                      style={{ marginLeft: "100px" }}
                      type="submit"
                    >
                      Login
                    </button>
                    <p className="mt-5">
                      New Student? <Link to="/Signup">Register Here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
