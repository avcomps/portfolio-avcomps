import "./view-browser.css";
import React from "react";
import { BrowserView } from "react-device-detect";
import { Header } from "../../header/header";
import { Menu } from "../../menu/menu";
import { Footer } from "../../footer/footer";
import { WorksArt } from "../../works/art/works-art";
// import { WorksEng } from "../../works/engineering/works-engineering";
// import { Player } from "../../player/player";
// import { RoundCursor } from "../../cursors/cursor";
import "../../cursors/c-cursor";

export default class ViewBrowser extends React.Component {
  props = null;
  state = { showArt: true };

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.browser();
  }

  browser() {
    return (
      <BrowserView>
        {/* <RoundCursor /> */}
        <div id="content-left">
          <div className="softness-top"></div>
          <div id="content-left-gallery">
            <WorksArt direction="column" numColumns="2" />
          </div>
          <div className="softness-bottom"></div>
        </div>

        <div id="content-right">
          <div className="content-right-info">
            <Header />
            <div style={{ display: "flex" }}>
              {/* <Menu /> */}
              <Footer />
            </div>
          </div>
          {/* <Player /> */}
        </div>
      </BrowserView>
    );
  }
}
