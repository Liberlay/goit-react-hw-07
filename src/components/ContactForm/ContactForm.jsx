import { useId } from 'react'
import { object, string } from 'yup'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsOps'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import styles from './ContactForm.module.scss'

export default function ContactForm() {
  const defaultValues = {
    name: '',
    number: '',
  }

  const validationSchema = object({
    name: string().min(3, 'Too small!').max(50, 'Too long').required('Required'),
    number: string().min(3, 'Too small!').max(50, 'Too long').required('Required'),
  })

  const nameFieldId = useId()
  const numberFieldId = useId()

  const dispatch = useDispatch()

  const onSubmit = (values, actions) => {
    dispatch(addContact(values))
    actions.resetForm()
  }

  return (
    <div className={styles.container}>
      <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <Field id={nameFieldId} className={styles.input} type="text" name="name" />
            <ErrorMessage className={styles.error} name="name" component="p" />
          </div>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="number">
              Number
            </label>
            <Field id={numberFieldId} className={styles.input} type="tel" name="number" />
            <ErrorMessage className={styles.error} name="number" component="p" />
          </div>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  )
}
