'use client'
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    variable:"--poppins",
    subsets:['latin'],
    weight:['400','500','600']
  })

const theme = createTheme({
    palette:{
        mode:'dark',
        background:{
            default:'#000000'
        },
        common:{
            black: '#000',
             white:'#fff'
        },
        grey:{
           50:'#9B9B9B',
           100:'#D9D9D9',
           200:'#484848',
           300:'#838383',
           400:'#757575',
           500:'#6B6B6B'
        },
      
        primary:{
            main:'#125DFF',  
        },
        secondary:{
            main:'#FF0000'
        }
    },
    typography:{
        fontFamily:poppins.style.fontFamily
    },
    
    
})

export default theme;