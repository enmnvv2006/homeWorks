import About from "../components/About";
import Title from "../components/Title";

function MainPage() {
    return (
      <div>
          <About info={{titel: "Some Title", body:"Some body"}}/>
          <Title title="Hello world"/>
      </div>
    );
  }
  
  export default MainPage;