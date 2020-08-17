import { makeStyles } from '@material-ui/core/styles';

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
        borderBottomLeftRadius: 7,
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
        borderBottomRightRadius: 7,
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
    mouth: {
        width: 15,
        height: 10,
        top: 45,
        left: 27,
        position: 'absolute',
        backgroundColor: theme.palette.character.mouth,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        '&::before': {
            width: 15,
            height: 2,
            position: 'absolute',
            backgroundColor: 'white',
            content: '""'
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
            backgroundColor: theme.palette.character.pantsUp,
            content: '""',
            zIndex: 3
        }
    },
    pantLeft: {
        width: 34,
        height: 80,
        position: 'absolute',
        backgroundColor: theme.palette.character.pants,
        zIndex: 2
    },
    pantRight: {
        width: 34,
        height: 80,
        marginLeft: 36,
        position: 'absolute',
        backgroundColor: theme.palette.character.pants,
        zIndex: 2
    },
    pocket: {
        position: 'absolute',
        overflow: 'hidden',
        width: 27,
        height: 27,
        paddingLeft: 5,
        paddingRight: 5,
        zIndex: 3
    },
    pocketRotateLeft: {
        transform: 'rotate(180deg)',
    },
    pocketRotateRight: {
        transform: 'rotate(270deg)',
        right: 0,
        top: 5,
        zIndex: 3
    },
    insidePocket: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: theme.palette.character.pantsUp
    },
    shoes: {
        top: 60,
        position: 'relative',
    },
    rightShoe: {
        width: 40,
        height: 15,
        top: -5,
        left: -10,
        position: 'absolute',
        backgroundColor: theme.palette.character.shoes,
        borderTopLeftRadius: 40,
        transform: 'rotate(-15deg)',
        '&::before': {
            width: 15,
            height: 12,
            top: 3,
            position: 'absolute',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderTopRightRadius: 7,
            borderTopLeftRadius: 7,
            content: '""'
        },
        '&::after': {
            width: 40,
            height: 7,
            top: 14,
            position: 'absolute',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            content: '""',
        }
    },
    leftShoe: {
        width: 40,
        height: 15,
        top: -5,
        left: 40,
        position: 'absolute',
        backgroundColor: theme.palette.character.shoes,
        borderTopRightRadius: 40,
        transform: 'rotate(15deg)',
        '&::before': {
            width: 15,
            height: 12,
            top: 3,
            right: 0,
            position: 'absolute',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderTopRightRadius: 7,
            borderTopLeftRadius: 7,
            content: '""'
        },
        '&::after': {
            width: 40,
            height: 7,
            top: 14,
            position: 'absolute',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            content: '""',
        }
    }
}));

export default useStyles;