import React from 'react';
import Introduction from 'components/introduction/Introduction';
import {Grid} from '@material-ui/core';

const Home = () => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{minHeight: 'calc(100vh - 11vh)'}}
        >
            <Grid item xs={8} xl={2} sm={5}>
                <Introduction/>
            </Grid>
        </Grid>
    );
}
export default Home;
