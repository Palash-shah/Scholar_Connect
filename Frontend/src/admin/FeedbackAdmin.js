import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

//icons
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header.jsx";

export default function FeedbackAdmin() {
  const [Data, setData] = useState([]);
  var sno = 0;

  const getData = () => {
    axios
      .get(
        "http://127.0.0.1:3001/getFeedback"
      )
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F5F5", height: "97vh",marginLeft:'300px' }}
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
          Feedback Details
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* // first Row */}
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={14}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "0px",
                    letterSpacing: "0em",
                  }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Seach Here..."
                  />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Sr No
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  First Name
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  email
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Feedback Message
                </TableCell>
              </TableRow>
            </TableHead>
            {Data.map((user) => {
              sno = sno + 1;
              return (
                <TableBody key={user._id}>
                  <TableRow>
                    <TableCell align="center" style={{ width: "70px" }}>
                      {sno}
                    </TableCell>
                    <TableCell align="center">
                      {user.firstName}
                    </TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.feedbackmsg}</TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
