import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CustomSkeleton = ({ color, highlightColor, width, height, count }) => {
    return (
        <SkeletonTheme
            color={color}
            highlightColor={highlightColor}>
            <Skeleton 
                width={width}
                height={height}
                count={count}
                />
        </SkeletonTheme>
    )
}

export default CustomSkeleton;
