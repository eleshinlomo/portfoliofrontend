import React from 'react'
import '../styles/Projects.css'

const Newsaas = () => {
  return (
    <div className='project-main'>

    <div className='project-card'>
    <h3>ALL-PURPOSE CRM(Coming soon...)</h3>
    <div className='project-image-holder'>
    <img src="/open_crm2.png" alt="portfolio project name: All-purpose crm" className='newsaas-image' />
    </div>
    <span className='tech-stack'>Tech Stack: React, Node js , Express js, and MongoDB </span>
    <button><a href="#">VIEW SITE</a></button>
    </div>

    <div className='project-card'>
    <h3>YouTube Channel Crawler</h3>
    <div className='project-image-holder'>
    <img src="/youtube_search.png" alt="portfolio project name: All-purpose crm" className='newsaas-image' />
    </div>
    <span className='tech-stack'>Tech Stack: React, Google Apis </span>
    <button><a href="https://ytcrawler.netlify.app/">VIEW SITE</a></button>
    </div>

    </div>
    
    
  )
}

export default Newsaas