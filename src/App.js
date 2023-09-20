import React from 'react'
import { items } from './data'
import "./App.css"

function App() {
  return (
    <div className='wrapper' >
      <div className='page' >
        <div className='products' >
          {items.map(item => {
            return <div className='product' >
              <div className='image' ><img src={item.image} /> </div>
              <div className='info' >
                <div className='name' >{item.name}</div>
                <div className='price' ><span>{item.offer}%</span> @<span className='amount' > {item.price} INR</span></div>
                <div className='link' ><a href={item.link}>Click Here</a></div>
              </div>
            </div>
          })
          }</div>
      </div>
    </div>
  )
}

export default App

