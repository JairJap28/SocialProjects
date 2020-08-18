const useStyle = (theme) => ({
    containerProjects: {
        height: '80vh',
        width: '60%',
        marginTop: 75,
        [theme.breakpoints.only('xs')]:{
            height: '70vh',
            width: '100%',
            marginTop: 0,
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
        marginTop: 80,
        [theme.breakpoints.only('xs')]:{
            width: '100%',
            padding: 10,
            marginLeft: 0,
            marginBottom: 15,
            backgroundColor: theme.palette.standard.light,
        },
    }
});

export default useStyle;