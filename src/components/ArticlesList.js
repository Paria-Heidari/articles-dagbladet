import React, {useState} from "react";
import dagBladet from './apis/DagBladet';
import ArticlesItems from "./ArticlesItems";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const ArticlesList = (props) => {
    
    // console.log(props);
    
    const [articles, setArticles] = useState(props.articles);

    // console.log(articles);
    

    const onEditSubmit =  async (editedArti) =>{

        // console.log( editedArti);
        // console.log(props.articles);
        
        // console.log(articles);
        let copy_articles = [...articles];
        // console.log(copy_articles);

        copy_articles.map((allArt, rIndex) => {
            if (rIndex === editedArti.props.rowIndex) {
                console.log(editedArti.props);
                allArt.columns.map((artCol, cIndex) => {
                    if (cIndex === editedArti.props.index) {
                        // console.log(artCol);
                        // console.log( artCol.title);
                        // console.log( editedArti.props.article.title);

                        // Make a shallow copy of the elemen
                        let copy_selectedArticle = { ...artCol};
                        // Update the property
                        copy_selectedArticle.title = editedArti.props.article.title;
                        // put it back into array
                        artCol = copy_selectedArticle
                
                    }
                    return artCol;
                });
            }
            return allArt;
        });

        setArticles(copy_articles);
        // console.log("copy_articles", copy_articles);
        // console.log("copy_articles", articles);


        // await dagBladet.patch('', copy_articles)
        //     .then(response => {
        //         response = response.status;
        //         setArticles({articles:response});
        //     })
        // .catch(err => console.warn('There was an error!',err));
    }

        const onDeleteSubmit = async ( selectedArticle) =>{
            // console.log(selectedArticle.article);
            // console.log(props);
            let filteredArticles = [...articles];
            filteredArticles.map((row, rowIndex) => {
                if (rowIndex === selectedArticle.rowIndex) {
                    row.columns.map((article, columnIndex) => {
                        if (columnIndex === selectedArticle.index) {
                            console.log("befor",filteredArticles);
                            delete filteredArticles[rowIndex].columns[columnIndex];
                        }
                        return columnIndex;
                    })
                }
                return rowIndex;
            });
            setArticles(filteredArticles);
            console.log(articles);
            // console.log("filteredArticles", filteredArticles);

            // await dagBladet.post('api/dagBladet', filteredArticles)
            // .then(response => {
            //     response = response.status;
            //     setArticles({articles:response});
            // })
            // .catch(err => console.warn(err));
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




    
        // articles.map((allArt, rIndex) => {
        //     if (rIndex === editedArti.props.rowIndex) {
        //         console.log(editedArti.props);
        //         allArt.columns.map((artCol, cIndex) => {
        //             if (cIndex === editedArti.props.index) {
        //                 console.log(artCol);
        //                 console.log( artCol.title);
        //                 console.log( editedArti.props.article.title);
        //                 // Make a shallow copy of the elemen
        //                 let copy_selectedArticle = { ...artCol};
        //                 // Update the property
        //                 copy_selectedArticle.title = editedArti.props.article.title;
        //                 console.log(copy_selectedArticle);
        //                 // put it back into array
        //                 artCol = copy_selectedArticle
        //                 return{
        //                 }
                        
        //             }
        //             return true;
        //         });
        //     }
        //     return true;
        //     })

        // setArticles({
        //     articles: props.articles.map((col, index) => {
        //         // console.log(index);
        //         // console.log(art.props.rowIndex);
        //         // console.log(props);
        //       if (index === art.rowIndex) {
        //           console.log("index");
        //         //  col.columns.map((ar, i) => {
        //         //     if (i === ar.index) {
        //         //         console.log(ar);
        //         //     //    return {
        //         //     //       ...newArticles,
        //         //     //       art
        //         //     //    };
        //         //     }
        //         //     return console.log(ar);;
        //         //  });
        //       }
        //       return "false";
        //    })
        // });


        

        // If we should set HTTP headers
        // const headers = { 
        //     'Authorization': 'Bearer my-token',
        //     'Custom-Header': 'header'
        // };
        // await dagBladet.patch('/aller-structure-task/test_data.json', copy_articles, { headers })
        //   .then(response => {
        //     setArticles({articles:response});
        //     console.log(response);
        //     console.log(response.status);
        // })
        // .catch(err => console.warn('There was an error!',err));
        // }

        

