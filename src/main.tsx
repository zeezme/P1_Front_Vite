import React from 'react'
import './index.css'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import '../src/@core/style/general.css'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

if (!container) throw new Error("Could not find root element with id 'root'")

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
