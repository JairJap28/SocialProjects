import React from 'react';

// MUI Stuff
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const CopyRight = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/JairJap28">
                Jair Jimenez
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default CopyRight;
