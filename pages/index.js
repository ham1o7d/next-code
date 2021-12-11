import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import TodoList from './TodoList/TodoList';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getItems} from '../redux/Data/Actions.Data'

export default function Home() {
  const listItems= useSelector(state=> state.ListRED.listItems);
  const dispatch= useDispatch()

  useEffect( ()=> {
    console.log('effected once to get items')
    dispatch(getItems)
    console.log
}, [dispatch] )

  console.log(listItems, 'listItems')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href="/followers">Go to Followers</Link>
          <TodoList />
       
      </main>

    </div>
  )
}
