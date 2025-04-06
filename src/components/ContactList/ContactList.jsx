import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'

import Contact from '../Contact/Contact'

import styles from './ContactList.module.scss'

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
