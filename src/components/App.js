import React from "react";
import dagBladet from './apis/DagBladet';
import ArticlesList from "./ArticlesList";
import Articles from "./Articles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/appAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => console.warn(err));
    }
    
    componentDidMount() {
        this.callAPI();
    }

    // state = {
    //     articles: [],
    //     setArticles:[],
    //   };

    // async componentDidMount() {
    //     // GET request with async/await
    //     const response = await dagBladet.get(`/aller-structure-task/test_data.json`);
    //     const data = await response.data[0];
    //     this.setState({ articles: data })
    // }
    
    render(){
        return (
        <div>
            <p className="App-intro">;{this.state.apiResponse}</p>
            {/* <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/"  element={<Articles articles={this.state.articles}/>}  />
                    <Route path="/ArticlesList&height=200&width=200"  element={<ArticlesList articles={this.state.articles}/>}/>
                </Routes>
            </BrowserRouter> */}
        </div>
        )
    }
    
}

export default App;