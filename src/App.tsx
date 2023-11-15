import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './framework/presentation/pages/home';
import Bookmark from './framework/presentation/pages/Bookmark';
import PageBase from './framework/presentation/components/layout/pagebase';
import Login from './framework/presentation/pages/Login';
import AuthContextProvider from './framework/presentation/context/AuthProvider';
import Auth from './framework/presentation/components/Auth';
import NoAccess from './framework/presentation/pages/NoAccess';

export default function App() {
  const routes =
    {
      roleName: 'user',
      permitions:
      [{
        path: '/dashboard',
        icon: 'IcDashboard',
        label: 'Dashboard',
        element: <Home />
      },
      {
        path: '/bookmark',
        icon: 'IcBookmark',
        label: 'Bookmark',
        element: <Bookmark />
      },
      {
        path: '/people',
        icon: 'IcPeople',
        label: 'People',
        element: <Bookmark />
      },
      {
        path: '/notification',
        icon: 'IcNotification',
        label: 'Notification',
        element: <Bookmark />
      },
      {
        path: '/setting',
        icon: 'IcSetting',
        label: 'Setting',
        element: <Bookmark />
      }]
    };

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PageBase>
          <Routes>
            <Route index path='login' element={<Login />} />
            <Route path="noAccess" element={<NoAccess />} />
            <Route element={<Auth allowedRoles={[routes.roleName]} />}>
              {
                routes.permitions.map((permition, index) => {
                  return(
                    <Route key={index} path={permition.path} element={permition.element} />
                  );
                })
              }
            </Route>
          </Routes>
        </PageBase>
      </AuthContextProvider>
    </BrowserRouter>
  );
}