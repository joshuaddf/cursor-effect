import './App.css'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const App = () => {
 
  const [mousePosition, setMousePosisition] = useState({
    x: 0,
    y: 0
  })
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosisition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

  })

  const [cursor, setCursor] = useState("default")

  const variants =  {
   default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16
   },
   text: {
    height: 164,
    width: 164,
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
    backgroundColor: "yellow",
    mixBlendMode: "difference"
   }
  }

  const textEnter = () => {
    setCursor("text")
  }

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