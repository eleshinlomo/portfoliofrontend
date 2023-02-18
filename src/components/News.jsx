import React from 'react'
import { useState, useEffect} from 'react'
import '../App.css'
import Nav from './Nav'




function News() {

  
const [news, setNews] = useState([])
  

  useEffect(()=>{
      
     fetch('http://localhost:3300/api/news', {
      method: "GET",
      mode: "cors",
      
      
     })
    
     .then((res)=>{
      if(!res){
          return "Data not found"
      }else{
          return res.json()
      }
     })
     .then((items)=>{
      if(!items){
        return "no item"
      }else{
      
      setNews(items.news.articles)
      return items.news.articles
      }
      })
     
    },[])


return(
    
  <>
<div className='container'>

<Nav />

<main>




{news?

news.map(news=>
<div className='news-card'>

<div class='news-picture'>
<img src={news.urlToImage}></img>
</div>

<div className='news-text'>
<h2>{news.title}</h2>
<p>{news.content}</p>
<a href={news.url}>{news.url}</a>
<h2>Posted: {news.publishedAt}</h2>
</div>

</div>

):null

}




</main>
{/* Main */}

</div>
{/* Container */}


    </>
  
    
)

  
}

export default News
