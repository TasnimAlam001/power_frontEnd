"use client";

import React from "react";
import img from "@/public/loginImg.jpg";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
            width: "25%",
            p: 3,
            mt:0.5,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Stack direction="column" spacing={3}>
            <Box sx={{ alignSelf: "center" }}>
              <Image width={120} src={logo} alt="ministry of power logo" />
              <Typography variant="h6">Power Division</Typography>
            </Box>
            <FormControl>
              {/* <InputLabel variant="outlined">Email Address</InputLabel>
              <Input placeholder="Enter Your Email" size="small" /> */}
              <TextField label="Email Address" />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
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
              control={<Checkbox  size="small"/>}
              label="Remember This Device"
              labelPlacement="end"
            />
            <Button  variant="contained" sx={{backgroundColor: grey[700] }}>Sign In</Button>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
}
