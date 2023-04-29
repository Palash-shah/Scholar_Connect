import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = React.useState({
    desc: "",
    link: "",
  });
  const handleClickOpen = (desc, link) => {
    setdata({
      desc: desc,
      link: link,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let sr = 0;
  let sr1 = 0;
  let sr2 = 0;
  let sr3 = 0;
  let sr4 = 0;
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  console.log(anchorElNav);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleLogout = () => {
    localStorage.removeItem("LoginId");
    navigate("/");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // datas
  const [PORTAL, setPORTAL] = React.useState([]);
  const [PRIVATE, setPRIVATE] = React.useState([]);
  const [mpscholar, setmpscholar] = React.useState([]);
  const [disabilties, setdisabilties] = React.useState([]);
  const [minorty, setminorty] = React.useState([]);

  const getData = async () => {
    await axios
      .get("http://127.0.0.1:3001/getportalscholarship")
      .then((res) => setPORTAL(res.data));

    await axios
      .get("http://127.0.0.1:3001/getprivatescholarship")
      .then((res) => setPRIVATE(res.data));

    await axios
      .get("http://127.0.0.1:3001/getminortyscholarship")
      .then((res) => setminorty(res.data));

    await axios
      .get("http://127.0.0.1:3001/getmpscholarship")
      .then((res) => setmpscholar(res.data));

    await axios
      .get("http://127.0.0.1:3001/getdisabiltiesscholarship")
      .then((res) => setdisabilties(res.data));
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <!-- top-header --> */}

      {/* <!-- header --> */}

      <div id="header">
        <div className="img-logo">
          <img
            className="logo"
            src={require("../Indian_Symbol.png")}
            alt="indian Government log"
          />
          <div className="header-content">
            <h6>
              सूचना विज्ञान केन्द्र
              <br /> Informatics Centre
            </h6>
          </div>

          <div className="heading-block">
            <h4 className="heading" style={{ marginLeft: "60px" }}>
              Scholar Connect
            </h4>
            <h6 className="heading-content">
              Ministry of Electronics & Information Technology, Government of
              India
              <br />
              <span className="color">(For Academic Year 2022-23)</span>
            </h6>
          </div>
          <img
            className="logo1"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
            alt="logo"
          />
        </div>
      </div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={require("../logo.jpg")}
              width={"8%"}
              style={{ borderRadius: "10px" }}
              alt="indian Government log"
            ></img>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 600,
                //   letterSpacing: '.2rem',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Scholar Connect
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/AddScholarship")}
              >
                Add Scholarship
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/Feedback")}
              >
                Feedback
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <!-- image and infomation --> */}

      <div className="info-main justify-content text-center">
        <h6 className="info">
          Please check the Announcement corner regularly for latest updates and
          information. For any technical queries, please contact
          <br />
          <span className="info-part justify-content text-center">
            from 8 AM to 8 PM on all days, excluding holidays
          </span>
        </h6>
      </div>

      <img
        className="img1"
        src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/19214617/NTPC-Utkarsh-Merit-scholarship-1024x640.png"
        alt="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/19214617/NTPC-Utkarsh-Merit-scholarship-1024x640.png"
        height="500px"
        style={{ marginTop: "10px" }}
      />

      <ul>
        <li>
          <h4 className="table-heading mx-3 my-5">
            NATIONAL SCHOLARSHIP FOR MINORITY
          </h4>
        </li>

        <table className="table table-striped table-hover text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Scheme closing Date</th>
              <th scope="col">Institute Verification</th>
              <th scope="col">Guidelines / Apply</th>
            </tr>
          </thead>
          <tbody>
            {minorty.map((item) => {
              sr = sr + 1;
              return (
                <tr key={item._id}>
                  <th scope="row">{sr}</th>
                  <td>{item.SchemeName}</td>
                  <td>Closed on {item.ClosingDate}</td>
                  <td>Closed on {item.InstituteVerification}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleClickOpen(item.Description, item.WebsiteLink)
                      }
                      variant="contained"
                      color="success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <li>
          <h4 className="table-heading mx-3 my-5">
            NATIONAL SCHOLARSHIP FOR PERSON WITH DISABILITIES
          </h4>
        </li>

        <table className="table table-striped table-hover text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Scheme closing Date</th>
              <th scope="col">Institute Verification</th>
              <th scope="col">Guidelines / Apply</th>
            </tr>
          </thead>
          <tbody>
            {disabilties.map((item) => {
              sr1 = sr1 + 1;
              return (
                <tr key={item._id}>
                  <th scope="row">{sr1}</th>
                  <td>{item.SchemeName}</td>
                  <td>Closed on {item.ClosingDate}</td>
                  <td>Closed on {item.InstituteVerification}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleClickOpen(item.Description, item.WebsiteLink)
                      }
                      variant="contained"
                      color="success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <li>
          <h4 className="table-heading mx-3 my-5">
            STATE SCHOLARSHIP FOR M.P STUDENT
          </h4>
        </li>

        <table className="table table-striped table-hover text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Scheme closing Date</th>
              <th scope="col">Institute Verification</th>
              <th scope="col">Guidelines / Apply</th>
            </tr>
          </thead>
          <tbody>
            {mpscholar.map((item) => {
              sr2 = sr2 + 1;
              return (
                <tr key={item._id}>
                  <th scope="row">{sr2}</th>
                  <td>{item.SchemeName}</td>
                  <td>Closed on {item.ClosingDate}</td>
                  <td>Closed on {item.InstituteVerification}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleClickOpen(item.Description, item.WebsiteLink)
                      }
                      variant="contained"
                      color="success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <li>
          <h4 className="table-heading mx-3 my-5">
            PRIVATE SCHOLARSHIP FOR STUDENTS
          </h4>
        </li>

        <table className="table table-striped table-hover text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Scheme closing Date</th>
              <th scope="col">Institute Verification</th>
              <th scope="col">Guidelines / Apply</th>
            </tr>
          </thead>
          <tbody>
            {PRIVATE.map((item) => {
              sr3 = sr3 + 1;
              return (
                <tr key={item._id}>
                  <th scope="row">{sr3}</th>
                  <td>{item.SchemeName}</td>
                  <td>Closed on {item.ClosingDate}</td>
                  <td>Closed on {item.InstituteVerification}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleClickOpen(item.Description, item.WebsiteLink)
                      }
                      variant="contained"
                      color="success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <li>
          <h4 className="table-heading mx-3 my-5">
            PRIVATE SCHOLARSHIPS ON OUR PORTAL
          </h4>
        </li>

        <table className="table table-striped table-hover text-center ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Scheme Name</th>
              <th scope="col">Scheme closing Date</th>
              <th scope="col">Institute Verification</th>
              <th scope="col">Guidelines / Apply</th>
            </tr>
          </thead>
          <tbody>
            {PORTAL.map((item) => {
              sr4 = sr4 + 1;
              return (
                <tr key={item._id}>
                  <th scope="row">{sr4}</th>
                  <td>{item.SchemeName}</td>
                  <td>Closed on {item.ClosingDate}</td>
                  <td>Closed on {item.Institute}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleClickOpen(item.Description, item.WebsiteLink)
                      }
                      variant="contained"
                      color="success"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ul>
      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Scholarship Details
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>{data.desc}</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant="contained" color="success">
              <a
                href={data.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Apply
              </a>
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      {/* FOOTER */}

      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4"></div>

            <div className="col-md-6 mb-4"></div>
          </div>
        </div>

        <h6 className="justify-content text-center">
          This site is designed, developed and hosted by Team Thunder , content
          provided by Scholar Connect.
        </h6>
        <p className="justify-content text-center my-3">
          Last Updated on 12th Apr 2023
        </p>

        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <img
            className="footer-img1"
            src="https://presentations.gov.in/wp-content/uploads/2020/06/2.png?x19336"
            alt=""
          />
          <img
            className="footer-img2"
            src="https://presentations.gov.in/presgov_new/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-sans-01.jpg?x91911"
            alt=""
          />
        </div>
      </footer>
    </>
  );
};

export default Home;
