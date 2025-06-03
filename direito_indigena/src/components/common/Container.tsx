import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export const Container: React.FC = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{
                height: "100vh",
                position: "sticky",
                '& nav ul.css-ewdv3l' : {
                    height: "100vh",
                    display: "grid",
                    gridTemplateRows: "1fr 10fr 1fr",
                }, 
                '& nav ul.css-ewdv3l div li.ps-menuitem-root .ps-menu-button': {
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems:"center"
                    
                },
                '& nav ul.css-ewdv3l li.ps-menuitem-root .ps-menu-button .ps-menu-icon': {
                    paddingLeft: "10px"
                }
            }}>
                
            </Box>
            <NavBar />
            <Box sx={{
                height: "100vh",
                position: "sticky",
                overflowX: "auto",
                width: "100%"
            }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Container;