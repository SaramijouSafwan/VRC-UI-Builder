import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import Draggable from 'react-draggable';

import ClickButton from "../UI-Components/ToolsButton/ClickButton";
import MeshButton from "../UI-Components/ToolsButton/MeshButton";
import LightButton from "../UI-Components/ToolsButton/LightButton";
import PloyButton from "../UI-Components/ToolsButton/PolyButton";
import TextButton from "../UI-Components/ToolsButton/TextButton";
import SkyBoxButton from "../UI-Components/ToolsButton/SkyBoxButton";
import GroundButton from "../UI-Components/ToolsButton/GroundButton";
import SoundButton from "../UI-Components/ToolsButton/SoundButton";

const useStyle = makeStyles((theme) => ({
    ComponentPanel: {
        height: '70%',
        width: '50%',
        backgroundColor: '#424242',
        textAlign: 'center',
        marginLeft: '15px',
        padding: '1%',
        borderRadius: 50,
        overflow: 'hidden'
    },
}));

function ComponentPanel() {
    const classes = useStyle();
    return (
        <Draggable>
            <Paper className={classes.ComponentPanel}>
                <ClickButton />
                <MeshButton  />
                <PloyButton  />
                <LightButton />
                <TextButton  />
                <SkyBoxButton/>
                <GroundButton/>
                <SoundButton />
            </Paper>
        </Draggable>
    );
}

export default ComponentPanel;
