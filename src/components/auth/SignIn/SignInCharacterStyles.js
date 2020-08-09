import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: 200,
        margin: 'auto',
        position: 'relative',
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
        backgroundColor: theme.palette.character.pants,
    },
    pantRight: {
        width: 34,
        height: 80,
        marginLeft: 36,
        position: 'absolute',
        backgroundColor: theme.palette.character.pants,
    }
}));

export default useStyles;