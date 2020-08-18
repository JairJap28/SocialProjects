import React, { Fragment } from 'react';
import moment from 'moment';
import useStyles from './Styles';

// Components
import NotificationsSkeleton from './NotificationsSkeleton';

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const Notifications = ({ notifications }) => {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.only('xs'));

    const [open, setOpen] = React.useState(matches);

    React.useEffect(() => {
        if(matches) setOpen(false);
        else setOpen(true);
    }, [matches]);

    const handleChangeAccordion = () => {
        if(matches) setOpen(!open);
    }

    const listNotifications = (
        <List>
            {notifications && notifications.map(item => (
                <ListItem key={item.id} disableGutters divider>
                    <ListItemText
                        primary={
                            <Fragment>
                                <Typography color="primary">
                                    @{item.user}
                                </Typography>
                                <Typography>
                                    {item.content}
                                </Typography>
                            </Fragment>
                        }
                        secondary={moment(item.time.toDate()).fromNow()}
                    />
                </ListItem>
            ))}
        </List>
    );

    return (
        <Accordion expanded={open} onChange={handleChangeAccordion}>
            <AccordionSummary className={classes.accordion}>
                <Box display="flex" flexDirection="column">
                    <Box>
                        <Typography variant="h6">Notifications</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2">Last Three notifications of the system</Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Card className={classes.card}>
                    <CardContent>
                        { notifications ? listNotifications : <NotificationsSkeleton /> }
                    </CardContent>
                </Card>
            </AccordionDetails>
        </Accordion>
    )
}

export default Notifications;