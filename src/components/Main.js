import React from 'react';
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
  render() {
      return (
        <div className="mainContainer">
          {/* tv */}
          <div className="tv">

            <div className="tv__tvChannelBackground">
              <h3 className="tv__tvChannelBackground__title">OPIS KANALA</h3>
              <h3 className="tv__tvChannelBackground__subTitle">BAKI B3-GOVORIM O LJUBAVI (Official Video) 1997</h3>
              <img className="tv__tvChannelBackground__image" src={tvChannelBackground} alt="tvChannelBackground" />
            </div>

            <img className="tv__image" src={tv} alt="tv" />

          </div>
          {/* remote */}
          <div className="remote">

            <div className="remote__changeChannelButtonImage__container">
              <h2 className="remote__changeChannelButtonImage__container__text">Promeni kanal</h2>
              <img className="remote__changeChannelButtonImage__container__image" src={changeChannelButtonImage} alt="changeChannelButtonImage" />
            </div>

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

            <img className="remote__image" src={remote} alt="remote" />
          </div>
        </div>
      );
  }
}

export default Main;
