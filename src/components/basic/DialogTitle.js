import React from "react";
import { DialogTitle, IconButton } from '@material-ui/core';
import { Close } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import useStyles from "../../styles/basic/DialogTitle";

const CustomDialogTitle = (props) => {
    const { onClose, children, classes } = props
    return (
        <DialogTitle>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    className={classes.closeIcon}
                >
                    <Close />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
export default withStyles(useStyles)(CustomDialogTitle);