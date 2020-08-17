import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        margin: 10,
        '&:hover': {
            cursor: 'pointer',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderColor: theme.palette.success.light
        },
        '&::before': {
            width: 3,
            height: '100%',
            top: 0,
            right: 0,
            position: 'absolute',
            backgroundColor: theme.palette.secondary.main,
            content: '""'
        },
    }
}));

export default useStyles;