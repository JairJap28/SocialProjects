import React from 'react';
import useStyles from './CharacterStyles';

// Components
import Head from './Head/Head';
import Shirt from './Shirt/Shirt';
import Pants from './Pants/Pants';
import Shoes from './Shoes/Shoes';

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';

const Character = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.mainContainer}>
            <Head colorGlass={theme.palette.character.glassTranslucent}/>
            <div className={classes.body}>
                <Shirt />
                <Pants />
            </div>
            <Shoes />
        </div>
    )
};

export default Character;
