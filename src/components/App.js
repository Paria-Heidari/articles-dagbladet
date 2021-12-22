import React from "react";
import dagBladet from './apis/DagBladet';
import ArticlesList from "./ArticlesList";
import Articles from "./Articles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';


class App extends React.Component{
    state = {
        articles: [],
        setArticles:[],
      };

    async componentDidMount() {
        // GET request with async/await
        const response = await dagBladet.get(`/aller-structure-task/test_data.json`);
        const data = await response.data[0];
        this.setState({ articles: data })
    }
    
    render(){
        return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/"  element={<Articles articles={this.state.articles}/>}  />
                    <Route path="/ArticlesList&height=200&width=200"  element={<ArticlesList articles={this.state.articles}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        )
    }
    
}

export default App;