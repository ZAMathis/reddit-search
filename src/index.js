import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { store } from './App/redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
Note that Reddit has 2 APIs: the official API and an undocumented JSON API. You are welcome to use either APIs but we recommend using the JSON API because it doesn’t require an OAuth workflow. Using the JSON API does have limitations such as no write operations. For the purposes of this project, we find the JSON API adequate.

You can take any Reddit URL, add .json at the end of it, and get JSON. For example, if you want to get the Popular page data in JSON:

Original URL: https://www.reddit.com/r/popular/
JSON URL: https://www.reddit.com/r/popular.json
If you want to search for “cake recipes”:

Original URL: https://www.reddit.com/search?q=cake%20recipes
JSON URL: https://www.reddit.com/search.json?q=cake%20recipes
Notice here you didn’t add .json at the end of the URL. You actually added it before the start of the query string. Refer to this article for a breakdown of the structure of a URL.

The Reddit API will return some user content (comments) in Markdown. You should find a way to display the Markdown in your application.
*/