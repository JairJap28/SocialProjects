import React from 'react';
import useStyles from './CharacterStyles';

// Components
import Head from './Head/Head';
import Shirt from './Shirt/Shirt';
import Pants from './Pants/Pants';
import Shoes from './Shoes/Shoes';

const Character = ({colorGlass, value}) => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Head colorGlass={colorGlass}/>
            <div className={classes.body}>
                <Shirt value={value}/>
                <Pants />
            </div>
            <Shoes />
        </div>
    )
};

export default Character;
