import { Avatar, Box, Container, Typography } from "@mui/material"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import Paper from "@mui/material/Paper"
import React from 'react'

function MenuDashboardPage() {
    return (
        <Paper sx={{
            display: "flex",
            flex: 1
            // minHeight: "220px",
        }}>
            <Box sx={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}>

                <Avatar sx={{ marginTop: 2, bgcolor: "secondary.main", height: 96, width: 96, marginBottom: 1 }}>
                    <FastfoodIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h6">
                    Burger Demo
                </Typography>
            </Box>

        </Paper>


    )
}

export default MenuDashboardPage