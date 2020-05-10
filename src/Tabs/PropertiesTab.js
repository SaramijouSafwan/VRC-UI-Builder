import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider} from '@material-ui/core';

import Visible from '../UI-Components/Main Props Component/VisibleToggle';
import Locked from '../UI-Components/Main Props Component/LockToggle';
import Position from '../UI-Components/Main Props Component/PositionField';
import Dimension from '../UI-Components/Main Props Component/DimensionField';
import MaterialType from '../UI-Components/Material Props Component/MaterialType';
import MaterialFill from '../UI-Components/Material Props Component/MaterialFill';
import NameField from "../UI-Components/Main Props Component/NameField";
import TypeField from '../UI-Components/Main Props Component/TypeField';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '99%',
        marginTop: '1%',
        backgroundColor: '#424242',
        color: '#fafafa',
        padding: '4%',

    },
}));

export default function PropertiesTab(props) {
    const { value, index } = props;
    const classes = useStyles();
    return (
        <Paper hidden={value !== index} className={classes.paper} square>
            <Visible />
            <Locked />
            <NameField />
            <Position />
            <TypeField />
            <Dimension />
            <Divider />
            <MaterialType />
            <MaterialFill />
        </Paper>
    );
}

PropertiesTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};