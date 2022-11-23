'use client'

import "../styles/globals.scss"
import NavBar from "./components/NavBar"

import { Provider } from 'react-redux'
import { store } from "../redux/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>

    <html>
      <head />

      <body>
        <NavBar/>
        {children}
        </body>
    </html>
    </Provider>

  )
}
