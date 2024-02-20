import ImageItem from "./imageItem"
const ImageList = ({imagesPlaceholder}:any) => {
  return (
    <div className="container d-flex" style={{flexWrap:"wrap"}}>
      {imagesPlaceholder.map((value:any,idx:any)=>{
        return <ImageItem value={value} key={idx} />
      })}
    </div>
  )
}

export default ImageList
