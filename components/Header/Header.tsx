import styles from '../Header/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';


export const Header:FC = () =>{
  
  const navigation = [
    {id: 1, title: "home", path: '/'}, {id: 2, title: "products", path: '/products'}, {id: 3, title: "films", path: '/films'}, {id: 4, title: "users", path: '/users'}
  ]

  const {pathname} = useRouter();

  return(
  <header>
    <nav className={styles.nav}>
      <p className={styles.logo}>TestAPI</p>
      <div className={styles.links}>
        {navigation.map(({id, title, path})=>(<Link key={id} href={path} legacyBehavior ><ul className={styles.link}><a className={pathname === path ? styles.active: styles.links}>{title}</a></ul></Link>))}
      </div>
    </nav>
  </header>) ;
}

