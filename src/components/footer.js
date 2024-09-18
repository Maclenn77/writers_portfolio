import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

const Footer = () => (
    <footer className='footer mt-2 py-1 bg-light'>
        <div className='container'>
            <div className='row justify-content-around'>
                <Grid container sx={{color: 'text.secondary'}}>
                  <Grid item xs={4}>
                     <GitHubIcon/>
                  </Grid>
                </Grid>
            </div>
        </div>
    </footer>
);

export default Footer;