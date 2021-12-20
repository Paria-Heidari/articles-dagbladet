import React,  { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { IconButton } from "@material-ui/core";
import { DeleteOutlined} from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';



const ArticlesItems = (probs, handelDelete) => {
    // const Input = styled.input`
    // font-weight: bold;
    // width: 100%;
    // font-size: 18px;
    // `;
    
    // const [state, setState] = useState({
    //     title: probs.article.title
    //   });

    const [editMode, setEditMode] = useState(false);
    
    const handleEditInput = () => {
        setEditMode(!editMode);
            // ToDO    
            console.log("edit");
    }
     
    return(
        <Grid item xs={12} sm={probs.article.width} md={probs.article.width} >
            <Card sx={{ maxWidth: 345 }} elevation={2}>
                <CardMedia
                    component="img"
                    image={probs.article.imageUrl}
                    alt={probs.article.type}
                />
                <CardContent>
                    <input
                        style={{
                            "fontweight": "bold",
                            "width": "100%",
                            "fontsize": "18px",
                        }}
                        type="text"
                        defaultValue={probs.article.title}
                        disabled={!editMode}
                    />
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleEditInput}>
                        <EditIcon
                        />
                    </IconButton>
                    <IconButton onClick={()=> console.log("Delete", probs.article.title)}>
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


export default ArticlesItems;
