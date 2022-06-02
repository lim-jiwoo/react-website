import React from 'react';
import ReactDOM from 'react-dom'; 
/* index.js 파일에서만 필요하다. 
우리 React app을 index.html에 hook할 수 있게 만들어줄 것이다. */
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));