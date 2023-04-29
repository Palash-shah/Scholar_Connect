import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
const AddScholarship = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    SchemeName: "",
    Desciption:"",
    ClosingDate: "",
    Institute: "",
    WebsiteLink: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setdata({...data,[name]:value });
    console.log(data);
  };
  const validateButton = async() => {
    if (data.SchemeName !== "" && data.WebsiteLink !== "") {
      await axios.post("http://127.0.0.1:3001/addscholarship", data).then((res) => {
        if (res.data.user !== null) {
          alert("Scholarship Added");
          navigate("/home");
        } else {
          alert("Scholarship Not Added");
          navigate("/AddScholarship");
        }
      });
    } else {
      alert("Filled is empty");
    }
  };

  return (
    <>
      {/*        HEADER         */}

      <div className="container-Header">
        <div className="image-One">
          <img
            src={require('../Indian_Symbol.png')}
            alt="indian Government log"
            style={{position:'relative',left:'30px'}}
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
                      Add New Scholarship
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please provide scholarship detalis
                    </p>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Scheme Name</label>
                      <br></br>
                      <input
                        value={data.SchemeName}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="SchemeName"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>

    <div className="form-outline form-white mb-4">
                      <label className="form-label">Scheme Desciption</label>
                      <br></br>
                      <input
                        value={data.Desciption}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="Desciption"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Closing Date
                      </label>
                      <input
                        value={data.ClosingDate}
                        onChange={(e) => handleChange(e)}
                        name="ClosingDate"
                        type="date"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>
                  <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                      Institute Verification
                      </label>
                      <input
                        value={data.Institute}
                        onChange={(e) => handleChange(e)}
                        name="Institute"
                        type="date"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>
                    
                  <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                      Webiste Link 
                      </label>
                      <input
                        value={data.WebsiteLink}
                        onChange={(e) => handleChange(e)}
                        name="WebsiteLink"
                        type="url"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        style={{ width: "60%", marginLeft: "20%" }}
                      />
                    </div>
                    

                    <button
                      onClick={() => {
                        validateButton();
                      }}
                      className="btn btn-outline-light btn-lg px-5"
                      style={{ marginLeft: "100px" }}
                      type="button"
                    >
                      Submit
                    </button>
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

export default AddScholarship;
