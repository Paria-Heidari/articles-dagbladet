import React from "react";
import ArticlesItems from "./ArticlesItems";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';



const ArticlesList = (props, handelDelete) => {
    const articlesList = props.articles.map((arti,index) =>{
        return arti.columns.map((article,index)=>{
            return <ArticlesItems key={index} article={article} />;
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