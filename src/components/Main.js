import React from 'react';
// youtube API
import YouTube from 'react-youtube';
// tv image
import tv from '../images/tv.png';
// tvChannelBackground image
import tvChannelBackground from '../images/tvChannelBackground.png';
// remote image
import remote from '../images/remote.png';
// changeChannelButtonImage image
import changeChannelButtonImage from '../images/changeChannelButtonImage.png';

// comment
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingChannelId: "kFbek0iACAw",
      // video title
      videoTitle: null,
      // change channel image button rotate degrees
      changeChannelImageRotate: 0,
      // filmovi
      filmovi: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // serije
      serije: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // crtani filmovi
      crtaniFilmovi: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // muzika
      muzika: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // emisije
      emisije: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // sport
      sport: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ],
      // reklame
      reklame: [
        {boolean: true},
        ["nVSnAcBmNwk","kFbek0iACAw","ZmmldPvWXkw","g5OhGoTM8b8","uzSc4si5Djc","FSpnJJ2B5sc","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA",
        "7zEyDqoXY1g","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk","IaIYNAVzLS8","9Dc-IWCxP2I","8NP4QdjmLjw","aZ56aFNQ5Q0","h59T5cyp-Vk",
        "IaIYNAVzLS8","9Dc-IWCxP2I"]
      ]
    };
    this.changeChannel = this.changeChannel.bind(this);
    this.videoReady = this.videoReady.bind(this);
  }

  videoReady(event) {
    // youtube title of the video
    let title = event.target.getVideoData().title;
    // setting title into state
    this.setState({
      videoTitle: title
    })
  }

  videoEnd(event) {
    // loops the video when it ends
    event.target.playVideo();
  }

  // changing the channel function
  changeChannel() {

    // button animation/rotation
    // gradially increasing rotate angle by 10
    let rotateAngle = this.state.changeChannelImageRotate;
    rotateAngle = rotateAngle + 10;
    let buttonImage = document.getElementsByClassName('remote__changeChannelButtonImage__container__image')[0];
    buttonImage.setAttribute('style','transform:rotate(' + rotateAngle + 'deg)');
    this.setState({
      changeChannelImageRotate: rotateAngle
    })

    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////

    // changes the channel automaticaly if the video is not playing
    // it checks if the video has youtube title after 1sec delay
    // timer = () => {
    //     if (this.state.videoTitle === "") {
    //       this.changeChannel();
    //     }
    //     setTimeout(timer, 2000);
    //   }
    // }

    // let timer = function() {
    //   if (this.state.videoTitle === "") {
    //     this.changeChannel();
    //   }
    //   setTimeout(timer, 2000);
    // }

    // setTimeout(timer, 2000);


    // let timer = setTimeout(
    //   function() {
    //     if (this.state.videoTitle === "") {
    //       this.changeChannel();
    //     }
    //   }.bind(this), 2000 );
    // window.clearTimeout(timer);

    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////
    /////////////////////////////////////////////

    // creating arrays for channels
    let allChannelsPool = [];
    let finalChannel;

    if (this.state.filmovi[0].boolean === true) { allChannelsPool.push(this.state.filmovi[1]);}
    if (this.state.serije[0].boolean === true) {allChannelsPool.push(this.state.serije[1]);}
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

    const opts = {
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
        start: 25
      }
    };


      return (
        <div className="mainContainer">
          {/* tv */}
          <div className="tv">

            {/* youtube api with options */}
            <YouTube
              className="youtubePlayer"
              videoId={this.state.playinChannelId}
              opts={opts}
              onReady={this.videoReady}
              onEnd={this.videoEnd}
              onStateChange={this.videoReady}
            />
            {/* tv images */}
            <div className="tv__tvChannelBackground">
              <h3 className="tv__tvChannelBackground__title">OPIS KANALA</h3>
              <h3 className="tv__tvChannelBackground__subTitle">{this.state.videoTitle}</h3>
              <img className="tv__tvChannelBackground__image" src={tvChannelBackground} alt="tvChannelBackground" />
            </div>
            {/* main tv image */}
            <img className="tv__image" src={tv} alt="tv" />

          </div>
          {/* remote */}
          <div className="remote">
            {/* change the channel button */}
            <div onClick={this.changeChannel} className="remote__changeChannelButtonImage__container">
              <h2 className="remote__changeChannelButtonImage__container__text">Promeni kanal</h2>
              <img className="remote__changeChannelButtonImage__container__image" src={changeChannelButtonImage} alt="changeChannelButtonImage" />
            </div>
            {/* category buttons and other container */}
            <div className="remote__buttonsContainer">
              <button className="remote__buttonsContainer__button">Filmovi</button>
              <button className="remote__buttonsContainer__button">Serije</button>
              <button className="remote__buttonsContainer__button">Crtani Filmovi</button>
              <button className="remote__buttonsContainer__button">Muzika</button>
              <button className="remote__buttonsContainer__button">Emisije</button>
              <button className="remote__buttonsContainer__button">Sport</button>
              <button className="remote__buttonsContainer__button">Reklame</button>

              <h3 className="remote__buttonsContainer__volumeText">Promenite zvuk</h3>
              <input className="remote__buttonsContainer__volume" type="range" min="1" max="100" value="50" />

              <button className="remote__buttonsContainer__button buttonEffectContainerButton">iskljucite efekte</button>

            </div>
            {/* main remote image */}
            <img className="remote__image" src={remote} alt="remote" />
          </div>
        </div>
      );
  }
}

export default Main;
