import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Videos</li>
            <li className={liStyle}>Use cases</li>
            <li className={liStyle}>About us</li>
            <li className={liStyle}>Contact us</li>
        </ul>
    </div>
    )
}

export default CenterMenu