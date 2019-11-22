import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = { 
    sections: [],
  };

  state = {
    currentIndex: 0
  };

  handleSelection = (index) => {
    this.setState({ currentIndex: index })
  }

  displayItem(section, index, currentIndex) {
    return (
        <li className='accordionItem' key={index}>
          <button onClick={() => this.handleSelection(index)}>{section.title}</button>
          { (index === currentIndex)? <p>{section.content}</p> : null }
        </li>  
      )
  }

  render() {
    return (
    <div>
      <ul className='accordion'>
      {this.props.sections.map((section, idx) =>
          this.displayItem(section, idx, this.state.currentIndex)
        )}
      </ul>
    </div>
    )
  }
}

export default Accordion;