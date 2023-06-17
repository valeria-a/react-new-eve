import { Stack } from "@mui/material"
import CounterComponent from "./CounterComponent"
import { ColorContext } from "./colorContext"
import { useState } from "react"

import { ThemeProvider, createTheme } from '@mui/material/styles';



const CounterApp = () => {

    let theme = createTheme({
        palette: {
          primary: {
            main: '#0052cc',
          },
          secondary: {
            main: '#000ccc',
          },
        },
      });

    return(

        <ThemeProvider theme={theme}>
            <Stack spacing={2} justifyContent="center"
            alignItems="center"> 

                <h2>Counter App</h2>
                <CounterComponent />

            </Stack>
        </ThemeProvider>

    )
}

export default CounterApp