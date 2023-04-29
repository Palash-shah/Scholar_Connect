import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  var ranNum = Math.floor(100000 + Math.random() * 900000);
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    dateofbirth: "2001-04-12",
    email: "",
    state: "",
    ScholarshipCategory: "",
    SchemeType: "",
    Gender: "",
    Mobile: "",
    BankIfscCode: "",
    BankAccount: "",
    password: "",
    applicationId: ranNum,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClick = () => {
    if (
      data.fullname !== "" &&
      data.dateofbirth !== "" &&
      data.email !== "" &&
      data.state !== "" &&
      data.ScholarshipCategory !== "" &&
      data.Gender !== "" &&
      data.password !== ""
    ) {
      alert(`Your ApplicationId: ${data.applicationId}`);

      axios.post("http://127.0.0.1:3001/register", data).then((res) => {
        navigate("/");
      });
    } else {
      alert("Filled is empty");
    }
  };

  return (
    <>
      <div className="signupheading1 text-justify text-center">
        <h4>
          <b>
            Academic Year 2022-23
            <br />
            Guidelines for Registration on Scholar Connect
          </b>
          <br />
          Welcome to Scholar Connect
        </h4>
        <hr />
      </div>
      <div className="content text-left mx-4">
        <h5>How to Apply?</h5>
        <p>
          Students applying for scholarship for the first time{" "}
          <span className="span1"> (Fresh Students) </span> need to{" "}
          <span className="span1">"Register"</span> on the portal as fresh
          applicant by providing accurate and authenticated information as
          printed on their documents in the{" "}
          <span className="span1"> "Student Registration Form"</span> .
        </p>
        <p>
          The registration form is required to be filled by parents / guardian
          of students who are below the age of 18 years on the date of
          registration.
        </p>
        <p>
          Before initiating registration process, students / Parents / guardian
          are advised to keep the following documents handy
        </p>
      </div>
      <div className="listcomponent mx-5">
        <ol>
          <li>Educational documents of student</li>
          <li>
            Student's Bank account number and IFSC code of the bank branch
          </li>
          <li> Aadhaar number of the Student</li>
          <li>
            If Aadhaar is not available, then Bonafide student certificate from
            Institute / School and
          </li>
          <li>Aadhaar Enrolment ID and Scanned copy of Bank passbook</li>
          <li>
            If Institute/School is different from domicile state of the
            applicant, then Bonafide student certificate from Institute /
            School.
          </li>
        </ol>
      </div>
      <h6 className="instruction mx-4">
        Brief instructions for filling up the online Application Form are given
        below (Fields marked with * are Mandatory fields):
      </h6>

      <div className="impnote my-4">
        <h5 className="signupheading1" style={{ marginLeft: "20px" }}>
          Important Note:
        </h5>
        <ol>
          <li>
            . After submitting the application, the default login id and
            password to log into NSP portal will be sent to the provided mobile
            number. In case the password is not received, the option for forgot
            password at login page shall be used.
          </li>
          <li className="list my-3">
            Students are advised to provide "Annual Family Income" as per the
            Income Certificate issued by competent authority in their
            scholarship application.
          </li>
        </ol>
      </div>

      {/* CREATE ACCOUNT */}

      <br />
      <div className="signup-heading text-center ml-5 ">
        <h4>
          <b>Fresh Registration For Academic Year 2022-23</b>
        </h4>

        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Name of Student/ अभ्यर्थी का नाम:</FormLabel>
          <TextField
            name="fullname"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            value={data.fullname}
            variant="outlined"
            placeholder="Full Name"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Date of Birth (DD/MM/YYYY)/ जन्म तिथि:</FormLabel>
          <TextField
            name="dateofbirth"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            variant="outlined"
            value={data.dateofbirth}
            type="date"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Email Id/ ईमेल आईडी:</FormLabel>
          <TextField
            name="email"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            type="email"
            placeholder="Enter Email ID"
            variant="outlined"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>
        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>State of Domicile:</FormLabel>
          <TextField
            name="state"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            select
            value={data.state}
            variant="outlined"
            label={data.state.length>0 ? "" : "Select State"}
            sx={{ backgroundColor: "white", height: "auto", width: "150px" }}
          >
            <MenuItem value="MadhyaPradesh">Madhya Pradesh</MenuItem>
            <MenuItem value="AndhraPradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Assam">Assam</MenuItem>
            <MenuItem value="Bihar">Bihar</MenuItem>
            <MenuItem value="Goa">Goa</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
          </TextField>
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Scholarship Category/ छात्रवृत्ति श्रेणी:</FormLabel>
          <TextField
            name="ScholarshipCategory"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            value={data.ScholarshipCategory}
            select
            variant="outlined"
            label={data.ScholarshipCategory.length>0 ? "" : "Select Scholarship Category"}
            sx={{ backgroundColor: "white", height: "auto" }}
          >
            <MenuItem value="SC/ST">SC/ST</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="EWS">EWS</MenuItem>
          </TextField>
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Scheme Type/ योजना का प्रकार:</FormLabel>
          <TextField
            name="SchemeType"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            value={data.SchemeType}
            select
            variant="outlined"
            label={data.SchemeType.length>0 ? "" : "Select Scheme Type"}
            sx={{ backgroundColor: "white", height: "auto" }}
          >
            <MenuItem value="OBC">For OBC</MenuItem>
            <MenuItem value="SC/ST">For SC/ST</MenuItem>
            <MenuItem value="Medhavi">Medhavi</MenuItem>
          </TextField>
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Gender/ लिंग:</FormLabel>
          <TextField
            name="Gender"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            value={data.Gender}
            select
            variant="outlined"
            label={data.Gender.length>0 ? "" : "Select Gender"}
            sx={{ backgroundColor: "white", height: "auto", width: "150px" }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="not">Perfer Not say</MenuItem>
          </TextField>
        </FormControl>
        <Divider />

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Mobile Number/ मोबाइल नंबर:</FormLabel>
          <TextField
            name="Mobile"
            value={data.Mobile}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            type="tel"
            variant="outlined"
            placeholder="Enter Mobile Number"
            sx={{ backgroundColor: "white", height: "auto"}}
          />
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Bank IFSC Code/ बैंक आई. एफ. एस. सी.:</FormLabel>
          <TextField
            name="BankIfscCode"
            value={data.BankIfscCode}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            variant="outlined"
            placeholder="Enter Bank IFSC Code"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Bank A/C Number/ बैंक खाता संख्या:</FormLabel>
          <TextField
            name="BankAccount"
            value={data.BankAccount}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            variant="outlined"
            placeholder="Enter Bank Account"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel>Password:</FormLabel>
          <TextField
            name="password"
            value={data.password}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            variant="outlined"
            type="password"
            placeholder="Create Password"
            sx={{ backgroundColor: "white", height: "auto" }}
          />
        </FormControl>
        <Divider />
        <Button
          color="success"
          variant="contained"
          onClick={handleClick}
          sx={{ marginBottom: 5 }}
          value="submit"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Signup;
