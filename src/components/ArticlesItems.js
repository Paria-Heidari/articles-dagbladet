import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const ArticlesItems = (probs) => {
    console.log(probs.article);

    return(
        // <Grid item xs={12} sm={probs.article.width} md={probs.article.width}>
        //     <a href={probs.article.url}>
        //         <img alt={probs.article.title} src={probs.article.imageUrl} />
        //     </a>
        //     <Paper>{probs.article.title}</Paper>
        // </Grid>
            <Grid item xs={12} sm={probs.article.width} md={probs.article.width} >
                <Box m={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        image={probs.article.imageUrl}
                        alt={probs.article.type}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {probs.article.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Delete</Button>
                        <a href={probs.article.url}>
                            <Button size="small">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>

            </Box>
            </Grid>

                /* <Segment className="segment">
                <Grid.Row>
                    <Grid.Column >
                            <a href={probs.article.url}>
                                <Image alt={probs.article.title} src={probs.article.imageUrl} />
                            </a>
                            {probs.article.title}
                    </Grid.Column>
                </Grid.Row>
                </Segment> */

        // <div className="article-item" >
        //     <div className="ui segment">
        //         <div className="content" style={{marginTop:5}} >
        //             <a href={probs.article.url}>
        //                 <img alt={probs.article.title} className="ui image" src={probs.article.imageUrl} />
        //             </a>
        //         </div>
        //         <div className="header">{probs.article.title}</div>

        //     </div>
        // </div>
    )
}


export default ArticlesItems;
