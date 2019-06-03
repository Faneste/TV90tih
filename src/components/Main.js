import React from 'react';
// youtube API
import YouTube from 'react-youtube';
// tv image
import tv from '../images/tv.png';
// ei nis logo
import eiNisLogo from '../images/eiNisLogo.png';
// tv noise
import tvNoise from '../images/tvNoise.gif';
// tv static sound
import staticSound from '../images/staticSound.mp3';
// tv tutorial image
import tvTutorial from '../images/tvTutorial.png';
// tvChannelBackground image
import tvChannelBackground from '../images/tvChannelBackground.png';
// remote image
import remote from '../images/remote.png';
// background image default
import backgroundDefault from '../images/backgroundDefault.jpg';
// background image one
import backgroundOne from '../images/backgroundOne.jpg';
// background image two
import backgroundTwo from '../images/backgroundTwo.jpg';
// changeChannelButtonImage image
import changeChannelButtonImage from '../images/changeChannelButtonImage.png';

import { filmovi, crtaniFilmovi, emisije, muzika, reklame, serije, sport } from '../constants';

const OPTIONS = {
	height: '500',
	width: '600',
	playerVars: {
	  // https://developers.google.com/youtube/player_parameters
	  autoplay: 1,
	  controls: 0,
	  disablekb: 1,
	  enablejsapi: 1,
	  iv_load_policy: 3,
	  loop: 1,
	  modestbranding: 1,
	  start: 25,
	  suggestedQuality: "small"
	}
  };

class Main extends React.Component {
  constructor(props) {
	super(props);
	
    this.state = {
      playinChannelId: "",
      // video title
      videoTitle: null,
      // background variables
      backgrounds: [ backgroundDefault, backgroundOne, backgroundTwo],
      // background change order
      backgroundOrder: 1,
      // change channel image button rotate degrees
      changeChannelImageRotate: 0,
      // effects turnon/off boolean
      effectsToggle: true,
      // volume
      volume: "50",
	  filmovi,
	  crtaniFilmovi,
	  emisije, 
	  muzika, 
	  reklame, 
	  serije, 
	  sport
	};
	
    this.changeChannel = this.changeChannel.bind(this);
    this.videoReady = this.videoReady.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
    this.youTubeLink = this.youTubeLink.bind(this);
    this.effectsToggle = this.effectsToggle.bind(this);
    // space function for changing channel
    this.spaceKey = this.spaceKey.bind(this);
    // ei nis logo function
    this.eiNisLogo = this.eiNisLogo.bind(this);
    // background change function
    this.backgroundChange = this.backgroundChange.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.spaceKey, false);
  }

  // change channel by pressing space
  spaceKey(event){
    if(event.keyCode === 32) {
      console.log("esc");
      this.changeChannel();
    }
  }

  // ei nis logo play
  eiNisLogo() {
    console.log("ei nis");
    this.setState({
      playinChannelId: "MeG_3URH72o"
    })
    // hide tutorial image if no channel is playing at start
    document.getElementsByClassName('tv__tutorialImage')[0].style.display = "none";

  }

  videoReady(event) {
    // youtube title of the video
    let title = event.target.getVideoData().title;
    // setting title into state
    this.setState({
      videoTitle: title
    })
    event.target.setVolume(this.state.volume);
  }

  videoEnd(event) {
    // loops the video when it ends
    event.target.playVideo();
  }

  // changing the volume
  volumeChange(event) {
    this.setState({
      volume: event.target.value
    })
    // this.videoReady();
  }

  // clicking the youtube button to go to youtube page
  youTubeLink() {
    window.open(
      'https://www.youtube.com/watch?v=' + this.state.playinChannelId,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  // toggle function for effects
  effectsToggle(event) {
    this.setState(prevState => ({
      effectsToggle: !prevState.effectsToggle
    }));
    // console.log(this.state.effectsToggle);
    event.target.classList.toggle('buttonEffectContainerButton__effectsToggle');
  }

  // change background
  backgroundChange() {
    this.setState(prevState => ({ backgroundOrder: this.state.backgroundOrder + 1 }));
    document.body.style.backgroundImage = 'url(' + this.state.backgrounds[this.state.backgroundOrder] + ')';
    if( this.state.backgroundOrder === 2 ) {
      this.setState(prevState => ({ backgroundOrder: 0 }));
    }
  }

  ////////////// changing/toggling the category
  changeCategory(event) {

    // toggling category button styling
    event.target.classList.toggle('remote__buttonsContainer__button__colorToggle');

    // button category name/value
    let categoryValue = event.target.value;
    // storing state into variable so that I can change the boolean and put back the state
    let { filmovi } = this.state;
    let { serije } = this.state;
    let { crtaniFilmovi } = this.state;
    let { muzika } = this.state;
    let { emisije } = this.state;
    let { sport } = this.state;
    let { reklame } = this.state;
    // toggling the boolean of true false/selected or not
    if(categoryValue === "filmovi") {
      filmovi[0].boolean = filmovi[0].boolean = !filmovi[0].boolean;
      this.setState(prevState => ({ filmovi: filmovi }));
    }
    if(categoryValue === "serije") {
      serije[0].boolean = serije[0].boolean = !serije[0].boolean;
      this.setState(prevState => ({ serije: serije }));
    }
    if(categoryValue === "crtaniFilmovi") {
      crtaniFilmovi[0].boolean = crtaniFilmovi[0].boolean = !crtaniFilmovi[0].boolean;
      this.setState(prevState => ({ crtaniFilmovi: crtaniFilmovi }));
    }
    if(categoryValue === "muzika") {
      muzika[0].boolean = muzika[0].boolean = !muzika[0].boolean;
      this.setState(prevState => ({ muzika: muzika }));
    }
    if(categoryValue === "emisije") {
      emisije[0].boolean = emisije[0].boolean = !emisije[0].boolean;
      this.setState(prevState => ({ emisije: emisije }));
    }
    if(categoryValue === "sport") {
      sport[0].boolean = sport[0].boolean = !sport[0].boolean;
      this.setState(prevState => ({ sport: sport }));
    }
    if(categoryValue === "reklame") {
      reklame[0].boolean = reklame[0].boolean = !reklame[0].boolean;
      this.setState(prevState => ({ reklame: reklame }));
    }
  }

  ////////////// changing the channel
  changeChannel() {
    // hide tutorial image
    document.getElementsByClassName('tv__tutorialImage')[0].style.display = "none";

    // effects functions if the effects are true/enabled
    if ( this.state.effectsToggle === true ) {
      // start tv noise gif for 2 seconds with the setTimeout func
      document.getElementsByClassName('tv__noise')[0].style.display = "block";
      setTimeout(function() {
        document.getElementsByClassName('tv__noise')[0].style.display = "none";
      }, 1200);
      // start static sound effects
      var sound = document.getElementsByClassName("tv__staticSoundEffects")[0];

      sound.volume = 0.006;
      sound.play();

      setTimeout(function() {
        sound.pause();
      }, 1200);
    }
    // button animation/rotation
    // gradially increasing rotate angle by 10
    let rotateAngle = this.state.changeChannelImageRotate;
    rotateAngle = rotateAngle + 10;
    let buttonImage = document.getElementsByClassName('remote__changeChannelButtonImage__container__image')[0];
    buttonImage.setAttribute('style','transform:rotate(' + rotateAngle + 'deg)');
    this.setState({
      changeChannelImageRotate: rotateAngle
    })

    // creating arrays for channels
    let allChannelsPool = [];
    let finalChannel;
    // merging true array into allChannelsPool
    if (this.state.filmovi[0].boolean === true) { allChannelsPool.push(this.state.filmovi[1]);}
    if (this.state.serije[0].boolean === true) {allChannelsPool.push(this.state.serije[1]);}
    if (this.state.crtaniFilmovi[0].boolean === true) {allChannelsPool.push(this.state.crtaniFilmovi[1]);}
    if (this.state.muzika[0].boolean === true) {allChannelsPool.push(this.state.muzika[1]);}
    if (this.state.emisije[0].boolean === true) {allChannelsPool.push(this.state.emisije[1]);}
    if (this.state.sport[0].boolean === true) {allChannelsPool.push(this.state.sport[1]);}
    if (this.state.reklame[0].boolean === true) {allChannelsPool.push(this.state.reklame[1]);}
    // merging an allChannelsPool array
    let merged = [].concat.apply([], allChannelsPool);
    // looping allChannelsPool and putting it in finalChannel let
    for (let i = 0; i < merged.length; i++) {
      finalChannel = Math.floor(Math.random() * merged.length) + 0;
    }
    // setting state for the currently playing video id
    this.setState({
      playinChannelId: merged[finalChannel]
    })
  }

  render() {

      return (
        <div className="mainContainer">
          {/* tv */}
          <div className="tv">

            {/* hidden element for space button keypress change channel */}
            <input className="spaceInput"/>

            {/* youtube api with options */}
            <div className="youtubePlayerContainer">
              <YouTube
                className="youtubePlayer"
                videoId={this.state.playinChannelId}
                opts={OPTIONS}
                onReady={this.videoReady}
                onEnd={this.videoEnd}
                onStateChange={this.videoReady}
              />
            </div>
            {/* tv images and buttons */}
            <div className="tv__tvChannelBackground">
              <h3 className="tv__tvChannelBackground__title">OPIS KANALA</h3>
              <h3 className="tv__tvChannelBackground__subTitle">{this.state.videoTitle}</h3>
              {/* black background image for channel info */}
              <img className="tv__tvChannelBackground__image" src={tvChannelBackground} alt="tvChannelBackground" />
              {/* ei nis logo */}
              <img className="tv__eiNisLogo" onClick={this.eiNisLogo} src={eiNisLogo} alt="eiNisLogo" />
              {/* youtube link button */}
              <button className="tv__tvChannelBackground__youTubeLink" onClick={this.youTubeLink}>YouTube link</button>
              {/* facebook link button */}
              <button className="tv__tvChannelBackground__facebookLink">Facebook<br/><span style={{fontSize: "0.7em", color: "#a3a3a3"}}>(uskoro)</span></button>
              {/* github project link */}
              <a className="tv__tvChannelBackground__gitHubLink" href="https://github.com/Faneste/TV90tih" target="_blank" rel="noopener noreferrer">GitHub project</a>
            </div>
            {/* static sound effect */}
            <audio className="tv__staticSoundEffects">
              <source src={staticSound} type="audio/mpeg" />
            </audio>

            {/* tv tutorial image */}
            <img className="tv__tutorialImage" src={tvTutorial} alt="tvTutorial" />
            {/* tv noise image */}
            <img className="tv__noise" src={tvNoise} alt="tvNoise" />
            {/* main tv image */}
            <img className="tv__image" src={tv} alt="tv" />

          </div>
          {/* remote */}
          <div className="remote">
            {/* change the channel button */}
            <div onClick={this.changeChannel} className="remote__changeChannelButtonImage__container">
              <h2 className="remote__changeChannelButtonImage__container__text">Promeni kanal<br className="promeniKanalBr"/><span style={{fontSize: "0.7em", fontWeight: "400"}}>(space dug)</span></h2>
              <img className="remote__changeChannelButtonImage__container__image" src={changeChannelButtonImage} alt="changeChannelButtonImage" />
            </div>
            {/* category buttons and other container */}
            <div className="remote__buttonsContainer">
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="filmovi">Filmovi</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="serije">Serije</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="crtaniFilmovi">Crtani Filmovi</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="muzika">Muzika</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="emisije">Emisije</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="sport">Sport</button>
              <button className="remote__buttonsContainer__button" onClick={this.changeCategory} value="reklame">Reklame</button>

              <h3 className="remote__buttonsContainer__volumeText">Promenite zvuk<br/><span style={{fontSize: "0.7em", fontWeight: "400"}}>(uskoro)</span></h3>
              <input className="remote__buttonsContainer__volume" onChange={this.volumeChange} type="range" min="1" max="100" />

              <button className="remote__buttonsContainer__button buttonEffectContainerButton" onClick={this.effectsToggle}>iskljuci efekte</button>
              <button className="remote__buttonsContainer__button buttonBackgroundContainerButton" onClick={this.backgroundChange}>promeni pozadinu</button>

            </div>
            {/* main remote image */}
            <img className="remote__image" src={remote} alt="remote" />
          </div>
        </div>
      );
  }
}

export default Main;
