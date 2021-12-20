import React from "react";

const Articles = (props) => {
    const articles = props.articles.map((arti,index) =>{
        // console.log(index, arti);
        return arti.columns.map((article,inx)=>{
            return <ul key={inx}>
                        <li key={inx}>
                            <a href={article.url}>
                                { article.title}
                            </a>
                        </li>
                    </ul>
        })
    })
    return (
        <div>
            {articles}
        </div>
    )
}

export default Articles;