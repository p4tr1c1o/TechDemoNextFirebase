import React, { createContext } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from "./createEmotionCache";
import appTheme from "../styles/theme";
import MenuLayout from "../components/layouts/MenuLayout";
import { useRouter } from "next/router";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const PedidoContext = createContext({})
    const router = useRouter()

    const isLayoutNeeded = router.pathname.includes("/menu")
    console.log(isLayoutNeeded)
    const LayoutComponent = isLayoutNeeded ? MenuLayout : React.Fragment

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={appTheme}>
                <PedidoContext.Provider value={{}}>
                    <CssBaseline />
                    <LayoutComponent>
                        <Component {...pageProps} />
                    </LayoutComponent>
                </PedidoContext.Provider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
