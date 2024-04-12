function About(props) {
    return (
      <div>
          {props.info.titel},
          {props.info.body}
      </div>
    );
  }
  
  export default About;