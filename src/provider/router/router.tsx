import { createBrowserRouter } from 'react-router-dom'
import { AuthLayoutProvider } from '../layout/auth'
import { SignIn } from '@/pages/auth/signIn'
import { SignUp } from '@/pages/auth/signUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayoutProvider />,
    children: [
      { path: '/sign-in', element: <SignIn />  },
      { path: '/sign-up', element: <SignUp />  }
    ]
  }
])