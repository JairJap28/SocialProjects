import React from 'react';
import useStyles from './Styles';

const Head = ({ colorGlass }) => {
    const classes = useStyles({ colorGlass });
    return (
        <div>
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
        </div>
    )
}

export default Head;
