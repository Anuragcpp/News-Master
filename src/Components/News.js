import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articals = [
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Russian journalist Maria Ponomarenko jailed for highlighting Mariupol killings","description":"Maria Ponomarenko faces six years for detailing Russia's deadly attack on a theatre in Ukraine.","url":"http://www.bbc.co.uk/news/world-europe-64647267","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/3113/production/_128636521_520fcc68-690d-43d3-9902-bdde00ff94f5.jpg","publishedAt":"2023-02-15T11:07:23.0486319Z","content":"Russian journalist Maria Ponomarenko has been jailed for six years for posting on social media about a deadly attack by Russian warplanes on a theatre in Ukraine.\r\nThe court in Barnaul in Siberia fou… [+2682 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Nicola Sturgeon: Scotland's first minister to announce resignation in news conference","description":"Scotland's first minister will speak to journalists at 11:00 from her official Edinburgh residence Bute House.","url":"http://www.bbc.co.uk/news/live/uk-scotland-64648879","urlToImage":"https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png","publishedAt":"2023-02-15T10:37:31.526383Z","content":"This is a bombshell which will send shockwaves through Scottish politics.\r\nThats not just because Nicola Sturgeon has been a key figure for so long an MSP since the Scottish parliament was opened in … [+752 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Nicola Sturgeon to resign as Scotland's first minister","description":"The Scottish National Party leader is expected to make the announcement at a news conference in Edinburgh.","url":"http://www.bbc.co.uk/news/uk-scotland-64647907","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/10C91/production/_128635786_sturgeon_2_pa.jpg","publishedAt":"2023-02-15T10:07:20.087596Z","content":"Nicola Sturgeon is to resign as Scotland's first minister after more than eight years in the role. \r\nThe Scottish National Party leader is expected to make the announcement at a hastily-arranged news… [+567 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Sandwich chain Subway explores sale of business","description":"The company is facing rising costs and increasing competition from rival fast food companies.","url":"http://www.bbc.co.uk/news/business-64645490","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/7E4D/production/_128633323__j0a2250-2.jpg","publishedAt":"2023-02-15T08:37:22.169447Z","content":"Global sandwich chain Subway says it is exploring a possible sale of the business after almost six decades of family ownership.\r\nThe firm has been growing rapidly for years but is now facing tough so… [+1820 chars]"},
    {"source":{
        "id":"bbc-news",
        "name":"BBC News"},
        "author":"BBC News",
        "title":"Boy who survived Thai cave rescue dies in UK",
        "description":"The teenager had been enrolled in a football academy in Leicester since late last year.",
        "url":"http://www.bbc.co.uk/news/world-asia-64646039",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/1801D/production/_128633389_gettyimages-1001082384.jpg",
        "publishedAt":"2023-02-15T07:52:23.6665016Z",
        "content":"Duangpetch Promthep, one of the 12 boys who was rescued from a Thai cave in 2018, has died in the UK. \r\nThe cause of the death is unclear, but the teenager is reported to have sustained a head injury… [+1401 chars]"},
    {"source":{"id":"bbc-news",
    "name":"BBC News"},
    "author":"BBC News",
    "title":"Elon Musk donates almost $2bn of Tesla shares to charity",
    "description":"Also on Wednesday, Mr Musk hinted he plans to find his successor to lead Twitter by the end of 2023.","url":"http://www.bbc.co.uk/news/business-64645888",
    "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/8235/production/_128633333_gettyimages-1459166551.jpg",
    "publishedAt":"2023-02-15T06:52:17.8219648Z",
    "content":"Tesla chief executive Elon Musk says he donated around $1.95bn (£1.6bn) worth of shares in his electric carmaker to charity last year.\r\nThe donation of 11.6 million shares was described in a filing w… [+2000 chars]"},
    {"source":{
        "id":"bbc-news","name":"BBC News"},
        "author":"BBC News",
        "title":"Ukraine war: The Russian student under arrest for an Instagram story",
        "description":"Olesya posted online about Russia's invasion of Ukraine. Now, she can only leave home to go to court.",
        "url":"http://www.bbc.co.uk/news/world-europe-64625127",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/9A89/production/_128616593_capture.jpg",
        "publishedAt":"2023-02-15T04:22:19.4943671Z",
        "content":"University student Olesya Krivtsova has been missing a lot of classes.\r\nThat's because 20-year-old Olesya is under house arrest. She has an electronic tag on her leg. Police can monitor her every mov… [+4954 chars]"},
    {"source":{
        "id":"bbc-news",
        "name":"BBC News"},
        "author":"BBC News",
        "title":"The TikTok trends calling out gym harassment against women","description":"Videos with the hashtags #GymCreep and #GymWeirdo have more than 100 million views on the platform.",
        "url":"http://www.bbc.co.uk/news/newsbeat-64575814",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/2D15/production/_128614511_whatsappimage2023-02-10at16.53.52.jpg","publishedAt":"2023-02-15T02:22:22.9470064Z",
        "content":"Working up the motivation to go to the gym can be tough enough - but what if you've got to worry about \"creeps and weirdos\" when you get there?\r\nThat's the latest question people are asking on TikTok… [+4057 chars]"},
    {"source":{
        "id":"bbc-news",
        "name":"BBC News"},"author":"BBC News",
        "title":"Michigan State University attacker lied about gun in room, dad says","description":"The troubled suspect was banned from carrying a weapon, but used to fire a gun in their backyard, his father says.",
        "url":"http://www.bbc.co.uk/news/world-us-canada-64644992",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/11443/production/_128632707_gettyimages-1247121532.jpg",
        "publishedAt":"2023-02-15T01:07:26.6353971Z",
        "content":"Media caption, Watch: Michigan State students 'just started running'\r\nA gunman who killed three people at Michigan State University had a history of mental illness and used to lie about having a fire… [+2163 chars]"
    },
    {"source":{
        "id":"bbc-news","name":"BBC News"},
        "author":"BBC News","title":"US suspects three unidentified objects it shot down were 'benign'","description":"The White House says the unidentified aircraft may have been \"tied to commercial or research entities\".",
        "url":"http://www.bbc.co.uk/news/world-us-canada-64644845","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/9E4B/production/_128632504_41e04c9d9d69c902e1f854592e5f51b0e2d789ff0_0_2667_20041000x751.jpg","publishedAt":"2023-02-14T23:22:15.7912063Z",
        "content":"The White House has said there is no indication three flying objects blasted out of the sky over the weekend by the US military are linked to alleged Chinese spying.\r\nThe objects may be \"tied to comm… [+3723 chars]"
    }
    ]

  constructor(){
    super();
    console.log('hello I am constructor from news component');
    this.state={
        articals : this.articals,
        loading : false
    }
  }

  // async componentDidMount(){
  //   console.log('cmd');
  //   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0be261a76b1f45e6993019138b81412c";
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({articals : parsedData.articals})
  // }


  render() {
    return (
      <div className='container my-3' >
        <h2>NewsMaster - Top headlines</h2>
        <div className="row" >
          {this.state.articals.map((element)=>{
            return  <div className="col-md-4"key={element.url} >
                      <NewsItem titel={element.title?element.title:''} description ={element.description?element.description:''} imageUrl = {element.urlToImage} newsUrl={element.url} />
                  </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
