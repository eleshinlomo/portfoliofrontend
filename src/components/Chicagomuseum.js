import React from 'react'
import {useState, useEffect} from 'react'

const Chicagomuseum = () => {
const [artworks, setArtworks] = useState([])

useEffect(()=>{
    fetch('https://portbackend.herokuapp.com/api/chicagomuseum', {
        method: "GET",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        "config": {
            "iiif_url": "https://www.artic.edu/iiif/2",
        }
    })

    .then((res)=>{
        if(!res){
            console.log("no data found")
        }else{
            return res.json()
        }
    })
    .then((result)=>{
        console.log(result.items.data)
        setArtworks(result.items.data)
        return result.items.data
        
    })
}, [])

  return (
    <div className='chicago-main'>
    
{artworks?
        artworks.slice(0, 8).map(artwork=>

        <div key={artwork.id} className="chimuseum-card">

        <div key={artwork.id}>
        <img src={artwork.thumbnail.lqip} alt={artwork.thumbnail.alt_text} className="museum-image"/>
        <h4>{artwork.thumbnail.title}</h4>
        </div>
        <h4><span className='museum-item'>Artwork Classification</span>: {artwork.classification_titles}</h4>
        <h4><span className='museum-item'>Artwork Type</span>: {artwork.artwork_type_title}</h4>
        <h4><span className='museum-item'>Artist</span>: {artwork.artist_titles}</h4>
        
        </div>
        ):null

        }
           
    </div>
  )
}

export default Chicagomuseum