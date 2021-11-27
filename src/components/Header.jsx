import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
    header: {
        background: "#fff", 
        height: "70px"
    },
    logo: {
        height: "55px",
        margin: "auto",
        paddingRight: 70
    },
    menu: {
        color: "#000"
    }
})

const Header = () => {

    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return(
        <AppBar>
            <Toolbar className={classes.header}>
                <MenuIcon className={classes.menu}/>
                <img src={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;

