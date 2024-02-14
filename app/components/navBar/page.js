"use client";
import React from "react";
import {
  AppBar,
  Badge,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ThemeProvider, styled, useTheme } from "@mui/material/styles";
import {
  FaBell,
  FaExpand,
  FaMapMarkerAlt,
  FaRegMoon,
  FaSearch,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TbBulbFilled } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import Image from "next/image";
import logo from "@/public/logo2.png";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Profile from "../profile/page";
import Link from "next/link";

const data = [
  {id:1, icon: <FaUser />, label: "Executive", route: "executive" },
  {id:2, icon: <RiLightbulbFlashFill />, label: "Utilities", route: "utility" },
  {id:3, icon: <FaMapMarkerAlt />, label: "Zone", route: "executive" },
  {id:4, icon: <TbBulbFilled />, label: "S & D List", route: "executive" },
  {id:5, icon: <FaUsers />, label: "Users", route: "executive" },
  {id:6, icon: <GiWallet />, label: "All Tickets", route: "executive" },
  {id:7, icon: <FaSignOutAlt />, label: "Logout", route: "executive" },
];

const drawerWidth = 200;
export default function NavBarDrawer({ children }) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Link href="/">
        <Stack direction="row" height={70} pl={2} pt={4}>
          <Image
            src={logo}
            width={50}
            // className="w-[70px] pl-4"
            alt="ministry of power energy and mineral resources bangladesh logo"
          ></Image>
          <Typography variant="caption" pl={1} component="h6">
            Ministry of Power Energy & Mineral Resources
          </Typography>
        </Stack>
      </Link>
      <Toolbar />

      <List sx={{ pl: 2 }}>
        {data.map((item) => (
          <Link key={item.label} href={`/${item.route}`}>
            <ListItemButton sx={{ py: 0, minHeight: 38 }}>
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ ml: -2 }}
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 13,
                  fontWeight: "medium",
                }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* --------------------------------------------------nav------------------------------ */}
        <AppBar
          color="inherit"
          variant="none"
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Stack direction="row" alignItems="center">
                <FormatAlignLeftIcon
                  // color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                />

                <TextField
                  sx={{ ml: 4, display: { xs: "none", md: "block" } }}
                  placeholder="Search.."
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <FaSearch />
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Typography
                  lineHeight={0}
                  gutterBottom={false}
                  // color="black"
                  sx={{
                    cursor: "pointer",

                    padding: "7px",
                    transition: "background-color ",
                    "&:hover": {
                      backgroundColor: "#e1e1e3",
                      borderRadius: "100%",
                    },
                  }}
                >
                  <SettingsOverscanIcon />
                </Typography>
                <Typography
                  lineHeight={0}
                  gutterBottom={false}
                  // color="black"
                  sx={{
                    cursor: "pointer",

                    padding: "7px",
                    transition: "background-color ",
                    "&:hover": {
                      backgroundColor: "#e1e1e3",
                      borderRadius: "100%",
                    },
                  }}
                >
                  <DarkModeOutlinedIcon />
                </Typography>

                <Profile></Profile>
              </Stack>
            </Stack>
          </Toolbar>
          <Divider />
        </AppBar>
        {/* ------------------------------------------side drawer------------------------------- */}

        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box px={{ xs: 2, md: 4 }} component="main" sx={{ flexGrow: 1, pt: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </div>
  );
}
