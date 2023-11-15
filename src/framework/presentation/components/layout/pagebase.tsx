import { Drawer } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect } from 'react';
import IcBook from '../../assets/IcBook';
import IcBookmark from '../../assets/IcBookmark';
import IcDashboard from '../../assets/IcDashboard';
import IcLogo from '../../assets/IcLogo';
import IcNotification from '../../assets/IcNotification';
import IcPeople from '../../assets/IcPeople';
import IcSetting from '../../assets/IcSetting';
import Navigation from '../../components/navigation';
import './styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserStorage, removeUserStorage } from '../../../events/UserStorage';
import { useAppDispatch } from '../../store/hooks';
import { logOut } from '../../../slices/AuthSlice';

export default function PageBase({children}: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [opened, setOpened] = React.useState(false);
  const matches = useMediaQuery('(min-width: 56.25em)');
  const item = [
    { label: 'Dashboard', icon: <IcDashboard/>, url: '/dashboard' },
    { label: 'Notification', icon: <IcNotification/>, url: '/notification' },
    { label: 'Bookmark', icon: <IcBookmark/>, url: '/bookmark' },
    { label: 'People', icon: <IcPeople/>, url: '/people' },
    { label: 'Setting', icon: <IcSetting/>, url: '/setting' },
  ];
  const noAuthRoute = ['/login'];
  const noAuth = noAuthRoute.some((route) => pathname.match(route));

  useEffect(() => {
    getUserStorage().then(user => {
      if(!user){
        navigate('/login'); 
      }else{
        navigate('/dashboard');
      }});
  },[]);

  if(noAuth){
    return(
      <main>
        {children}
      </main>
    );
  }

  const logout = () => {
    removeUserStorage();
    dispatch(logOut());
    navigate('/login');
  };
  
  return (
    <main>
      <header className={!matches ? 'mobile' : ''}>
        <span onClick={() => !matches && setOpened(true)}><IcBook/></span>
        <IcLogo/>
      </header>
      <section className={!matches ? 'mobile' : ''}>
        {matches ?
          <Navigation item={item} matches={true} logOut={() => logout()} />
          :
          <Drawer opened={opened} size={'xs'} onClose={() => setOpened(false)} title="Main Mennu">
            <Navigation item={item} matches={false} logOut={() => logout()} />
          </Drawer>        
        }
        <article>
          {children}
        </article>
      </section>
      {/* <footer>
            footer
      </footer> */}
    </main>
  );
}

type Props = {
    children: string | JSX.Element | JSX.Element[]
}