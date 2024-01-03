import React from 'react'


function Main(props) {
  const imageData = props.myprop 
  console.log(imageData)
  return (
    
    <div>
        {

          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
    </div>
  )
}

export default Main
