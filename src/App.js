import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import { map } from 'async';

function App() {

    return (
        <div className="app">
            <AppHeader />
            {/* <TattooItem /> */}
          
            <img class="w3-image" src="/images/architect.jpg" alt="Architecture" width="1500" height="800"></img>

            <div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min">
        <b>BR</b></span> <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
  </div>

  <div class="w3-container w3-padding-32" id="projects"></div>
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
    <h4 class="w3-col l3 m6 w3-margin-bottom"></h4>



   
 
    <div class="w3-container w3-padding-32" id="about"> </div>
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

   

</div>


    );
}

export default App;
