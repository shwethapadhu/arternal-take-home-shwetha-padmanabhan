import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, IconButton, Typography } from '@material-ui/core';
import TextEditor from '../basic/TextEditor';
import Button from '../basic/Button';
import CustomDialogTitle from '../basic/DialogTitle';
import { createTask } from '../../store/action/todos';
import { connect } from "react-redux"

function TaskCreationDialog(props) {
    const [open, setOpen] = React.useState(true);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('')
    const { handleClose } = props
    function handleDialogClose() {
        setOpen(false);
        handleClose();
    }
    function create() {
        handleDialogClose();
        props.createTask({ title, description })
    }
    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <CustomDialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
                    Create Task
                </CustomDialogTitle>
                <DialogContent dividers>
                    <TextEditor label="Title" value={title} handleChange={(event) => setTitle(event.target.value)} multiline={false} /> <br />
                    <TextEditor label="Description" value={description} handleChange={(event) => setDescription(event.target.value)} multiline={true} maxRows={4} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={create} disabled={title.length == 0 || description.length == 0}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default connect(null, { createTask })(TaskCreationDialog);