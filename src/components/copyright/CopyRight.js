import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import React from 'react';
import Box from '@material-ui/core/Box';

const CopyRight = () => {
    return (
        <Box mt={5}>
            <Typography variant='body2' color='textSecondary' align='center'>
                {'Copyright © '}
                <MaterialLink color='inherit' href='https://github.com/UbaidurRehman1/identity'>
                    Identity
                </MaterialLink>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}
export default CopyRight;
