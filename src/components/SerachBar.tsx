import React, { useState } from 'react'

const SerachBar = ({search}:any) => {
  const handleFormSubmit =(event:any)=>{
    event.preventDefault()
    search(searchValue)
  }
  const [searchValue,setSearchValue]=useState("")
  const handleValue = (event:any)=>{
    setSearchValue(event.target.value)
  }
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <form onSubmit={handleFormSubmit} className="d-flex" role="search" >
      <input value={searchValue} onChange={handleValue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </nav>
      </div>
    )
}

export default SerachBar
