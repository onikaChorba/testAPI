import styles from '../Header/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Header () {
  
  const navigation = [
    {id: 1, title: "home", path: '/'}, {id: 2, title: "products", path: '/products'},{id: 3, title: "quotes", path: '/quotes'}
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

