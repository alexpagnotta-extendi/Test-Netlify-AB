import * as React from "react"
import { Link } from "gatsby"

const HeaderB = ({siteTitle}) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        backgroundImage: `url('https://www.svgbackgrounds.com/wp-content/uploads/2021/05/sun-tornado-orange-spinning-background.jpg')`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `5rem 1.0875rem`,
      }}
    >
      <h1 style={{ marginLeft: '600px' }}>
        <Link
          to="/"
          style={{
            color: `Black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default HeaderB
