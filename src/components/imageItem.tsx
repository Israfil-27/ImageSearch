import React from 'react'

const imageItem = ({value,idx}:any) => {
    console.log(value);
    
  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" style={{width:"290px",height:"200px"}} src={value.urls.small} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{value.alt_description}</h5>
    <p className="card-text">{value.description}</p>
    <a href={value.links.download} className="btn btn-primary">zoom</a>
    </div>
    </div>
  )
}

export default imageItem
