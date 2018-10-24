import React, { Component } from 'react';
import './Articles.css'


class Info extends Component {

  apiArticleUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tiagoapolo%2F'

  constructor(){
    super();

    this.state = {
      posts: [],
      isChecked: true,
      
    }
  }

  actionMe(){
    console.log("Asdoapodjapos")
    // this.setState({isChecked: false})
  }

  onChange(date, dateString) {
    console.log(date, dateString);
    
  }
  

  componentDidMount(){

    let data = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hackernoon%2F"
    let tiagoapolo = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tiagoapolo%2F'

    data = tiagoapolo

    this.getArticles()
    

  }

  getArticles(){

    fetch(this.apiArticleUrl)
    .then(results => results.json()).then(data => {
      console.log(data.items)
      let posts = data.items.map(post => {
        return (

          <div className="article-card">
            <div className="article-header">
              <a href={post.link}>{post.title}</a>
            </div>
            <div className="article-content">
              <img src={post.thumbnail}/>
            </div>            
          </div>

          // <a key={data.items} href={post.link} target="_blank">
          //   <h1><a href={post.link}>{post.title}</a></h1>
          //   <img src={post.thumbnail}/>
          // </a>
        )
      })

      this.setState({posts: posts})

    })

  }
  
  render() {
    return (
      <div className="Articles">
        {this.state.posts}
      </div>
    );
  }
}

export default Info;
