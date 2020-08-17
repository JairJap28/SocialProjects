import React, { Fragment } from 'react';
import moment from 'moment';
import useStyles from './Styles';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const Notifications = ({ notifications }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader 
                title="Notifications"
                subheader="Last Three notifications of the system"
                />
            <CardContent>
                <List>
                    { notifications && notifications.map(item => (
                        <Fragment>
                            <ListItem key={item.id}>
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
                            <Divider light/>
                        </Fragment>
                    )) }
                </List>
            </CardContent>
        </Card>
    )
}

{/* <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map(item => (
                            <li key={item.id}>
                                <span className="pink-text">{item.user} </span>
                                <span>{item.content}</span>
                                <div className="grey-text note-date">
                                    {moment(item.time.toDate()).fromNow()}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div> */}

export default Notifications;