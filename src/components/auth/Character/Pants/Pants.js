import React from 'react';
import useStyles from './Styles';

const Pants = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.pants}>
                    <div className={classes.pantLeft} />
                    <div className={`${classes.pocket} ${classes.pocketRotateRight}`}>
                        <div className={classes.insidePocket}/>
                    </div>
                    <div className={classes.pantRight} />
                    <div className={`${classes.pocket} ${classes.pocketRotateLeft}`}>
                        <div className={classes.insidePocket}/>
                    </div>
            </div>
        </div>
    )
}

export default Pants
