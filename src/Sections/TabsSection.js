import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';

import PropertiesTab from '../Tabs/PropertiesTab';
import ComponentsTab from '../Tabs/ComponentsTab';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    tabs: {
        backgroundColor: '#424242',
        color: '#fafafa',
        indicator: '#fff'
    },
    tab: {
        minWidth: '50%',
    },
    indicator: {
        backgroundColor: '#fff'
    }
}));

export default function PropertiesPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    classes={{ indicator: classes.indicator }}
                    className={classes.tabs}
                >
                    <Tab label="Properties" className={classes.tab} />
                    <Tab label="Component"  className={classes.tab} />
                </Tabs>
            </Paper>
            <PropertiesTab value={value} index={0} />
            <ComponentsTab value={value} index={1} />
        </div>
    );
}
