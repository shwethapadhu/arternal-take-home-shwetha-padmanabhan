import { Grid, Typography } from "@material-ui/core"
import React, { Fragment } from "react"
import BasicCard from "../basic/Card"
import useStyles from "../../styles/app/ToDoList"
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux"
import TaskCreationDialog from "../dialog/TaskCreationDialog";
import { donetask } from "../../store/action/todos";

const ToDoList = (props) => {
    const [open, setOpen] = React.useState(false);
    const { classes, todoList } = props;
    return (
        <Fragment>
            <Grid item xs={12} className={classes.list}>
                <Typography variant="h6">To Do</Typography>
                <Grid container direction="row">
                    {todoList.map(item => (<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.date}>
                        <BasicCard title={item.title} date={new Date(item.date).toDateString()} description={item.description} button="Done" handleClick={() => props.donetask(item.date)} />
                    </Grid>)
                    )}
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.createCard} onClick={() => setOpen(true)}>
                        <div className={classes.createText}>
                            <Typography variant="h6">Create To-Do item</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            {open && <TaskCreationDialog handleClose={() => setOpen(false)} />}
        </Fragment>
    )
}
const mapStateToProps = state => ({
    todoList: state.todos.todoList
})


export default connect(mapStateToProps, { donetask })(withStyles(useStyles)(ToDoList))