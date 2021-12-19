import React from "react";
import dagBladet from './apis/DagBladet';
import ArticlesList from "./ArticlesList";



class App extends React.Component{

    state = {
        articles: []
      }
    
    componentDidMount() {
        dagBladet.get(`/aller-structure-task/test_data.json`)
          .then(res => {
            const response = res.data[0];
            this.setState({ articles: response});
        })
      }

    render(){
        return (
        <div ui container>
             <ArticlesList articles={this.state.articles}/>
            {/* <div className="ui grid">
                <div className="ui row">
                    <div className="twelve wide computer column">
                        <ArticlesList articles={this.state.articles}/>
                    </div>
                </div>
            </div> */}
        </div>
        )
    }
    
}

export default App;