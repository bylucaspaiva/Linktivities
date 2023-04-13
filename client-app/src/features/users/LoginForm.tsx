import { Form, Formik } from 'formik'
import React from 'react'
import MyTextInput from '../../app/common/form/MyTextInput'
import { Button } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
    >
      {({handleSubmit}) => (
        <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
          <MyTextInput placeholder='Email' name='email'/>
          <MyTextInput placeholder='Password' name='Password' type='password'/>
          <Button positive content='Login' type='submit' fluid />
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm