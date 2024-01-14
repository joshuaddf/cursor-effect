import './App.css'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const App = () => {
 
  // update the position of the cursor
  const [mousePosition, setMousePosisition] = useState({
    x: 0,
    y: 0
  })
  console.log(mousePosition);

  // get the position of the cursor
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosisition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

  })

  // update the style of the cursor
  const [cursor, setCursor] = useState("default")

  const variants =  {
    // default cursor style (size)
   default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16
   },

  //  cursor styles when hovering over the text (size and color)
   text: {
    height: 164,
    width: 164,
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
    backgroundColor: "yellow",
    mixBlendMode: "difference"
   }
  }

  // function when hovering over the text
  const textEnter = () => {
    setCursor("text")
  }

  // function when leaving the text
  const textLeave = () => {
    setCursor("default")
  }

  return (
    <div className='phrase'>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Hello World</h1>
      <motion.div
      variants={variants}
      animate={cursor}
       className='cursor'
      />
    </div>
  )
}

export default App