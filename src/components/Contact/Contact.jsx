import { FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { FaPhoneAlt } from 'react-icons/fa'
import { deleteContact } from '../../redux/contactsOps'

import styles from './Contact.module.scss'

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>
          <FaUser /> {name}
        </div>
        <div className={styles.phone}>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
