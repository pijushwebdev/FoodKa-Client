import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ChefDetails from './components/ChefDetails.jsx'
import Blog from './components/Blog.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'recipes/:id',
        element:<PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
