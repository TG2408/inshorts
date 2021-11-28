
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

//Components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';



const useStyles = makeStyles({
  container: {
    marginTop: 110,
    width: "59%",
    margin: "0 auto"  
  }    
})


const App = () => {

  /* useStyles is a function declared using makestyles which take css property
    as object as a parameter and returns a class for css */
  const classes = useStyles();

  return(
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  )
}

export default App;
