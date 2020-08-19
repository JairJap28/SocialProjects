import React, { Fragment } from 'react';

// Components
import CustomSkeleton from '../../layout/CustomSkeleton';

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NotificationsSkeleton = () => {
    const theme = useTheme();
    return (
        <List>
            { [...Array(3).keys()].map(item => (
                <ListItem key={item}>
                    <ListItemText
                        primary={
                            <Fragment>
                                <CustomSkeleton 
                                    color={theme.palette.primary.light} 
                                    highlightColor={theme.palette.primary.main}
                                    width="80%"
                                />
                                <CustomSkeleton 
                                    color={theme.palette.standard.light}
                                    highlightColor={theme.palette.standard.dark}
                                    width="60%"
                                />
                                <CustomSkeleton 
                                    color={theme.palette.standard.light}
                                    highlightColor={theme.palette.standard.main}
                                    width="40%"
                                />
                            </Fragment>
                        }
                    />
                </ListItem>
            )) }
        </List>
    )
};

export default NotificationsSkeleton
