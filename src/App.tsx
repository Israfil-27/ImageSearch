import React, { useState } from 'react';
import SerachBar from './components/SerachBar';
import AxiosSearch from './components/axios';
import ImageList from './components/imageList';

function App() {
  const [image,setImage]=useState([])
  const handleClick= async (value:string)=>{
    const result = await AxiosSearch(value)
    setImage(result)
  }
  return (
    <div>
      <SerachBar search={handleClick}/>
      <ImageList imagesPlaceholder={image}/>
    </div>
  );
  }

export default App;






