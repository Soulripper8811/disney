import React from 'react'

const HeaderItems = ({name,Icon}) => {
  return (
    <div className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8">
        <Icon/> 
        <h2 className="">{name}</h2>
    </div>
  )
}

export default HeaderItems