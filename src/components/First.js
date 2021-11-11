import React from 'react'
import skel from '../images/landingimage.svg'

function First() {
    return (
        <div className="landing__first">
                <div className="landing__first-container">
                    <img src={skel} alt="danger" className="landing__image" />
                </div>
                <div className="landing__footer">
                      <h2 className="landing__footer--big">Turn your ideas into reality.</h2>
                      <p className="landing__footer--small">Start for free and get attractive offers from the community</p>
                </div>
                
        </div>
    )
}

export default First
