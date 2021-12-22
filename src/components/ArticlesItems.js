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
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const ArticlesItems = (props) => {
    const height = new URLSearchParams(window.location.href).get('height');
    const width = new URLSearchParams(window.location.href).get('width');
    const styles = {
        media: {
          height: Number(height),
          width: Number(width),
        }
    };
    const [articles, setArticles] = useState({props});
    const [titleValue, setTitleValue] = useState(props.article.title);
    const [editMode, setEditMode] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(open);
    };

    const handleEditInput = (event) => {
        setEditMode(!editMode);
    };
    const onSubmit  = (event) =>{
        event.preventDefault(); 
        articles.props.article.title = titleValue;
        setArticles({articles: articles});
        props.onEditSubmit(articles);
    }
    const onChange = (event)=>{
        setTitleValue({titleValue:event.target.value});
    }

    const handleDelete = (event) => {
        handleClose();
        console.log("delete");
        console.log(props);
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
                    <Box mt={2} >
                        <IconButton onClick={handleEditInput}>
                            <EditIcon
                            />
                        </IconButton>
                        <Button
                        type="submit"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        size="small"
                        color="inherit"
                        >
                        Save
                    </Button>
                    </Box>
                    </form>
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleClickOpen}>
                        <DeleteOutlined/>
                        <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="draggable-dialog-title"
                        >
                            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Slette Artikkelen!
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Er du sikker på at du vil slette den valgte Artikkelen?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Avbryt
                                </Button>
                                <Button onClick={handleDelete}>Ja</Button>
                            </DialogActions>
                        </Dialog>
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
