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



const ArticlesItems = (props, handelDelete) => {
    
    const height = new URLSearchParams(window.location.href).get('height');
    const width = new URLSearchParams(window.location.href).get('width');

    const styles = {
        media: {
          height: Number(height),
          width: Number(width),
        }
    };

    const [titleValue, setTitleValue] = useState(props.article.title);
    
    // const Input = styled.input`
    // font-weight: bold;
    // width: 100%;
    // font-size: 18px;
    // `;

    const [editMode, setEditMode] = useState(false);
    
    const handleEditInput = (event) => {
        setEditMode(!editMode);
    };
    const onSubmit  = (event) =>{
        event.preventDefault(); 
         props.onEditSubmit(titleValue);
         

    }
    const onChange = (event)=>{
        // console.log(event.target.value);
        setTitleValue({titleValue:event.target.value});
    }

    const handleDelete = (event) => {
        console.log(props);
        console.log("delete");
        props.onDeleteSubmit(props);
        
    };
     
    return(

        <Grid item xs={12} sm={props.article.width} md={props.article.width} >
            <Card sx={{ maxWidth: 345 }} elevation={2}>
                <CardMedia
                    component="img"
                    image={props.article.imageUrl}
                    alt={props.article.type}
                    style={styles.media} 
                />
                <CardContent>
                    <form onSubmit = {(e) => {onSubmit(e)}}>
                        <input
                            style={{
                                "fontweight": "bold",
                                "width": "100%",
                                "fontsize": "18px",
                            }}
                            type="text"
                            defaultValue={titleValue}
                            disabled={!editMode}
                            onChange={onChange}
                        />

                    </form>
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleEditInput}>
                        <EditIcon
                        />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <DeleteOutlined/>
                    </IconButton>
                    <a href={props.article.url}>
                        <Button size="small">Learn More</Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>

    )
}


export default ArticlesItems;
