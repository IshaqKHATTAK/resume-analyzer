import React from 'react'

const First = ({person_image}) => {
  return (
    <>
    {person_image.map( (ele,indx) => (
       <img
       key={indx}
       src={ele.imagePath}
       alt={ele.name}
      />
    ) )}
    <p>This is ishaq</p>
    </>
  )
}

export default First
