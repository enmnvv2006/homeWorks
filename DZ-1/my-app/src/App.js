function Title () {
  
  return (
    <p>title</p>
  )
}

function Header () {
  
  return (
    <>
      <div>
      <h1>Header</h1>
      </div>
      <Title/>
    </>
  )
}

function Content () {
  
  return (
    <>
      <div>
      <h1>Content</h1>
      </div>
      <Title/>
    </>
  )
}

function Footer () {

  return (
    <>
      <div>
      <h1>Footer</h1>
      </div>
      <Title/>
    </>
  )
}


function App() {
  return (
    
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;