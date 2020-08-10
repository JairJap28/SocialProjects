import React from 'react';
import useStyles from './SignInCharacterStyles';

const SignInCharacter = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.head}>
                <div className={classes.hair}>
                    <div className={classes.hairUp} />
                    <div className={classes.hairMedium}/>
                </div>
            </div>
            <div className={classes.neck}/>
            <div className={classes.body}>
                <div className={classes.shirt}>
                    <div className={classes.shirtStamp}>
                        <div className={classes.shirtCircleOne} />
                        <div className={classes.shirtCircleTwo} />
                        <div className={classes.shirtCircleThree}/>
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
        </div>
    )
};

export default SignInCharacter;
