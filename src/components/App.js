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
    

    // handelDelete = async index => {
    //     // await dagBladet.get(`/aller-structure-task/test_data.json ${id}`,
    //     await dagBladet.get('/aller-structure-task/test_data.json'+ index,
    //     {
    //         method:'DELETE'
    //     });
    //     const newArticles = this.state.articles.filter(inx => index !== inx);

    //     this.setState({
    //         setArticles:newArticles
    //     });
       
    // };
    
    handelDelete = async index => {
        await dagBladet.get('/aller-structure-task/test_data.json'+ index,
        {
            method:'DELETE'
        });
        //copy array
        var newAray = this.state.articles.slice();
        //delete element by index
        newAray.splice(index, 1);
        this.setState({setArticles: newAray});
    }
    
    render(){
        return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/"  element={<ArticlesList articles={this.state.articles} handelDelete={this.handelDelete} />}  />
                    <Route path="/Articles"  element={<Articles />}  />
                </Routes>
            </BrowserRouter>
             {/* <ArticlesList articles={this.state.articles} handelDelete={this.handelDelete} /> */}
            
        </div>
        )
    }
    
}

export default App;