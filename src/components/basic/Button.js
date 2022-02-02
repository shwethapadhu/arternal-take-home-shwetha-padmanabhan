import React from "react";
import { Button } from "@material-ui/core"
const CustomButton = (props) => {
    return (
        <Button color="primary" onClick={props.onClick} disabled={props.disabled || false}>{props.children}</Button>
    )
}
export default CustomButton