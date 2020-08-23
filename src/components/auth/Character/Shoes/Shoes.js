import React from 'react';
import useStyles from './Styles';

const Shoes = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.shoes}>
                <div className={classes.rightShoe} />
                <div className={classes.leftShoe} />
            </div>
        </div>
    )
}

export default Shoes
