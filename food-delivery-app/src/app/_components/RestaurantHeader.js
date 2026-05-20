import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const RestaurantHeader = ({ setIsLogin }) => {
    return (
        <AppBar
            position="static"
            sx={{
                background: "linear-gradient(to right, #141e30, #243b55)",
                padding: "0 20px"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Food Delivery
                </Typography>

                {/* Navigation */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 2
                    }}
                >
                    <Button
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: 16 }}
                    >
                        Home
                    </Button>

                    <Button
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: 16 }}
                    >
                        Restaurants
                    </Button>

                    <Button
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: 16 }}
                    >
                        Orders
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "#243b55",
                            fontWeight: "bold",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#f1f1f1"
                            }
                        }}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default RestaurantHeader