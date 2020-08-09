import React from 'react';
import useStyles from './SignInCharacterStyles';

const SignInCharacter = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.head}>

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
                    <div className={classes.pantRight}/>
                </div>
            </div>
        </div>
    )
};

export default SignInCharacter;
