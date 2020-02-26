import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import postListReducer from './reducers/post-list-reducer';

const store = createStore(postListReducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component/>
      </HashRouter>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./App', () => {
    render(<HashRouter>
                  <App />
                </HashRouter>, document.getElementById('react-app-root'));
  });
}
