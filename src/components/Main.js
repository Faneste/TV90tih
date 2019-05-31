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

// comment
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
      // filmovi
      filmovi: [
        {boolean: true},
        ["kFbek0iACAw","ZmmldPvWXkw","3oy7-QD6xTM","W9qNiSPqUXY","X_oQQ-tuIMk","wlzS-XoxtKA","h59T5cyp-Vk","9Dc-IWCxP2I",
        "Ew3H20TiW_M", "Z00OjcrZZgs", "y32D7CNB64g", "eMx72umFBpY", "aruCUieul5E", "lVPfVApjDAM", "E9rNiO3gTBI"]
      ],
      // serije
      serije: [
        {boolean: true},
        ["pxANP0ukY6U","8LKrdxBCVRw","WujNFpZUFGY","znNLqJIZ8_Q","knu4htbssaE","bbNEQj5PHa8","2K6IPHLN6jI","fDbKIU4GC1c",
        "qdY3k9oD7iw","tlto8skyHPE","Ei4but3Nrp0","CGYGL1iwCnA","LhLB_jEjfZc","c6hvi9ysEp8","BBMQWHrPO9w","c42VvWhrvTs",
        "nRzjuR7svZ4","1fIiWuq3vYc","ahI97wXHtLQ","1QkXWT6-3w4","iwBTnPU_Tak","soKur9WkBe8","VzO4FWTew6U","z1DgvkKCkGY",
        "CoMNq3g6OIg","rxg1cmWZ4S8","IPoQsdPPHpM","ADkAcZU9FCg","LIP7vThUYIU","fscRsltSlC0","fMYoX6ac1tw","g0bbekUsCg4",
        "2pN1J9siP7g","fPciOnbore8","zArIDOaPGeU","BfUjQqCO6c0","7IQOdrFIH7k","OiApcUstQzA","iyVxO4oo0tU"]
      ],
      // crtani filmovi
      crtaniFilmovi: [
        {boolean: true},
        ["vwB0XUBZk2I","tMvGlwkoZbs","sC30ABctrwc","qTQPFQMjdpY","tYLQAghnQHU","fFyG7-oFnOM","lOrVHxgUnjE","iFciRv3Dp8Y",
        "0ejNLKnwTjs","pOhDGz6F4Lc","CQpC2jVXYsY","EM1xQ73AqkA","M2kKhtGdBco","k8bLJOqE8Nw","MCXkdMWrvGQ",
        "G97O9j0B5hk","bidkK1c-kQ4","nrQ3pizX-00","q2RM-FlG7s8","Tstz0460lg4","vwmFaEf0wds","flERApRbYEg",
        "6ZA_qVvJjhk","M78G54LNoc8","gHLoCFGNjTY","Ri2AKqFpPCs","snPQjPz1ykY","mYMYjO-h3iA","-SivTCzI5RE",
        "Xmo09Q9P4ZE","O5JsnSxP88o","niJ5okAC_F4","KU3-LY6P74k","MBpqdwfUW7U","hq8ULI_dfNw","UW2Ky9ov7j4",
        "8aRxkuHaCIA","fp7M5kTt1LY","tvTOvg9fSGc","79OUjC0g8oc","QH_RQGjzFZ8","ksQqom3vrk0","ZLIw3-m5Hf0","aCDA6jp9ENo",
        "BFOMS66b0VI","Wo85ofBC9EY","A-nefpQCEqY","Rv7Mse08fJI","RlzUNqxp-cQ","s2bZa13nvb4","xcH5iGEMG1Y",
        "UdbtEkpOhG8","RJD02J8ykhg","u6pWoMQMt-w","-BKmGjL3Vlk","Bc5B3OiRWbM","na7OHndn2Ms","rvF-24XsmQo",
        "ilBbqgIXYC0","Dm3FVOmHlSM","n9Xc7kVkOyw","lXjRUaw62dY","MuvNUxA8fSo","Xi-RPvs0pSY"]
      ],
      // muzika
      muzika: [
        {boolean: true},
        ["X7hsYdXnEJo","Fcq7I48YzlI","3l9MysthE30","dQ_QzcfVwxA","WJMuGnbzTeg","8RG7WM0Er3w","vGma0QjG_Ow","ThtCs4V0Ses",
        "F6wKKedTZWk","oZAOVR2Cdbg","twHQR0ymIp4","5uzUnCIw_8A","m6Hv5j5RehU","S_HuKMllcFU","hcJ-CKUBRuA","4J13iRJQVW8",
        "emGjshDdh8w","uU4JMLj5ZE4","bzpxESwJAbw","aBKi55l9a6M","HzjY1g_XN40","t3eL-xYdHbE","M-zJH7QsjgU","B0LNY_Yq8Uk",
        "TZWg52r9GmU","bzgiTdo5bB4","4RmfCjBMaqo","tjYcKO4IEMU","Eoiv9KOGDa4","Huz2dSZbjeo","Jn8JEwD24XA","0eR4Qn8DtZQ",
        "6kb9Mh-fWkg","6TzMVkpnQBc","mOIwoex4nBc","tTcUWKocZDc","O_oUoJ5-4cc","j16fuEHCo7k","EOax4VhzS2M","qVDyfEjVy0k",
        "zhMdfjhAbZk","9QWJM2idz0c","YELLmF9K3_o","tPBrEEI7kTE","Lce4k8j9SRM","C4GD7T6wCmU","70ZCaYS4gT0","6hcI4NWODZ4",
        "gs9wC6Io9PI","a4bpqYOpkZM","uVvbeFgJHjA","lo8UrzpVAIc","nq4YCs5wDjE","e0AyBR1PWpU","5HMiBwzOFRU","2TZU30boAFE",
        "6nwEPq8Qkn0","RGopB2mz03g","y0EmQltqL8Y","hbMOkXK88po","3gnrySZ6GiA","dXL9WT51PIw","4SSiS2YWSAw","AiAYplwjrwM",
        "bmedA220joE","BOMWX7HfuCk","JR6jmsvE7tI","k23XBL-wbIg","oFIcA72WvDo","57sE3cbN32A","T-ZX73ZUl-0",
        "Qr45vgMyxqs","Jr3wTfEuio4","P4WwaghKfVQ","2PFWc3NB_yU","saE3MF4r5WU","RVcKqGg-9Bo","GcQG5dRFweU","P8Ba2rn0ij4",
        "H0Ug-vgL3Zk","0AkbMFD3-us","YGO9ubx0o4c","pDNgH0G_Sxs","wIWae8LK4Ic","3is49vWMwFI",
        "0KiJb63dTY4","sa1yDrGWjyw","j5xDP7H45Qk","0sYQBToCsgI",
        "Vn9Lf_jfqUo","coqDIi4MTt0","Lk0-J04SjfU","U7rQ5F3mHvg","FSpnJJ2B5sc",
        "aYT0OuibWZQ","OGbCh8d2z6g","WSX9tmwRucY","814QZuYawSc","vFbCUk2fxEo","qgrw5kfmdYU",
        "aSARTT7QqeE","B3NxINU1aTA","GnjTWut3Wn8","hOMkrjU0bx0","YXXFyWCy2Bc","yOL-kSo74tM","ZLroR2V_B-k",
        "FT-FjWwQhQQ","WrMbpfiVh2g","7zEyDqoXY1g","UO9N2EEs6ys","EzNIuuV5mjs","sUhLpjQqVAc","bRyaeTlbhlM","bg-72UZsIYw",
        "IsV0Kgtyf-w","1J-G0vrRPKw","NxecqnIkkpQ","c0hNKkrmnOY","M4Xfh81CNgI","ND3Chx48-D4","EfL9i9d9LbM","r2tcbi9yepI",
        "Cnb08THJ520","IEk1xM1bmjY","12vEJlcYVgQ","FMiJm-fOa6Y","g5qtUZnF_l0","ubg2h_kBYSA","A1X6H-xEHbM","sGUN5R0GJLA",
        "zd5mInPZwik","M8uNvMLhXyU","bhHFN8I0BsU","a2FHHKz5Nh4","a2FHHKz5Nh4","WHr_iS6gojc","Eo3g80ILnl8","ANfy3RpISxk",
        "RP4dlGIo1Jg","Wqvw1CAqZss","W_6AvAISdPQ","2aUk4-5S1PM","dBMOxcs4e08","6WZsFFswrZs","6MACE3Ab1YU",
        "7P2A9q3W5Uw","YAvPC4_ElDQ","kWfLpAP7XoM","eO-IDYEVrDw",]
      ],
      // emisije
      emisije: [
        {boolean: true},
        ["v6Msmq6fs1Q","WXR0DGhH8Nc","nxNvUeKD2Ow","ReM_gfnHLMs","mG7uDMwiaU8","Tuwj8Ros-Og","zLp_miDXdXw","gC0jiypFu5g",
        "x_NlqNWD7XY","4Fjg2H0_hco","2Wz3Mx5bMyw","oSnABPnYkew","t37UzDVhtFY","gY_wLBuJy24","xolxVG2Ne6o","zqS16gnSucE",
        "yK-WdBDBcxM","3grt1eTp1Ic","KKJXagxGB_A","tIsb2LMVo5s","P_BSfPmCRrM","4QWCV7WAsMg","2hX8_BxeJLQ","QPM4nV3qktw",
        "Wgc7TfKDOBY","o1m1UQptzls","gWbUkPOedXc","zVuQTtvgeYc","8PI8czrMBUU","GT1wYalGXbw","0kO-RKROn4w","vrkFNuvkkVA",
        "Mwld6HXnNX8","a1aCTXvFU9c","F9zwxAGpbsg","AxJFTWFh9f8","Oktprrs1rlE","Rp7YA6ITHnM","HUuHvRIlbVA","Uv2KgsoJeLY",
        "HQN9MB-sHd8","gaK78yHoZIw","0V6o7aumETo","uzI9bnNH1UU","qC5nuqvG1LM","a7CmnhG0dPk","SU4O2viSoG4","_yVDs1ChmcM",
        "C3VUT1sepZ4","Cb__kPhnwOQ","wSh_CDdYjRQ","BUQDukEG3bA","EIYzQqRtBC8","Wbzm-JQGvnU","A4Tb5_NFaUE","iv6Dc3bp4wA",
        "kP_Py3SFVGQ","oNuA8hX-C5c","9EiebUxMBpg","h5lMjXIo0xQ","_c9Xose9C4I","VZThOxEottA","0mXfMy_LHWQ","PXhiohK27BA",
        "NaZu8oYSz4c","puyyK0LjMMo","QgwB-Vesv04","q7xucYJLEiw","1RKQ5Cr3jNQ","jiA2CDkPG4g","rVjzlgB1zyo","bzNHIpbKiQY",
        "12ly8ayXnCk","OTiHCiysBoo","pIXiHhQj3Qk","i-xnpv8tY5E","w_JjGeOKHdA","RWK3djJyQQU","XRY1joiOh9M","mbm_hP9XuPA",
        "WbkpHBtuN3c","C1SQTZtipN0","BJknzdjC_jc","49QNR5QeSU8","YBe0EaF8FGY","-xZtZMPh0b8","u90J_jOTNsE","3n9ILOagHDI",
        "ttLAlTBLN2A",]
      ],
      // sport
      sport: [
        {boolean: true},
        ["xsx9OKyCu2A","IXQ4sSG-fBA","lDPvzlkSqvs","ZFiedCQZ9O0","oIBQ3UwZ_RA","SplsPF7MOiU","8VbiIgXMDJo",]
      ],
      // reklame
      reklame: [
        {boolean: true},
        ["IW714Qh8JZs","25v306O67NA","rjwcUjLsg8w","2W-WnsYGu2s","lYy6dTLYWW0","4ENUQ8-MLW8","lE4i9w4xhFo","d4T5ElKeGHY",
        "Kdtzf_2iSgM","y0kSJXJbXLs","B_vOWu68yTA","uNO-Hwpo8xg","vipGhfUjVEs","b7l64tC9o9Q","EeVEDF1e0eM","heXaS3zePHs",
        "mMdmSUuxLOs","Ceysv7U9W_U","cdBgsNF8KXU","rVG169ivskw","-9SwDdgfw5k","aQM3UcGRnok","uA2KpmG4moI","Xh6N4xKnHQM",
        "AHzTj-OcVUo","qzA1zR3VC1g","LEco1lgCm0A","ajgdhGTdd7Y","CcDh-U2OIiA","lid48yQGIAg","2xowkdpW7Mk",
        "5FOAlPVZp1E","iUt-T1klyrs"]
      ]
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
        start: 25,
        suggestedQuality: "small"
      }
    };

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
                opts={opts}
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
