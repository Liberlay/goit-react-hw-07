import { useSelector } from 'react-redux'
import { selectNameFilter } from '../../redux/filtersSlice'
import { selectContacts } from '../../redux/contactsSlice'

import Contact from '../Contact/Contact'

import styles from './ContactList.module.scss'

export default function ContactList() {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={styles.container}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
