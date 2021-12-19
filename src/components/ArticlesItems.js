import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from "@material-ui/core";
import { DeleteOutlined } from '@material-ui/icons';



const ArticlesItems = (probs, handelDelete) => {
    
    // console.log(Object.keys(probs.article));
    // const prop = probs.article.title;
    // const newCar = Object.keys(probs.article).reduce((object, key) => {
    //     if (key === prop) {
    //         console.log("Delete", probs.article.title)
    //     }
    //     return object
    //   }, {})

    // var index = probs.article.findIndex(e=> console.log("index", e));
    // var index = probs.article.findIndex(obj => obj.title === probs.article.title);
    // console.log(newCar);

    return(
            <Grid item xs={12} sm={probs.article.width} md={probs.article.width} >
                <Card sx={{ maxWidth: 345 }} elevation={2}>
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
                        <IconButton onClick={() => console.log("Delete", probs.article.title)}>
                            <DeleteOutlined/>
                        </IconButton>
                        <a href={probs.article.url}>
                            <Button size="small">Learn More</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>

    )
}


// deleteHandler: function(e,id){
//     //find index of element
//     var index = this.state.listdata.findIndex(e=>e.id==id);
//     //copy array
//     var newAray = this.state.listdata.slice();
//     //delete element by index
//     newAray.splice(index, 1);
//     this.setState({listdata: newAray});

// },

export default ArticlesItems;
