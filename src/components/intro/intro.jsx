import "./intro.scss"
import Typewriter from 'typewriter-effect'

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man5.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Shehzor Memon</h1>
          <h3><Typewriter onInit={(typewriter)=> {typewriter.typeString("Developer")
          .pauseFor(50)
          .deleteAll()
          .typeString("Content Creator")
          .start();
        }}
        />
        </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}