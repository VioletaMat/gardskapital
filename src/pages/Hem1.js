import React from 'react';
import {Navbar} from '../components/Navbar'
import homeheder from '../assets/images/homeheder.png'

function Hem1() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}  >
      <Navbar/>
      <main>
        <section>
          <div className="position-fluid text-center bg-light">
            <img src={homeheder} className="img-fluid" alt="Responsive image"></img>
          </div>
         </section>
      </main>
    </div>
  );
}

export default Hem1;