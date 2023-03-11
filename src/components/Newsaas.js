import React from 'react'
import '../styles/Newsaas.css'

const Newsaas = () => {
  return (
    <div className='newsaas-main'>

    <div className='newsaas-image-holder'>
    <div className='project-one'>
    <h3>ALL-PURPOSE CRM(Coming soon...)</h3>
    <img src="/open_crm2.png" alt="portfolio project name: All-purpose crm" className='newsaas-image' />
    <button><a href="#">VIEW SITE</a></button>
    </div>

    <div className='project-two'>
    <h3>YouTube Channel Crawler</h3>
    <img src="/youtube_search.png" alt="portfolio project name: All-purpose crm" className='newsaas-image' />
    <button><a href="https://ytcrawler.netlify.app/">VIEW SITE</a></button>
    </div>

    </div>
    </div>
    
  )
}

export default Newsaas