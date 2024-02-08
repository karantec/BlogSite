import { Card, CardContent, Typography, Button,CardActions } from "@mui/material";

const FeaturedPost = () => {
  return (
    <Card style={{ 
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundPosition: 'center',
      padding: "35px 25px",
    }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography style={{ 
          fontSize: 20,
          textTransform: 'uppercase',
          fontFamily: 'cursive',
        }} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple Lines of text that form the lede info quickly and 
          efficiently about what most people will be interested in.
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  )
}

export default FeaturedPost;
