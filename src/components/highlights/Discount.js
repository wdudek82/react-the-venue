import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      setTimeout(() => {
        this.setState(prevState => ({
          discountStart: prevState.discountStart + 1
        }));
        this.porcentage();
      }, 30);
    }
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.porcentage}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#fff"
                link=""
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
