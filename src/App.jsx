

import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"


function App() {

  const contact = [
    {
      email: "nitesh@gmail.com",
      address: "kathmandu",
      link: "nitesh.com.np"
    },
    {
      email: "nitesh@gmail.com",
      address: "kathmandu",
      link: "nitesh.com.np"
    },
    {
      email: "nitesh@gmail.com",
      address: "kathmandu",
      link: "nitesh.com.np"
    },
    {
      email: "nitesh@gmail.com",
      address: "kathmandu",
      link: "nitesh.com.np"
    },
  ]

  return (
    <>
      {/* props = properties */}

      {/* parent -> children = data pass object, array  */}
 

      <Header />

      {/* <Contact email= "nitesh@gmal.com" address="kathmandu" link="ram.com.np"/> */}

      <Contact data={contact}/>

      <Footer />

    </>
  )
}

export default App





