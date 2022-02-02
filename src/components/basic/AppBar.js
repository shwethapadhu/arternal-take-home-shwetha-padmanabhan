import React from "react"
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const AppBarComponent = () => (<AppBar position="static">
    <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
            Task Manager
        </Typography>
    </Toolbar>
</AppBar>);

export default AppBarComponent