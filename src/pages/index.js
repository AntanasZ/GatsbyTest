import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: `#5beb34`}}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="I have no sexual relations with that woman"/>
      <p style={{ color: `#00fbff`}}>This is fake news</p>
      <img src="https://media.tenor.com/images/3c04ce7ea3e696ba0502ad0b405ee4fb/tenor.gif" alt="RACCOON" width="1000" height="1000" />
      
    </div>
}
