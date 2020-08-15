import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 10,
        '&:hover': {
            cursor: 'pointer',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderColor: theme.palette.success.light
        }
    }
}));

export default useStyles;