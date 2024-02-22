///

/* 

<Box sx={{ width: "100%" }}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-simple">Email</InputLabel>
                  <OutlinedInput
                  sx={{width:"100%"}}
                    id="component-outlined"
                    // placeholder="Inter your Email"
                    label="Email"
                    required="true"
                    value={email}
                    {...register("email", { required: true })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <br />
                {errors.email && (
                  <span style={{ color: red[500] }}>Email is required</span>
                )}
              </Box>





-------------------


<Box sx={{ mt: 3, mb: 2 }}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    {...register("password", { required: true })}
                    required="true"
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

                <br />
                {errors.password && (
                  <span style={{ color: red[500] }}>Password is required</span>
                )}
              </Box>

--------------------------
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: green[900],
                  "&:hover": {
                    backgroundColor: green[800],
                  },
                }}
                // onClick={handleSignIn}
              >
                Sign In
              </Button>









*/