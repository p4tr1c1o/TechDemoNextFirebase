import { AppBar, Toolbar, IconButton, Typography, Button, Box, Paper, Container } from "@mui/material"
import MenuIcon from "@mui/icons-material/menu"
import React from 'react'

function MenuLayout({ children }: { children: React.ReactNode }) {
    return (<>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                    Burger
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "stretch",
            backgroundColor: "gray",
            padding: { xs: 1, md: 2 },
            marginX: "auto",
            maxWidth: { md: 360 }
        }}>
            {children}

        </Box >
    </>
    )
}

export default MenuLayout