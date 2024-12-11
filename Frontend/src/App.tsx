import { useCallback,  useEffect, useState } from 'react'
import EditForm from './routes/EditForm';
import {  GoogleOAuthProvider } from '@react-oauth/google';
import AuthPage from './routes/AuthPage';
import { IUser } from './types';
import { Route, Routes } from 'react-router-dom';
import GithubLandingPage from './routes/GithubLandingPage';
import { Home } from './routes/Home';
import SubmitForm from './routes/SubmitForm';

function App() {

  const [initialPageLoading, setInitialPageLoading] = useState<boolean>(true)
  const [userInfo, setUserInfo] = useState<IUser | null>(null)
  

 /* if(initialPageLoading){
    return (
      <div className='fixed w-screen h-screen left-0 top-0 flex items-center'>
        <div className='mx-auto flex flex-col'>
          <img src={'/google-form.svg'} className='w-32 h-40 mx-auto' />
          <h1 className='mx-auto w-fit font-bold text-2xl text-purple-400'>GoogleForm</h1>
          <h3 className='mx-auto w-fit text-gray-500 mt-10 text-sm'>Loading....</h3>
        </div>
      </div>
    )
  }else{
    if(0){*/

      return (
        <div className='fixed w-screen h-screen left-0 top-0 flex items-center'>
          <div className='mx-auto'>

            <Routes>
          
              <Route path="/login" element={<AuthPage authTypeToggle={'login'} />} />
              <Route path="/register" element={<AuthPage authTypeToggle={'register'} />} />
              <Route path="/demo" element={<EditForm />} />
              <Route path="/login-github" element={<GithubLandingPage />} />
              <Route path="/" element={<Home/>} />
              <Route path="/demo" element={<EditForm  />} />
              <Route path="/form/:formId/edit" element={<EditForm />} />
              <Route path="/form/:formId/preview" element={<EditForm  />} />
              <Route path="/form/:formId" element={<SubmitForm />} />
              <Route path="*" element={<Home   />} />
            </Routes>
           
          </div>
        </div>
      )
    }
  






export default App
