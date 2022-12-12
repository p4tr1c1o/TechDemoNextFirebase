import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Container } from "@mui/system"
import React from 'react'
import { useRouter } from "next/router";


interface Props {
    icono(props): JSX.Element,
    titulo: string,
    subtitulo: string
}

function TipoPedidoButton({ icono, titulo, subtitulo }: Props) {
    const router = useRouter()


    return (
        <Button fullWidth variant="contained" onClick={() => router.push("/menu/dashboard")}>
            {React.createElement(icono, { sx: { marginRight: 1, fontSize: 40 } })}
            <Box sx={{ flexDirection: "column" }} >
                <Typography variant="h5" >  {titulo} </Typography>
                ({subtitulo})
            </Box>
        </Button>
    )
}

function SeleccionTipoPedidoPage() {


    return (
        <Paper sx={{
            display: "flex",
            height: "100vh",
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 8,
                    marginBottom: "auto",
                    paddingBottom: 3,
                    width: 500,
                    backgroundColor: "white"
                }}
            >
                <Avatar sx={{ marginTop: 4, bgcolor: "secondary.main", height: 96, width: 96, marginBottom: 1 }}>
                    <FastfoodIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Burger Demo
                </Typography>
                <Typography>
                    Selecciona el tipo de Pedido
                </Typography>
                <Stack spacing={1} sx={{ width: "100%", marginTop: 4 }}>
                    <TipoPedidoButton icono={props => <DeliveryDiningIcon {...props} />} titulo="Delivery" subtitulo="a domicilio" />
                    <TipoPedidoButton icono={props => <StoreMallDirectoryIcon {...props} />} titulo="Take Away" subtitulo="lo retiras por el local" />
                    <TipoPedidoButton icono={props => <RestaurantIcon {...props} />} titulo="Consultar Carta" subtitulo="consumo en el local" />
                </Stack>
            </Container>
        </Paper>
    )
}

export default SeleccionTipoPedidoPage