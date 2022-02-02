import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

export default function BasicCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography color="primary" gutterBottom variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="subtitle2" component="div">
                    {props.date}
                </Typography>

                <Typography variant="body1">
                    {props.description}
                </Typography>
            </CardContent>
            {props.button && (<CardActions>
                <Button size="small" color="primary" variant="contained" onClick={props.handleClick}>{props.button}</Button>
            </CardActions>)}
        </Card>
    );
}
