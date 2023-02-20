import React from 'react'
import { useState, useEffect} from 'react'
import '../App.css'






function News() {

  
const [news, setNews] = useState([])
  

  useEffect(()=>{
      
     fetch('https://portbackend.herokuapp.com/api/news', {
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
    
  


<div className='news-main'>


{news?

news.slice(0, 8).map(news=>
<div className='news-card'>

<div class='news-image-holder'>
<img src={news.urlToImage} alt="news" className='news-image'></img>
</div>

<div className='news-text'>
<h2>{news.title}</h2>
<h4>Posted on: {news.publishedAt}</h4>
<button className='read-more-btn'><a href={news.url}>READ MORE</a></button>
</div>



</div>

):null

}


</div>






    
  
    
)

  
}

export default News
