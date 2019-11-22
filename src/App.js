//import React from 'react';
import React, { Component } from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
//import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb'
// import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';



// make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )


const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];


class App extends Component {
  render() {
    return (
      <main className='App'>
        <Tabs tabs={tabsProp}/>
       {/* <Bomb />
        <HelloWorld />
        <Counter count={123} step={2} />
         <TheDate />
          <Split className='left' flexBasis='2'>
           This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
           { make another tooltip directly inside the App 
           <Tooltip message='one more tooltip message'>
             Necessitatibus?
           </Tooltip>
         </Split>
         <Split className='right'>
          This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        </Split>  */}
        {/* <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/> */}
      </main>
     );
  }
}

export default App