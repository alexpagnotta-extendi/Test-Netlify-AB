import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import HeaderA from "../components/headerA"
import HeaderB from "../components/headerB"

const Header = () => {

  if(typeof window === "undefined") return null
  const randomize = (myArray) => 
    myArray[Math.floor(Math.random() * myArray.length)]

  return <div>
    {randomize([<HeaderA siteTitle={'ciao'} />,<HeaderB siteTitle={'ciao utente B'} />])}
  </div>
}


export default Header
