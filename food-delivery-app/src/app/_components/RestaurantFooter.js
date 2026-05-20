import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const RestaurantFooter = () => {
    return (
        <AppBar
            position="static"
            sx={{
                background: "linear-gradient(to right, #141e30, #243b55)",
                padding: "0 20px"
            }}
        ><Toolbar sx={{
            display: "flex",
            justifyContent: "center"
        }}>
                <p>All rights are reserved by Resto app</p>
            </Toolbar>
        </AppBar>
    )
}

export default RestaurantFooter