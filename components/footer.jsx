import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from 'next/Image';
import mypic from '../public/logoM.png';

const MyImage = (props) => {
  return (
    <Image
      src={mypic}

      width="210px"
      height="70px"
    />
  ) 
}

export default function footer() {
  return (
    <>
    <header>
 
</header>

<main>

</main>

<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">
      <MyImage/>
    </h1>
        
    <h2 class="head">Contact</h2>
    
    <address>
      <br/>
      Please E-Mail us. We will contact you very soon.
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Team</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Aashish Gupta</a>
        </li>
        
        <li>
          <a href="#">Armaan Ansari</a>
        </li>
        
        <li>
          <a href="#">Sion Chowdhary</a>
        </li>
        
        {/* <li>
          <a href="#">Automation</a>
        </li> */}
        
        {/* <li>
          <a href="#">Artificial Intelligence</a>
        </li> */}
        
        {/* <li>
          <a href="#">IoT</a>
        </li> */}
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 BookSqre. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart"> ♥ </span>by Team Kodlars</span>
    </div>
  </div>
</footer>
</>
  );
}