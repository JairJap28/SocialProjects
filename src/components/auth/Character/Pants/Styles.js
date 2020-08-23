import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;