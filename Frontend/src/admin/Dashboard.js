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
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//icons
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header.jsx";

export default function Dashboard() {
  const [Data, setData] = useState([]);
  var sno = 0;
  // ---delete Code---
  const [open, setOpen] = React.useState(false);
  const [deleteitem, setdeleteitem] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    setOpen(true);
    setdeleteitem(id);
  };

  const confirmDelete = async (id) => {
    await axios
      .delete(
        `http://127.0.0.1:3001/deleteuser/${id}`
      )
      .then(() => {
        handleClose();
        getData();
      });
  };

  const getData = async() => {
    await axios
      .get(
        "http://127.0.0.1:3001/userDetails"
      )
      .then((res) => {
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
          Users Details
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* first Row */}
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
                  Application Id
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
                  Full Name
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
                  Date of Birth
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
                  Email
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
                  State
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
                  Scholarship Category
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
                  Scheme Type
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
                  Gender
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
                  Mobile
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
                  Bank IFSC Code
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
                  Bank Account
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
                  Delete
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
                      {user.applicationId}
                    </TableCell>
                    <TableCell align="center">{user.fullname}</TableCell>
                    <TableCell align="center">{user.dateofbirth}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.state}</TableCell>
                    <TableCell align="center">{user.ScholarshipCategory}</TableCell>
                    <TableCell align="center">{user.SchemeType}</TableCell>
                    <TableCell align="center">{user.Gender}</TableCell>
                    <TableCell align="center">{user.Mobile}</TableCell>
                    <TableCell align="center">{user.BankIfscCode}</TableCell>
                    <TableCell align="center">{user.BankAccount}</TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        className="DeleteIcon"
                        sx={{cursor:'pointer', '&:hover': {color: "red"}}}
                        onClick={() =>
                          handleDelete(user._id)
                        }
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your will not be able to recover this imaginary file!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>cancle</Button>
            <Button onClick={() => confirmDelete(deleteitem)} autoFocus>
              Yes, delete it!
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
