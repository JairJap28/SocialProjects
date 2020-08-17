import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        '&::before': {
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            position: 'absolute',
            borderLeft: '30px solid transparent',
            borderRight: '0px solid transparent',
            borderTop: `30px solid ${theme.palette.secondary.light}`,
            content: '""'
        },
        '&::after': {
            width: 10,
            height: 10,
            top: 5,
            right: 4,
            position: 'absolute',
            background: 'white',
            borderRadius: '50%',
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.dark,
            content: '""'
        }
    }
}));

export default useStyles;