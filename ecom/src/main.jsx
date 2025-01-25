import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import TopBarProgress from 'react-topbar-progress-indicator';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

TopBarProgress.config({
  barColors: {
    0: "#1890ff",
  },
  barThickness: 4,
  shadowBlur: 5,
});

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)
