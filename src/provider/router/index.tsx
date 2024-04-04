import React from 'react'
import { RouterProvider as AppRouterProvider } from 'react-router-dom'
import { router } from './router'

export const RouterProvider: React.FunctionComponent = () => {
  return <AppRouterProvider router={router} />
}