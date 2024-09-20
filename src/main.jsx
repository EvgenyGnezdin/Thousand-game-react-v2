import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import styles from './App.module.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App className={styles.app}/>
  </Router>
  ,
)
