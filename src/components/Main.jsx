import React from 'react'


const Main = (props) => {
  const { data } = props
  return (
    <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
  )
}

export default Main