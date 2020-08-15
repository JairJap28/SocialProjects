const useStyle = (theme) => ({
    container: {
        paddingTop: 80,
        display: 'flex',
        height: '95vh'
    },
    containerProjects: {
        width: '60%',
        overflow: 'auto',
        direction: 'rtl'
    },
    projects: {
        direction: 'ltr !important'
    },
    notifications: {
        width: '30%',
        marginLeft: 30,
    }
});

export default useStyle;