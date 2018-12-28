import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class TimeUntil extends Component {
  state = {
    deadline: "Dec, 31, 2018",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  componentDidMount() {
    const { deadline } = this.state;
    this.moment = setInterval(() => this.getTimeUntil(deadline), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.moment);
  }

  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log("Date passed");
      clearInterval(this.moment);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      // console.log("sec: ", seconds);
      // console.log("min: ", minutes);
      // console.log("h: ", hours);
      // console.log("d: ", days);

      this.setState(() => ({
        days,
        hours,
        minutes,
        seconds
      }));
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <Slide left delay={300}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="coutdown_item">
              <div className="countdown_time">{hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="coutdown_item">
              <div className="countdown_time">{minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="coutdown_item">
              <div className="countdown_time">{seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
