import React from 'react'
import './component.css'

export default function Header({isLoggedIn, setIsLoggedIn, history}) {
    const clearLocalStorage = () => {
        localStorage.clear()
        setIsLoggedIn(false)
        history.push('/')
    }


    return (
        <div className="header">
            {isLoggedIn && <button className="logout-button" onClick={clearLocalStorage}>Log Out</button>}
            <h1>In a Pinch</h1>
            <h2>Use what you have on hand to make something exciting!</h2>
            <span className="Julia-quote">"No one is born a great cook, one learns by doing." -Julia Child</span>
        </div>
    )
}
