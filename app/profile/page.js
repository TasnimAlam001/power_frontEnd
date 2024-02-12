"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Badge, Stack } from "@mui/material";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrow, setArrow] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setArrow(!arrow);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setArrow(false);
  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            // className="rounded-md hover:bg-green-100"
            onClick={handleClick}
            size="small"
            sx={{
              
              "&:hover": { backgroundColor: "#e1e1e3" },
              borderRadius: 2,
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <FaUserAlt />
            </Avatar>

            <Box sx={{ display: { xs: "none", sm: "block" } }} pl={1}>
              <Stack direction="row" variant="body2" spacing={2}>
                Super Admin
                {arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </Stack>
              {/* <h2 className="text-sm flex gap-2"> </h2> */}
              <Typography variant="caption" component="">
                admin@gmail.com
              </Typography>
            </Box>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
       
        <MenuItem onClick={handleClose}>
          <AccountCircleOutlinedIcon fontSize="large" sx={{ pr: 0.5 }} />{" "}
          <Box sx={{ display: { xs: "block", sm: "none" } }} pl={1}>
            <Typography sx={{fontWeight: 550}} variant="body2" spacing={2}>
              Super Admin
            </Typography>
            {/* <h2 className="text-sm flex gap-2"> </h2> */}
            <Typography sx={{fontSize: 10}} variant="caption" component="caption">
              admin@gmail.com
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AccountCircleOutlinedIcon fontSize="large" sx={{ pr: 0.5 }} /> My
          account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Badge badgeContent={4} color="info">
            <CircleNotificationsOutlinedIcon
              fontSize="large"
              sx={{ pr: 0.5 }}
            />{" "}
          </Badge>{" "}
          Notification
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
