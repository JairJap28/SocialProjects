import React, { Fragment } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NotificationsSkeleton = () => {
    const theme = useTheme();
    return (
        <List>
            { [0,1,3].map(item => (
                <ListItem key={item}>
                    <ListItemText
                        primary={
                            <Fragment>
                                <SkeletonTheme 
                                    color={theme.palette.primary.light} 
                                    highlightColor={theme.palette.primary.main}>
                                        <Skeleton/>
                                </SkeletonTheme>
                                <SkeletonTheme
                                    color={theme.palette.standard.light}
                                    highlightColor={theme.palette.standard.dark}>
                                        <Skeleton />
                                </SkeletonTheme>
                                <SkeletonTheme
                                    color={theme.palette.standard.light}
                                    highlightColor={theme.palette.standard.main}>
                                        <Skeleton />
                                </SkeletonTheme>
                            </Fragment>
                        }
                    />
                </ListItem>
            )) }
        </List>
    )
};

export default NotificationsSkeleton
