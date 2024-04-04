import React from 'react'
import { RouterProvider } from './provider/router'
import { ThemeProvider } from './provider/themProvider'


export const App: React.FunctionComponent = () => {
  return (
   <ThemeProvider storageKey="explore-theme" defaultTheme="dark">
     <RouterProvider />
   </ThemeProvider>
  )
}