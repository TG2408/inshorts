import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';



const useStyles = makeStyles({
    container: {
        background: "#f44336", 
        color: "#ffffff",
        height: 48,
        display: "flex",
        alignItems: "center",
        marginBottom: 30,
        [createTheme().breakpoints.down('lg')]: {
            display: "none"
        }
    },
    text: {
        fontSize: 14,
        marginLeft: 50,
        fontFamily: 'Roboto sans-serif',  //Font-Style import in index.css from google fonts
        fontWeight: 300
    },
    logo: {
        height: 34,
        "&:last-child": {
            margin: "0 50px 0 20px"
        }
    }
})

const InfoHeader = () => {

    /* useStyles is a function declared using makestyles which take css property
       as object as a parameter and returns a class for css */
    const classes = useStyles();

    // Apple Store and Google Store links image to download inshorts app
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return(
        <Box className={classes.container}>
            <p className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</p>
            <Box style={{marginLeft: "auto"}}>
                <a href="https://itunes.apple.com/us/app/news-in-shorts/id892146527"><img src={appleStore} alt="Apple Store" className={classes.logo} /></a>
                <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source=inshorts%20mobile"><img src={googleStore} alt="Google Store" className={classes.logo} /></a>
            </Box>
        </Box>
    )
}

export default InfoHeader;