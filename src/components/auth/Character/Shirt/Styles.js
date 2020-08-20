import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
    leftArm: {
        width: 20,
        height: 10,
        top: -52,
        left: -30,
        position: 'absolute',
        backgroundColor: theme.palette.character.skin,
        transform: 'rotate(-40deg)',
        '&::before': {
            width: 20,
            height: 10,
            top: -9,
            left: -9,
            position: 'absolute',
            backgroundColor: theme.palette.character.skin,
            transform: 'rotate(-100deg)',
            content: '""'
        }
    },
    rightHand: {
        width: 15,
        height: 15,
        top: -67,
        right: 70,
        position: 'absolute',
        borderRadius: '40%',
        backgroundColor: theme.palette.character.skin,
        '&::before': {
            width: 5,
            height: 1,
            top: 6,
            left: 10,
            position: 'absolute',
            backgroundColor: theme.palette.character.skinDark,
            transform: 'rotate(10deg)',
            content: '""'
        },
        '&::after': {
            width: 5,
            height: 1,
            top: 11,
            left: 9,
            position: 'absolute',
            backgroundColor: theme.palette.character.skinDark,
            transform: 'rotate(10deg)',
            content: '""'
        }
    },
    leftHand: {
        width: 15,
        height: 15,
        top: -65,
        left: -52,
        position: 'absolute',
        borderRadius: '40%',
        backgroundColor: theme.palette.character.skin,
        transform: 'rotate(200deg)',
        '&::before': {
            width: 5,
            height: 1,
            top: 6,
            left: 10,
            position: 'absolute',
            backgroundColor: theme.palette.character.skinDark,
            transform: 'rotate(10deg)',
            content: '""'
        },
        '&::after': {
            width: 5,
            height: 1,
            top: 11,
            left: 9,
            position: 'absolute',
            backgroundColor: theme.palette.character.skinDark,
            transform: 'rotate(10deg)',
            content: '""'
        }
    },
    handThumbFinger: {
        width: 7,
        height: 3,
        top: 15,
        position: 'absolute',
        borderBottomRightRadius: 7,
        backgroundColor: theme.palette.character.skin,
        transform: 'rotate(90deg)'
    },
    handIndexFinger: {
        width: 10,
        height: 3,
        top: 2,
        right: -7,
        position: 'absolute',
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        backgroundColor: theme.palette.character.skin,
        transform: 'rotate(10deg)'
    },
}));

export default useStyles;