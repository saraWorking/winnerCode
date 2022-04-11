import React from 'react'
import './image.css'

export default function Image(props) {
    const {url,title} = props;
  return (
 <div className="image" >
    <img src={url} alt={title}/>
    <div>{title}</div>
  </div>
  )
}
