import React from 'react';
import useStyles from '../ProjectSummary/Styles';

// Components
import CustomSkeleton from '../../layout/CustomSkeleton';

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ProjectListSkeleton = () => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <div>
            { [...Array(4).keys()].map(item => (
                <Card
                    key={item + 10}
                    className={classes.card}>
                    <CardContent>
                        <CustomSkeleton
                            color={theme.palette.standard.dark}
                            highlightColor={theme.palette.standard.light}
                            width="50%"
                        />
                        <CustomSkeleton
                            color={theme.palette.standard.main}
                            highlightColor={theme.palette.standard.light}
                            width="80%"
                        />
                        <CustomSkeleton
                            color={theme.palette.standard.light}
                            highlightColor={theme.palette.standard.main}
                            width="50%"
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default ProjectListSkeleton;
