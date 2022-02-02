import { Grid, Typography } from "@material-ui/core"
import React, { Fragment } from "react"
import BasicCard from "../basic/Card"
import useStyles from "../../styles/app/ToDoList";
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux"

const ToDoList = (props) => {
    const { classes, doneList } = props;
    if (doneList.length > 0)
        return (
            <Grid item xs={12} className={classes.list}>
                <Typography variant="h6">Done</Typography>
                <Grid container direction="row">
                    {doneList.map(item => (<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.date}>
                        <BasicCard title={item.title} date={new Date(item.date).toDateString()} description={item.description} />
                    </Grid>)
                    )}
                </Grid>
            </Grid>
        )
    return <Fragment />
}
const mapStateToProps = state => ({
    doneList: state.todos.doneList
})


export default connect(mapStateToProps)(withStyles(useStyles)(ToDoList))