'use client'

import "../styles/globals.scss"
import NavBar from "./components/NavBar"

import { Provider } from 'react-redux'
import { store } from "../redux/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>

    <html lang="en">
      <head>
      <meta
      name="description"
      content="A little project for a Selection Challenge made it by Roger Pérez"
    />
    <meta charset="utf-8" />
      <meta  property="og:title" content="Star Wars Character App "/>
      <meta property="og:image" content="https://i.ebayimg.com/images/g/tMkAAOSwRnNdYnE7/s-l500.jpg"/>
      <meta property="og:description"
    content="A little project for a Selection Challenge made it by Roger Pérez"/>
    <title> Star Wars | characters</title>

      </head>

      <body>
        <NavBar/>
        {children}
        </body>
    </html>
    </Provider>

  )
}
