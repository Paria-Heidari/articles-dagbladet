import React from "react";
import ArticlesItems from "./ArticlesItems";
import Grid from "@material-ui/core/Grid";


const ArticlesList = props => {
    const articlesList = props.articles.map((arti,index) =>{
        return arti.columns.map((article,index)=>{
            return <ArticlesItems key={index} article={article}/>;
        })
    })

    return (
      
        <Grid container>
            {articlesList}
        </Grid>
                
    
    )
};


   


export default ArticlesList;