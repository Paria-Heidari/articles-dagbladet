import React from "react";
import dagBladet from './apis/DagBladet';
import ArticlesList from "./ArticlesList";
import Articles from "./Articles";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Header from './Header';


class App extends React.Component{

    state = {
        articles: [],
        setArticles:[],
      };

    
      componentDidMount() {
    
        dagBladet.get(`/aller-structure-task/test_data.json`)
            .then(res => {
                const response = res.data[0];
                this.setState({ articles: response});
            })
          
        }
        
       
    
    render(){
        return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/ArticlesList&height=200&width=200"  element={<ArticlesList articles={this.state.articles}/>}/>
                    <Route path="/Articles"  element={<Articles articles={this.state.articles}/>}  />
                </Routes>
            </BrowserRouter>
             {/* <ArticlesList articles={this.state.articles} handelDelete={this.handelDelete} /> */}
        </div>
        )
    }
    
}

export default App;