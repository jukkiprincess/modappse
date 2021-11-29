import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>Success! Your mod app has been submitted to the reviewers!</h1>
                <h4>Please allow some time for them to review your mod app. Abusing this system will result in a perma-ban.</h4>
            </Grid>
        );
    }
}

export default Success;
