// @flow
import * as React from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

type Box = {
  price: number,
  position: string,
  desc: string,
  linkTo: string,
  delay: number,
};

type Props = {};

type State = {
  boxes: Array<$Shape<Box>>,
};

class Pricing extends React.Component<Props, State> {
  state = {
    boxes: [
      {
        price: 100,
        position: 'Balcony',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, repudiandae.',
        linkTo: 'http://sales/b',
        delay: 100,
      },
      {
        price: 150,
        position: 'Medium',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, repudiandae.',
        linkTo: 'http://sales/m',
        delay: 0,
      },
      {
        price: 250,
        position: 'Star',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, repudiandae.',
        linkTo: 'http://sales/s',
        delay: 100,
      },
    ],
  };

  showBoxes = (): Array<any> => {
    return this.state.boxes.map((box: Box, i) => (
      <Zoom key={i} delay={box.delay}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${box.price}</span>
              <span>{box.position}</span>
            </div>
            <div className="pricing_description">{box.desc}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={box.linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
