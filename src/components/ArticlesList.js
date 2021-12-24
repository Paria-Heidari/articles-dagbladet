import React, { useState} from "react";
import ArticlesItems from "./ArticlesItems";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const ArticlesList = (props) => {
    
    const [articles, setArticles] = useState(props.articles);

    // Edit title
    const onEditSubmit =  async (editedArti) =>{
    let copy_articles = [...articles];
    copy_articles.map((allArt, rIndex) => {
        if (rIndex === editedArti.props.rowIndex) {
            allArt.columns.map((artCol, cIndex) => {
                if (cIndex === editedArti.props.index) {
                    // Make a shallow copy of the elemen
                    let copy_selectedArticle = { ...artCol};
                    // Update the property
                    copy_selectedArticle.title = editedArti.props.article.title;
                    // put it back into array
                    artCol = copy_selectedArticle;
                }
                return artCol;
            });
        }
        return allArt;
    });
        setArticles(copy_articles);
    }
    // delete Article
    const onDeleteSubmit = async ( selectedArticle) =>{
        let filteredArticles = [...articles];
        filteredArticles.map((row, rowIndex) => {
            if (rowIndex === selectedArticle.rowIndex) {
                row.columns.map((article, columnIndex) => {
                    if (columnIndex === selectedArticle.index) {
                        let copy_selectedArticle = { ...article};
                        delete  filteredArticles[rowIndex].columns[columnIndex];
                        setTimeout(() => {
                            if(window.confirm("Ønsker du å restaurere den slettede artikkelen?")){
                                let updatedArticles = [...filteredArticles];
                                row.columns[columnIndex] = copy_selectedArticle;
                                filteredArticles[rowIndex].columns[columnIndex]=row.columns[columnIndex];
                                setArticles(updatedArticles);
                            }
                        }, 1000);
                    }
                    return article;
                })
            }
            return rowIndex;
        });
        setArticles(filteredArticles);
    }
    const articlesList = props.articles.map((arti,rowIndex) =>{
        return arti.columns.map((article,index)=>{
            return <ArticlesItems key={index} article={article} rowIndex={rowIndex} index={index} onEditSubmit={onEditSubmit} onDeleteSubmit={onDeleteSubmit}/>;
        })
    })

    return (
        <Box mt={2} >
            <Grid container spacing={2}>
                {articlesList}
            </Grid>
        </Box>
    )
    };

    export default ArticlesList;
