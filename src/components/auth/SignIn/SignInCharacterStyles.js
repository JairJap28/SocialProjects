import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: 200,
        margin: 'auto',
        position: 'relative',
    },
    hair: {
        position: 'relative',
        top: 5,
        left: -25
    },
    hairUp: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'rotate(140deg)',
        width: 50,
        height: 50,
        boxShadow: `-8px 8px 0 2px ${theme.palette.character.hair}`,
        borderRadius: '50%',
    },
    hairTop: {
    },
    hairMedium: {
        width: 3,
        height: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: theme.palette.character.hair,
        position: 'absolute',
        top: 10,
        right: -27,
        '&::before': {
            width: 3,
            height: 15,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: theme.palette.character.hair,
            position: 'absolute',
            top: 0,
            right: 50,
            content: '""'
        }
    },
    head: {
        width: 50,
        height: 60,
        backgroundColor: theme.palette.character.skin,
        marginLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    eyes: {
        position: 'relative'
    },
    eyeLeft: {
        width: 10,
        height: 10,
        top: 22,
        left: 9,
        borderStyle: 'solid',
        borderColor: theme.palette.character.glasses,
        borderRadius: '75% 15%',
        borderWidth: 'thin',
        position: 'absolute',
        transform: 'rotate(45deg)',
        backgroundColor: 'white',
        opacity: '0.4',
        '&::before': {
            width: 3,
            height: 3,
            top: 3,
            left: 3,
            position: 'absolute',
            backgroundColor: theme.palette.character.eye,
            borderRadius: '50%',
            content: '""'
        }
    },
    eyeRight: {
        width: 10,
        height: 10,
        top: 22,
        right: 8,
        borderStyle: 'solid',
        borderColor: theme.palette.character.glasses,
        borderRadius: '75% 15%',
        borderWidth: 'thin',
        position: 'absolute',
        transform: 'rotate(45deg)',
        backgroundColor: 'white',
        opacity: '0.4',
        '&::before': {
            width: 3,
            height: 3,
            top: 3,
            left: 3,
            position: 'absolute',
            backgroundColor: theme.palette.character.eye,
            borderRadius: '50%',
            content: '""'
        }
    },
    glasses: {
        position: 'absolute',
    },
    leftGlass: {
        width: 20,
        height: 15,
        position: 'absolute',
        top: 20,
        left: 4,
        borderStyle: 'solid',
        borderColor: theme.palette.character.glasses,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&::before': {
            width: 6,
            height: 3,
            position: 'absolute',
            top: 0,
            left: -7,
            backgroundColor: theme.palette.character.glasses,
            content: '""',
            transform: 'rotate(30deg)'
        }
    },
    rightGlass: {
        width: 20,
        height: 15,
        position: 'absolute',
        top: 20,
        right: -47,
        borderStyle: 'solid',
        borderColor: theme.palette.character.glasses,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&::after': {
            width: 5,
            height: 3,
            position: 'absolute',
            top: 0,
            left: -8,
            backgroundColor: theme.palette.character.glasses,
            content: '""'
        },
        '&::before': {
            width: 6,
            height: 3,
            position: 'absolute',
            top: 0,
            right: -7,
            backgroundColor: theme.palette.character.glasses,
            content: '""',
            transform: 'rotate(-30deg)'
        }
    },
    body: {

    },
    neck: {
        width: 14,
        height: 4,
        marginTop: -1,
        marginLeft: 28,
        position: 'relative',
        backgroundColor: theme.palette.character.skin,
        '&::before': {
            width: 20,
            height: 4,
            position: 'absolute',            
            top: 4,
            left: -3,
            zIndex: 2,
            backgroundColor: theme.palette.character.skin,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            content: '""',
        }
    },
    shirt: {
        width: 70,
        height: 90,
        position: 'relative',
        backgroundColor: theme.palette.character.shirt,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    shirtStamp: {
        display: 'flex',
        position: 'absolute',
        top: '20px',
        left: 22
    },
    shirtCircleOne: {
        width: 10,
        height: 10,        
        backgroundColor: theme.palette.character.circleOne,
        zIndex: 3,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    shirtCircleTwo: {
        width: 10,
        height: 10,
        marginLeft: -3,
        zIndex: 2,
        backgroundColor: theme.palette.character.circleTwo,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    shirtCircleThree: {
        width: 10,
        height: 10,
        marginLeft: -3,
        backgroundColor: theme.palette.character.circleThree,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    leftSleeve: {
        width: 25,
        height: 45,
        top: 0,
        left: -8,
        position: 'absolute',
        borderTopLeftRadius: 10,
        backgroundColor: theme.palette.character.shirt,
        transform: 'rotate(50deg)',
    },
    rightSleeve: {
        width: 25,
        height: 35,
        top: -2,
        right: -8,
        position: 'absolute',
        borderTopRightRadius: 10,
        backgroundColor: theme.palette.character.shirt,
        transform: 'rotate(-75deg)',
        zIndex: 2
    },
    arms: {
        position: 'relative',
    },
    rightArm: {
        width: 40,
        height: 10,
        top: -70,
        right: 80,
        position: 'absolute',
        backgroundColor: theme.palette.character.skin,
        transform: 'rotate(15deg)'
    },
    pants: {
        width: 70,
        height: 25,
        position: 'relative',
        backgroundColor: theme.palette.character.pants,
        '&::before': {
            width: 70,
            height: 5,
            position: 'absolute',
            top: 0,
            zIndex: 2,
            backgroundColor: theme.palette.character.pantsUp,
            content: '""'
        }
    },
    pantLeft: {
        width: 34,
        height: 80,
        position: 'absolute',
        backgroundColor: theme.palette.character.pants
    },
    pantRight: {
        width: 34,
        height: 80,
        marginLeft: 36,
        position: 'absolute',
        backgroundColor: theme.palette.character.pants,
    },
    pocket: {
        position: 'absolute',
        overflow: 'hidden',
        width: 27,
        height: 27,
        paddingLeft: 5,
        paddingRight: 5,
    },
    pocketRotateLeft: {
        transform: 'rotate(180deg)',
    },
    pocketRotateRight: {
        transform: 'rotate(270deg)',
        right: 0,
        top: 5,
        zIndex: 2
    },
    insidePocket: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: theme.palette.character.pantsUp
    }
}));

export default useStyles;