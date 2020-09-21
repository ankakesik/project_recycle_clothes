import React, {useState, useEffect} from "react";
import { data } from "autoprefixer";
const API = "http://localhost:3000";


export default function Page() {

    const handleClick = e => {
    setCurrent(e.target.name)
    }

    const getFundation = () => {
    posts && posts?.find(el => el.id == current)
    }

    const [posts, setPosts] = useState(null);
    const [current, setCurrent] = useState(1)
    
    useEffect(() => {
    
    
    fetch(`${API}/fundations`)
    .then(response => response.json())
   
    .then(data => {
        console.log(data);
        setPosts(data)
    })
    .catch(error => {
        console.log(error);
    }); 
    
    }, []);
    

    return(
    
       
       <Pages />
      
        
    )

}
const Pages = ({posts, getFundation, handleClick}) => {

    return(
        <>
        {getFundation}
        {posts?.map(item => (
           <>
            <button key={item.id} name={item.id} onClick={handleClick}>{item.name}</button>
          
           </>
        ))} 
        </>
       
    )

}