import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

import ToolsSection from "./Sections/ToolsSection";
import TabsSection from "./Sections/TabsSection";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    overflow: "hidden"
  },
  tool: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      
      <Hidden mdDown>
        <Grid item xs={1} className={classes.tool}>
          <ToolsSection />
        </Grid>
      </Hidden>

      <Grid item xs={9}>
        {
          /**
            Here Builder Cunvas -> React Fiber 
          **/
        }
      </Grid>

      <Hidden mdDown>
        <Grid item xs={2}>
          <TabsSection />
        </Grid>
      </Hidden>

    </Grid>
  );
}

export default App;
