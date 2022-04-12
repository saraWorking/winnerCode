import React,{useEffect,useRef} from 'react'
import './image.css'

const Image = (props) => {
  const { url, title } = props;
  const isMounted = useRef(true);
  useEffect(() => () => { isMounted.current = false }, [])
  return (
    <div className="image" >
      <img src={url} alt={title} />
      <div>{title}</div>
    </div>
  )
}
export default Image;
