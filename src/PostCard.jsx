import { Card, CardContent, CardMedia, Typography ,Hidden} from "@mui/material";
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


const PostCard = ({ post }) => {
    // const classes=useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href="#">
               <Card >
               <div>
                <CardContent>
                    <Typography component='h2' variant='h5'>
                        {post.title}
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary'>
                        {post.date}
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                        {post.description}
                    </Typography>
                    <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>
                        Continue reading...
                    </Typography>
                </CardContent>
               </div>
               <Hidden xsDown>
                <CardMedia
                   
                    image={post.image}
                    title={post.imageTitle}

                />
               </Hidden>
               </Card> 
            </CardActionArea>
        </Grid>
    )
}

export default PostCard