import React from "react";
import dagBladet from './apis/DagBladet';
import ArticlesList from "./ArticlesList";
import Articles from "./Articles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';


class App extends React.Component{

    state = {
        articles: [],
        setArticles:[]
      };
    
    componentDidMount() {
        dagBladet.get(`/aller-structure-task/test_data.json`)
          .then(res => {
            const response = res.data[0];
            this.setState({ articles: response});
        })
       
    };
    handelEditTitle = async (id,title) =>{
        await dagBladet.put('/aller-structure-task/test_data.json'+ id,title,
        {
            method:'PUT'
        });
    }

    // handelDelete = async title => {
    //     console.log(title,"index");
        // await dagBladet.get(`/aller-structure-task/test_data.json ${id}`,
         // Asynchronous API request
        // await dagBladet.get('/aller-structure-task/test_data.json'+ index,
        // {
        //     method:'DELETE'
        // });
        // const newArticles = this.state.articles.filter(inx => index !== inx);

        // this.setState({
        //     setArticles:newArticles
        // });
       
    // };
    
    
    render(){
        return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/"  element={<ArticlesList articles={this.state.articles} handelDelete={this.handelDelete}/>}/>
                    <Route path="/Articles"  element={<Articles articles={this.state.articles}/>}  />
                </Routes>
            </BrowserRouter>
             {/* <ArticlesList articles={this.state.articles} handelDelete={this.handelDelete} /> */}
        </div>
        )
    }
    
}

export default App;