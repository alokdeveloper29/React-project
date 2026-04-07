import React from 'react'
import { Rnd } from 'react-rnd';
import './macWindow.scss'

const MacWindow = ({children}) => {
  return (
    <Rnd
    default={{
        width: "30vw",
        height: "30vh",
        x: 200,
        y: 230,
    }}
    >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title"><p>alokKumar - zsh</p></div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
