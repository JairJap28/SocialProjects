import React from 'react';

// Components
import CustomSkeleton from '../../layout/CustomSkeleton';

// MUI Stuff
import useTheme from '@material-ui/core/styles/useTheme';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';

const ProjectDetailSkeleton = () => {
    const theme = useTheme();
    return (
        <div>
            <div style={{ margin: '10px 0px 10px 20px' }}>
                <CustomSkeleton 
                    color={theme.palette.standard.dark}
                    highlightColor={theme.palette.standard.light}
                    width="40%"
                />
            </div>
            <Divider variant="middle" />
            <CardContent>
                <CustomSkeleton 
                    color={theme.palette.standard.light}
                    highlightColor={theme.palette.standard.light}
                    width="90%"
                    count={4}
                />
            </CardContent>
        </div>
    )
}

export default ProjectDetailSkeleton;
