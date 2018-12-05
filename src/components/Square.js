import React, { Component } from 'react';
import '../componentStyle/Cstyle.css'

class Square extends Component {



    render() {
      return (
        <button 
            class = "square" 
            onClick={() => this.props.onClick()}>  
          {this.props.value}
        </button>
      );
    }
  }

  export default  Square;