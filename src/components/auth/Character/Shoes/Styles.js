import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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