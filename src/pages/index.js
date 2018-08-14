import React from "react"
import Helmet from 'react-helmet'

export default () => 
    <div>
      Gatsby v2 Starter
      <Helmet
      title="Gatsby v2 Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    </div>
