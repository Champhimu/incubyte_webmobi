import React from 'react'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Expertise from './Expertise'
import Success from './Success'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <Header />
    <Banner />
    {/* <About /> */}
    <About />
    <Expertise />
    <Success />
    <Contact />

    <div className="text-center fs-5">
      <p>&copy; 2023 incubyte</p>
    </div>

    </>
  )
}

export default Home