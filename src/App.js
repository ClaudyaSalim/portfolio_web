// import logo from './logo.svg';
import './App.css';
import selfie from './assets/Claudya_Salim_Selfie.png';
import checkingPhone from './assets/Checking-phone.png';
import devCoding from './assets/Development-coding.png';
import timer from './assets/timer.png';
import zeppto from './assets/zeppto.png';
import estudio from './assets/estudio.png';
import contactPic from'./assets/image-contact.png';



function App() {

  var text1= "I am an undergraduate student in Jakarta pursuing Mobile Application and Technology major in Bina Nusantara (BINUS) University. During the mean time, I also became a Learning and Training staff at Bina Nusantara Computer Club (BNCC). I love to explore greater things and discover more opportunities. ";

  var text2="While going through the journey, I discover many stuffs and learn a lot. I am insterested in technology and so I get to know how to code in languages such as C, Java, and Python." + "\n\n\n" + "I am also insterested in design and I got the chance to practice my designing skills. I have so much fun designing with many tools like Adobe Photoshop, Figma, Canva, and others.";

  var text3="Undergraduate at BINUS University\nMajor in Mobile Application and Technology, School of Computer Science";

  var desc1="An automatic timer I made with Python programming language. It works by running the file timer.py with a Python extension. Input the number of seconds desired and then the program goes on until the time finishes.";

  var desc2="A front-end replica from the website Zeppto with design references from Dribbble. This website is made during my times at BNCC using HTML, CSS, and Javascript with JQuery library as well.";

  var desc3="A mobile app design for education. This application was made for a group work during my times at BINUS University. It is designed using Figma.";
  
  return (
    <div className="App">

      <nav className='navbar-top'>
          <div className="navbar-logo">
              <h3>Claudya's</h3>
          </div>
          <button id="hamburger">
              <img src="./asset/hamburger-icon.png" id="hamburger-icon"></img>
          </button>
          <div className="navbar-right">
              <a href="" aria-selected="true">Home</a>
              <a href="#about-me">About Me</a>
              <a href="#portfolio" id="portofolio-animate">Portofolio</a>
              <button id="contact">
                  <a href="#contact-me">Contact</a>
              </button>
          </div>
      </nav>

      <div id="hero">
          <div className='left'>
              <h1>Hello!</h1>
              <h1 className='normal-text'>My name is</h1>
              <h1 id="name">Claudya Salim</h1>
          </div>
          <div className='right'>
              <img src={selfie} id='selfie'></img>
          </div>
      </div>

      <div id="about-me">
          <h2>About Me</h2>
          <SideBySide className="flip-none" leftContent={text1} rightContent={checkingPhone}></SideBySide>
          <SideBySide className="flip" leftContent={text2} rightContent={devCoding}></SideBySide>
          <table id="education">
            <tr>
                <th>Year</th>
                <th>Education</th>
            </tr>
            <Rows col1="2021-Now" col2={text3}></Rows>
            <Rows col1="2015-2021" col2="Highschool Student at Pelangi Kasih School"></Rows>
          </table>
      </div>
      
      <div id="portfolio">
        <h2>My Works</h2>
        <Project name="Timer (2022)" desc={desc1} img={timer} link="https://github.com/ClaudyaSalim/python-projects/blob/main/timer.py"></Project>
        <Project name="Remake Website Zeppto (2022)" desc={desc2} img={zeppto} link="https://drive.google.com/file/d/1Ad1UrNEjgd7ZKjSfCWif3aabIBRV8IDz/view"></Project>
        <Project name="EStudio Mobile App Design (2021)" desc={desc3} img={estudio} link="https://drive.google.com/file/d/1Ad1UrNEjgd7ZKjSfCWif3aabIBRV8IDz/view"></Project>
        <button><a href='https://github.com'>More at Github</a></button>
      </div>

      <div id="contact-me">
        <div className='contact-container'>
          <h2>Contact me</h2>
          <p className='dark-mode'>Send me an email at <b>claudya.salim@gmail.com</b></p>
          <button className='light-button'><a href='mailto:claudya.salim@gmail.com'>Send</a></button>
        </div>
        <img id="contact-me-img" src={contactPic}></img>
      </div>

      <footer>
        <div className="logo">
            <h3>Claudya's</h3>
        </div>
        <div className="contacts-footer">
            <div className="details-footer">
                <div class="email-footer">
                    <p id="subtitle">Email</p><p>claudya.salim@gmail.com</p>
                </div>
                <div class="phone-footer">
                    <p id="subtitle">Phone</p><p>0895332956736</p>
                </div>
            </div>
            <button id="contact">
                <a href="#contact-me">Contact</a>
            </button>
        </div>
        <hr></hr>
        <nav id="navbar-footer">
            <div class="nav-left">
                <p>Copyright © 2022. All rights reserved</p>
            </div>
            <div class="navbar-right">
                <a href="#hero">Home</a>
                <a href="#about-me">About Me</a>
                <a href="#portfolio">Portofolio</a>
                <a href="#contact-me">Contact</a>
            </div>
        </nav>
      </footer>

    </div>
    
  );
}

function SideBySide({className, leftContent, rightContent}){
  return(
    <div className={className}>
      <p>{leftContent}</p>
      <img src={rightContent}></img>
    </div>
  );
}

function Rows({col1, col2}){
  return(
    <tr>
      <td>{col1}</td>
      <td>{col2}</td>
    </tr>
  );
}

function Project({name, desc, img, link}){
  return (
    <div className='flip-none'>
      <div className='project-details'>
        <h3 className='highlight'>{name}</h3>
        <p>{desc}</p>
        <button><a href={link}>View More</a></button>
      </div>
      <span className='project-image'>
        <img src={img}></img>
      </span>
    </div>
  );
}

export default App;
