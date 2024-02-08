import Container from '@mui/material/Container';
import Header from "./Header";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import FeaturedPost from './FeaturedPost';
import "./App.css"
import Grid from '@mui/material/Grid';
import { featuredPosts } from './data/data';
import PostCard from './PostCard';
const App = () => {
 
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </Grid>
        {/* <Grid
        container spacing={5}
         className={classes.mainGrid}></Grid> */}
      </Container>
    </ThemeProvider>
  )
}

export default App
