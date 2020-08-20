import React from 'react';
import useStyles from './Styles';

const Shirt = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.shirt}>
                <div className={classes.shirtStamp}>
                    <div className={classes.shirtCircleOne} />
                    <div className={classes.shirtCircleTwo} />
                    <div className={classes.shirtCircleThree} />
                </div>
                <div className={classes.leftSleeve} />
                <div className={classes.rightSleeve} />
            </div>
            <div className={classes.arms}>
                <div className={classes.leftArm} />
                <div className={classes.rightArm} />
                <div className={classes.rightHand}>
                    <div className={classes.handIndexFinger} />
                </div>
                <div className={classes.leftHand}>
                    <div className={classes.handThumbFinger} />
                </div>
            </div>
        </div>
    )
}

export default Shirt
