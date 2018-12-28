// @flow
import React, { Component } from 'react';

class Location extends Component<{}, {}> {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4552939575397!2d-96.80127438415788!3d32.780185080971094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1sen!2spl!4v1545939072667"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}

export default Location;
