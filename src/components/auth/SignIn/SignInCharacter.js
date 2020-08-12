import React from 'react';
import useStyles from './SignInCharacterStyles';

const SignInCharacter = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.head}>
                <div className={classes.hair}>
                    <div className={classes.hairUp} />
                    <div className={classes.hairMedium} />
                    <div className={classes.hairTop}/>
                </div>
                <div className={classes.eyes}>
                    <div className={classes.eyeLeft} />
                    <div className={classes.eyeRight}/>
                </div>
                <div className={classes.glasses}>
                    <div className={classes.leftGlass} />
                    <div className={classes.rightGlass}/>
                </div>
                <div className={classes.mouth}/>
            </div>
            <div className={classes.neck}/>
            <div className={classes.body}>
                <div className={classes.shirt}>
                    <div className={classes.shirtStamp}>
                        <div className={classes.shirtCircleOne} />
                        <div className={classes.shirtCircleTwo} />
                        <div className={classes.shirtCircleThree}/>
                    </div>
                    <div className={classes.leftSleeve} />
                    <div className={classes.rightSleeve}/>
                </div>
                <div className={classes.arms}>
                    <div className={classes.leftArm} />
                    <div className={classes.rightArm} />
                    <div className={classes.rightHand}>
                        <div className={classes.handIndexFinger}/>
                    </div>
                    <div className={classes.leftHand}>
                        <div className={classes.handThumbFinger}/>
                    </div>
                </div>
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
            <div className={classes.shoes}>
                <div className={classes.rightShoe}>

                </div>
            </div>
        </div>
    )
};

export default SignInCharacter;
