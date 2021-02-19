import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
      
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Van Darkholme"
        avatar="https://pbs.twimg.com/profile_images/3764746483/443a214f86755e9488303b561a53ed6a_400x400.jpeg"
        excerpt="There's a fine line between sex sound and taking a dump."
      />
      <User
        username="Billy Herrington"
        avatar="https://i.redd.it/2wu0kqfqibk41.jpg"
        excerpt="Let us remember these timeless words: Ass♂we♂can."
      />
    </Container>
  )
}