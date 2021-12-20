import React,  { useState } from "react";
import dagBladet from './apis/DagBladet';
import ArticlesItems from "./ArticlesItems";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const ArticlesList = (props, handelDelete) => {

    const [articles, setArticles] = useState();

    const onEditSubmit =  async (titleValue) =>{
        props.onEditS(titleValue);
        // const editResponse = await dagBladet.put('/aller-structure-task/test_data.json',null, { params: {
            await dagBladet.put('/aller-structure-task/test_data.json',null, { params: {
                title: titleValue.titleValue,
              }})
              .then(response => {
                console.log(response);
                console.log(response.status);
                setArticles({articles:response});
                
            })
            .catch(err => console.warn(err));
        }

        const onDeleteSubmit = async ( selectedArticle) =>{
            // props.onDeleteS(props);
            console.log(selectedArticle);
            await dagBladet.post('/aller-structure-task/test_data.json', selectedArticle)
            .then(response => {
                console.log(response);
                console.log(response.status);
                setArticles({articles:response});

            })
            .catch(err => console.warn(err));
            // setArticles({articles:res});
            // console.log(articles);
        }


    const articlesList = props.articles.map((arti,index) =>{
        // console.log(index, arti);
        return arti.columns.map((article,inx)=>{
            return <ArticlesItems key={inx} article={article} index={inx} onEditSubmit={onEditSubmit} onDeleteSubmit={onDeleteSubmit}/>;

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
