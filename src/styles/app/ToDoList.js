const useStyles = theme => ({
    createText: {
        textAlign: "center",
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
    },
    createCard: {
        border: ` solid 1px ${theme.palette.primary.main}`,
        cursor: 'pointer'
    },
    list: {
        padding: theme.spacing(1)
    }
});
export default useStyles