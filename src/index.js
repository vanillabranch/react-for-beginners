import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
* css를 여기에 이렇게 import 받아버리면, 원하지 않는 태그 등도 전부 css가 적용될수 있어서 사용하지 않는다.
* 좋은 대안은 props로 받아서 처리하는것.
/*import "./styles .css"; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

