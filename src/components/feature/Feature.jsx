import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => { {/* props 로 받음 */}
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div /> {/* 여백을 만들기 위해 */}
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature