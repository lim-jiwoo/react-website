import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home"> {/* id: navbar로 이동할 수 있도록*/}
      <div className="gpt3__header-content">
        <h1 className="gradient__text"> Let's Build Something amazing with GPT-3 OpenAI </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ultricies arcu, et ornare purus. Quisque eu molestie nisi. Praesent consequat, eros nec dignissim ultricies, mauris velit venenatis leo.</p>
        
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Yout Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header