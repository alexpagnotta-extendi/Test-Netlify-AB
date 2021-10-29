import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderA = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

HeaderA.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderA.defaultProps = {
  siteTitle: ``,
}

export default HeaderA
