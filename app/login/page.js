"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import logo from "@/public/logo2.png";
import Swal from "sweetalert2";
import Input from "@mui/material/Input";
// import loginImg from "public/loin.svg"
import { green, grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/navigation";

// import InputLabel from '@mui/material/InputLabel';
const url = "http://172.17.0.87:16999/api";

export default function Login() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

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
      console.log("response",res)


      if (res.data.message === "Login Successful") {
        const token = res.data.data.token;
        // console.log("token",token)
        localStorage.setItem('access-token', token)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        // router.push("/", { scroll: true });
      }

      // console.log(res);
    } catch (error) {
      console.log("error hoise: ", error.response);
      if (error.response.data.message === "Incorrect Credentials") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check your email and password again!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    }
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack sx={{ px: 2 }} direction="column" spacing={3}>
            <Stack
              direction="column"
              alignItems="center"
              sx={{ alignSelf: "center" }}
            >
              <Image
                width={60}
                src={logo}
                spacing={2}
                alt="ministry of power logo"
              />
              <Typography sx={{ mt: 1 }} variant="body1">
                বিদ্যুৎ জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়
              </Typography>
            </Stack>
            <Box>
              <Typography fontWeight={300} variant="subtitle2">
                Welcome back!
              </Typography>
              <Typography fontWeight={700} variant="h6" sx={{ mb: 4 }}>
                Login to your account.
              </Typography>
            </Box>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-simple">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // placeholder="Inter your Email"
                label="Email"
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
            {/* <FormControlLabel
          value="end"
          control={<Checkbox size="small" />}
          label="Remember me"
          labelPlacement="end"
        /> */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="subtitle2">
                <Checkbox size="small" /> Remember me
              </Typography>
              <Typography
                fontWeight={550}
                variant="subtitle2"
                sx={{ color: green[900] }}
              >
                Forget Password?
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                backgroundColor: green[900],
                "&:hover": {
                  backgroundColor: green[800],
                },
              }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              Don`t have an account?{" "}
              <span style={{ color: green[900], fontWeight: 600 }}>
                Sign up
              </span>
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: 12, mt: 8 }}>
            © 2023, All Rights Reserved. Developed By{" "}
            <span style={{ color: "#00ACF3" }}>Digicon Technologies ltd.</span>
          </Typography>
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block" } }} item xs={8}>
          <Image
            src="/login.svg"
            alt="log in img"
            width={750}
            height={650}
        
          ></Image>
        </Grid>
      </Grid>
    </Box>
  );
}
