import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {
    id: "1",
    message: "Hi, how ary you?",
    likes: "15",
    image:
      "https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg",
  },
  {
    id: "2",
    message: "It`s my first post",
    likes: "15",
    image:
      "https://pbs.twimg.com/profile_images/1119181254002466818/wkr0oSKZ_400x400.jpg",
  },
];

let dialogsData = [
  { id: "1", name: "Masha" },
  { id: "2", name: "Artem" },
  { id: "3", name: "Lena" },
  { id: "4", name: "Oleg" },
  { id: "5", name: "Sveta" },
  { id: "6", name: "Denys" },
];

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How is you IT course?" },
  { id: "3", message: "Yo" },
  { id: "4", message: "Yo" },
  { id: "5", message: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
