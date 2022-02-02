import React, { Component } from "react";
import { Grid } from "@material-ui/core"
import AppBar from "../basic/AppBar";
import ToDoList from "../app/ToDoList";
import DoneList from "../app/DoneList";

class MainPage extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Grid container direction="row">
                    <ToDoList />
                    <DoneList />
                </Grid>
            </div>
        )
    }
}

export default MainPage