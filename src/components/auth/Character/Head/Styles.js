import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
        backgroundColor: props => props.colorGlass,
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
        backgroundColor: props => props.colorGlass,
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
}));

export default useStyles;