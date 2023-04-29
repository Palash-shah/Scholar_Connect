import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem sx={{ height: 130, flexDirection: "column" }}>
              <ListItemIcon>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  height="64px"
                  width="60px"
                  alt="profileImg"
                />
                <br></br>
              </ListItemIcon>
              <Typography sx={{ fontSize: "14px", color: "#6C7177" }}>
                Welcome
              </Typography>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin/feedbackadmin')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Feedback" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin/UploadMinorityScholar')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Upload Minority Scholarship" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin/UploadDisabilitlesScholar')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Upload Disabilitles Scholarship" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin/UploadMpScholar')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Upload M.P. Scholarship" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton onClick={()=>navigate('/admin/uploadstudent')}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#6945FF" }} />
                </ListItemIcon>
                <ListItemText sx={{ fontSize: "14px" }} primary="Upload Private Scholarship" />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  );
}
