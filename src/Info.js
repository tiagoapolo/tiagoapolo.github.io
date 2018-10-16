import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


class Info extends Component {

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
    
    fetch(data)
    .then(results => {
      return results.json()
    }).then(data => {
      console.log(data.items)
      let posts = data.items.map(post => {
        return (
          <a key={data.items} href={post.link} target="_blank">
            {/* <h1><a href={post.link}>{post.title}</a></h1>
            <img src={post.thumbnail}/> */}

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={post.thumbnail} />}
                onClick={this.actionMe}                
              >
              <Meta
                title={post.title}
                description="www.instagram.com"
              />
            </Card>

          </a>
        )
      })

      this.setState({posts: posts})

    })
  }
  
  render() {
    return (
      <div className="Info box">
        {this.state.posts}
      </div>
    );
  }
}

export default Info;
