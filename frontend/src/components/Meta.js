import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To SweetCream Arts',
  description: 'We sell homemade arts and crafts',
  keywords: 'arts, crafts, homemade, handmade, artistic',
}

export default Meta