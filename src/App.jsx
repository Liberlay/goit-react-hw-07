import { useEffect } from 'react'
import { MoonLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'
import { fetchContacts } from './redux/contactsOps'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from './redux/contactsSlice'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

import styles from './App.module.scss'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <MoonLoader />}
      {error && toast.error('Oops an error happened :(')}
    </div>
  )
}
