import { CardContent, Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const useStyles = makeStyles({

    component: {
        marginBottom: "20px !important",
        boxShadow: "0 2px 5px 0 rgb(0 0 0/16%), 0 2px 10px 0 rgb(0 0 0/12%) !important"
    },

    container: {
        padding: "8px !important",
        paddingBottom: '4px !important'
    },

    image: {
        height: "268px !important",
        width: "80% !important",
        borderRadius: "5px !important",
        objectFit: "cover !important"
    },

    rightContainer: {
        margin: "5px 0 0 -28px !important",
        [createTheme().breakpoints.down("sm")]: {
            margin: "5px 0 !important"
        }
    },
    title: {
        color: "#44444d",
        fontWeight: "300px !important",
        fontSize: "22px !important",
        lineHeight: "27px !important"
    },
    author: {
        fontSize: "12px !important",
        color: "#808290",
        lineHeight: "22px !important"
    },
    description: {
        lineHeight: '22px !important',
        color: '#44444d !important',
        marginTop: "5px !important",
        fontFamily: "'Roboto',sans-serif !important",
        fontWeight: "300px !important"
    },
    short: {
        color: '#44444d !important',
        fontFamily: "'Convergence', sans-serif !important"
    },
    publisher: {
        fontSize: "12px !important",
        marginTop: 'auto !important',
        marginBottom: "10px !important",
        '& > *': {
            textDecoration: 'none !important',
            color: '#000 !important',
            fontWeight: "900px !important"
        }
    }
})

const Article = ({ article }) => {
    
    const classes = useStyles();

    return(
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}> 
                        <img src={article.url} alt="" className={classes.image} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.author}>
                            <b className={classes.short}>short</b> by {article.author}/ {new Date(article.timestamp).toDateString()}
                        </Typography>
                        <Typography className={classes.description}>{article.description}</Typography>
                        <Typography className={classes.publisher}>
                            read more at <a href={article.link} target="_blank" rel="noreferrer">{article.publisher}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Article;