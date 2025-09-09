import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'


// eslint-disable-next-line react-refresh/only-export-components
function Header() {
  return (
    <div className="header">
      <img src="src/react.png" alt="React Logo"></img>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Product name="Product 1" price={100} />
  </StrictMode>,
)
