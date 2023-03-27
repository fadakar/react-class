import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import NotFoundImage from '../../assets/images/404.webp'
import styles from './not-found.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles['not-found']}>
      <Helmet>
        <title>React Case Study - Not Found</title>
        <meta name="description" content="lkjsdf kdsaf kdsg gfsd " />
      </Helmet>
      <img src={NotFoundImage} alt="Not Found" />
      <p>Your Page is not reached  <Link to={'/'}>Home</Link> </p>
    </div>
  )
}

export default NotFoundPage