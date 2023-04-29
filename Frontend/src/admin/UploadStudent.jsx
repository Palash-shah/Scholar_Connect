import {
  Box,
  Button,
  FormControl,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function UploadStudent() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    SchemeName: "",
    Description: "",
    ClosingDate: "2023-04-23",
    InstituteVerification: "2023-05-23",
    Address: "",
    WebsiteLink: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleClickfun = async () => {
    await axios
      .post(
        "http://127.0.0.1:3001/addprivateScholarship",
        data
      )
      .then((res) => {
        const { message } = res.data;
        alert(message);
        setdata({
          SchemeName: "",
          Description: "",
          ClosingDate: "2023-04-23",
          InstituteVerification: "2023-05-23",
          Address: "",
          WebsiteLink: "",
        });
      });
  };
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#F5F5F5",
          height: "auto",
          marginLeft: "300px",
        }}
      >
        <Toolbar />
        <Typography
          variant="h4"
          sx={{
            color: "#4F5256",
            fontWeight: 700,
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          PRIVATE SCHOLARSHIP FOR STUDENTS
        </Typography>

        <Box
          sx={{
            marginLeft: "50px",
            marginRight: "50px",
            width: "auto",
            height: "auto",
            marginTop: "20px",
            background: "#FFFFFF",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "35px",
              fontWeight: 400,
              lineHeight: "30px",
              fontFamily: "Roboto",
              padding: "20px",
              textAlign: "center",
            }}
          >
            Add Scholarship
          </Typography>
          <Typography
            sx={{ width: "100%", border: "1px solid #F0F0F0" }}
          ></Typography>
          <Typography
            variant="h4"
            sx={{
              padding: "20px",
              color: "#4F5256",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Scholarship Details
          </Typography>
          <Typography
            sx={{ width: "100%", border: "1px solid #F0F0F0" }}
          ></Typography>

          <FormControl
            sx={{
              paddingTop: "20px",
              paddingLeft: "50px",
              paddingRight: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
              Scheme Name
            </Typography>
            <TextField
              sx={{ width: "75%" }}
              placeholder="ex. Mukhya Mantri Jan Kalyan (Shiksha Protsahan Yojna)"
              name="SchemeName"
              value={data.SchemeName}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </FormControl>

          <FormControl
            sx={{
              paddingLeft: "40px",
              paddingRight: "50px",
              paddingTop: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
              Scheme Descripiton
            </Typography>
            <TextField
              sx={{ width: "75%" }}
              placeholder="ex. A grant or payment made to support a student's education, awarded on the basis of academic or other achievement"
              name="Description"
              value={data.Description}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </FormControl>

          <FormControl
            sx={{
              paddingLeft: "40px",
              paddingRight: "50px",
              paddingTop: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
              Scheme Closing Date
            </Typography>
            <TextField
              sx={{ width: "75%" }}
              name="ClosingDate"
              type="date"
              value={data.ClosingDate}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </FormControl>

          <FormControl
            sx={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
              Institute Verification
            </Typography>
            <TextField
              sx={{ width: "75%" }}
              name="InstituteVerification"
              type="date"
              value={data.InstituteVerification}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </FormControl>

          <FormControl
            sx={{
              paddingLeft: "40px",
              paddingRight: "50px",
              paddingTop: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ padding: "15px", color: "#4F5256" }}>
              Website Link
            </Typography>
            <TextField
              sx={{ width: "75%" }}
              placeholder="ex. https://scholarships.gov.in/"
              name="WebsiteLink"
              type="url"
              value={data.WebsiteLink}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </FormControl>

          <FormControl
            sx={{
              padding: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              size="large"
              variant="outlined"
              sx={{ bgcolor: "#fff", marginRight: "10px", color: "#000" }}
              startIcon={<ArrowBackIcon />}
              onClick={()=>navigate('/admin')}
            >
              Back
            </Button>
            <Button
              size="large"
              variant="contained"
              color="success"
              startIcon={<CheckIcon />}
              type="button"
              onClick={() => handleClickfun()}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
