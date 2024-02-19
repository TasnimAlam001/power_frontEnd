"use client";

import React, { useState } from "react";
import img from "@/public/loginImg.jpg";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import Swal from "sweetalert2";
const url = "http://172.17.0.87:16999/api";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSignIn = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    

    try {
      const res = await axios.post(url + "/web-app/login", { email, password });

      if (res.data.message === "Login Successful") {
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        
      }else{
        alert("hoi nai, abr koro")
      }

      console.log(res);
    } catch (error) {
      console.log("error hoise: ",error.response);
      if (error.response.data.message === "Incorrect Credentials") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check your email and password again!"
          
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`
          
        });
      }
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "30%",
            p: 3,
            mt: 0.5,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Stack direction="column" spacing={3}>
            <Box sx={{ alignSelf: "center" }}>
              <Image width={120} src={logo} alt="ministry of power logo" />
              <Typography variant="h6">Power Division</Typography>
            </Box>
            <FormControl>
              <TextField
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControlLabel
              value="end"
              control={<Checkbox size="small" />}
              label="Remember This Device"
              labelPlacement="end"
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: grey[700] }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
}
