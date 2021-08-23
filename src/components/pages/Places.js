import React, {useState, useEffect} from 'react'
import '../../App.css';
import '../../simple.css';
import {Link} from 'react-router-dom';
function Places() {
    useEffect(() =>{
fetchItems();
    },[]);
    const [items, setItems] = useState([], );
    const fetchItems = async () =>{
        const url = `https://scpalbert-eac6.restdb.io/rest/scp?q={}&sort=id`;
        const data = await fetch(url,{method: 'GET',
    headers:{
        'cache-control': 'no-cache',
        'x-apikey': '60c16401f2a01c34b8ed36fb'
    }});
    const scp = await data.json();
    console.log(scp);
    setItems(scp);
}
    return (
        <div>
        <div className='hero-container'>
      <video alt="Background" src='../../videos/Background.mp4' autoPlay loop muted />
      <h1>Local Cuisine</h1>
      <p>Whats in your area</p>
    </div>
    <div className='content'>
        <h2>?</h2>
        {items.map( item =>(
         <Link to={`/places/${item._id}`}><h4 key={item._id}>{item.name}</h4></Link>
        ))}
    </div>
    </div>
    )
}
   

export default Places