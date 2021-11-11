import React from 'react'
import LoginPage from './LoginPage'
import '../css/main.css'
import First from './First'

function LandingPage() {
    return (
        <div className="landing">
            <First />
            <div className="landing__second">
                <LoginPage />
            </div>
        </div>
    )
}

export default LandingPage
