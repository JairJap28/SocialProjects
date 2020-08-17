const useStyle = (theme) => ({
    container: {
        paddingTop: 80,
        display: 'flex',
        
        height: '95vh'
    },
    containerProjects: {
        width: '60%',
        [theme.breakpoints.between('xm', 'sm')]:{
            width: '50%'
        },
        overflow: 'auto',
        direction: 'rtl',
    },
    projects: {
        direction: 'ltr !important'
    },
    notifications: {
        width: '40%',
        marginLeft: 30,
    }
});

export default useStyle;