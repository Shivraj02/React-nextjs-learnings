"use client"

import React from 'react'
import Button from '@mui/material/Button'
import { Box, TextField, Typography, Paper } from '@mui/material'

const RestaurantSignup = ({ setIsLogin }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: "column",
                height: "95vh",
                background: "linear-gradient(to bottom, #f5f6f8, #ffffff)"
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    width: {
                        xs: "90%",   // mobile
                        sm: 400,     // tablet
                        md: 450      // desktop
                    },
                    minHeight: {
                        xs: "auto",
                        sm: 400
                    },
                    padding: {
                        xs: 3,
                        sm: 5
                    },
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "center",
                    backgroundColor: "white"
                }}
            >

                <Typography
                    sx={{
                        fontWeight: "bold",
                        color: "#243b55"
                    }}
                    variant='h4'
                >
                    Restaurant Signup
                </Typography>

                <TextField
                    label="Enter name"
                    variant='outlined'
                    sx={{ width: 400 }}
                />

                <TextField
                    label="Enter email"
                    type='email'
                    variant='outlined'
                    sx={{ width: 400 }}
                />

                <TextField
                    label="Enter password"
                    type='password'
                    variant='outlined'
                    sx={{ width: 400 }}
                />

                <Button
                    variant="contained"
                    sx={{ height: 50, width: 400 }}
                >
                    Sign Up
                </Button>

                <Button
                    onClick={() => setIsLogin(true)}
                >
                    Already have account? Login
                </Button>

            </Paper>
        </Box>
    )
}

export default RestaurantSignup