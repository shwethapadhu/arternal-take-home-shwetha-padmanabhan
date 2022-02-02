import React from "react"
import { TextField } from '@material-ui/core'

const TextEditor = (props) => {
    const { label, value, handleChange, multiline, ...others } = props
    return (
        <TextField
            required
            id="outlined-required"
            label={label}
            value={value}
            onChange={handleChange}
            multiline={multiline}
            {...others}
        />
    )
}

export default TextEditor;