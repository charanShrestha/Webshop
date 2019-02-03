import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <img className="aboutimg" src="./images/ab1.jpg" alt="imageAbout" />
        <img className="aboutimg" src="./images/IMG_5716.jpg" alt="imageAbout" />
      </div>
    );
  }
}

export default About;
