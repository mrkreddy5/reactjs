import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// function Menu() {
//   let menus = ["home","about us", "contact us"];
//   return (
//   <header>
//     <ul>
//       <li>{menus[0]}</li>
//       <li>{menus[1]}</li>
//       <li>{menus[2]}</li>
//     </ul>
//   </header>
//   );
// }


class Menu extends React.Component {
  render (){
  let menus = ["home","about us", "contact us"];
  return(
  <header>
    <ul>
      <li>{menus[0]}</li>
      <li>{menus[1]}</li>
      <li>{menus[2]}</li>
    </ul>
  </header>
  );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu /> );
