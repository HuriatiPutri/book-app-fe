import React from 'react';
import { Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Menu } from '../../../../business/domain/Menu';
import IcLogout from '../../assets/IcLogout';
import './styles.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
function Navigation(props: { item: Menu[], matches: boolean, logOut: Function }){

  return (
    <aside>
      <nav>
        <ul>
          {props.item.map((item, index) => (
            <li key={index} className={!props.matches ? 'mobile' : ''}>
              <Link to={item.url} className='link'>
                {item.icon}
                {!props.matches && item.label}
              </Link>
            </li>
          ))}
          <li className={!props.matches ? 'mobile' : ''}>
            <Link to={'/profile'} className='link'>
              <Avatar>AD</Avatar>
              {!props.matches && 'Profile'}
            </Link>
          </li>
          <li className={!props.matches ? 'mobile' : ''} onClick={() => props.logOut()}>
            <div className='link'>
              <IcLogout />
              {!props.matches && 'Logout'}
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Navigation;
