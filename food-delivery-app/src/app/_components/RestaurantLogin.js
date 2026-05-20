"use client"
import React from 'react'
import Button from '@mui/material/Button';
import { Box, TextField, Typography, Paper } from '@mui/material';

const RestaurantLogin = () => {
    return (
        // <>
        <Box
            sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "column",
                    height: "95vh",
                    background: "linear-gradient(to bottom, #f5f6f8, #ffffff)"
                }
            }>
            <Paper
                elevation={10}
                sx={{
                    width: 450,
                    height: 400,
                    padding: 5,
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "center",
                    backgroundColor: "white"
                }}
            >

                <Typography sx={{
                    fontWeight: "bold",
                    color: "#243b55"
                }} variant='h4'>Restaurant Login</Typography>
                <TextField label="Enter you email" type='email' variant='outlined' sx={{ width: 400, margin: "10px" }} />
                <TextField label="Enter you password" type='password' variant='outlined' sx={{ width: 400, margin: "10px" }} />
                <Button variant="contained" sx={{ height: 50, width: 400, margin: "10px" }}>Sign in</Button>
            </Paper>
        </Box>
        // </>
    )
}

export default RestaurantLogin