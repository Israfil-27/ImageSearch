import React from 'react'
import axios from "axios";

const AxiosSearch = async (value:string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
      Authorization:"Client-ID QEvW64hYJTvHinefUAf6adLl57IjpWqK36Y-olIJboI",
    },
    params:{
      query:value
    }
  })
  return response.data.results
}

export default AxiosSearch
