"use client"
import React, { useState } from 'react'
import RestaurantHeader from '../_components/RestaurantHeader'
import RestaurantLogin from '../_components/RestaurantLogin'
import { Box, Button } from '@mui/material'
import RestaurantSignup from '../_components/RestaurantSignup'
import RestaurantFooter from '../_components/RestaurantFooter'

const RestaurantPage = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <RestaurantHeader setIsLogin={setIsLogin} />

                {
                    isLogin
                        ? <RestaurantLogin setIsLogin={setIsLogin} />
                        : <RestaurantSignup setIsLogin={setIsLogin} />
                }
                <RestaurantFooter />
            </Box>
        </>
    )
}

export default RestaurantPage