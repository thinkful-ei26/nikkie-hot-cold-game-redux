import React from 'react';
import { connect } from 'react-redux';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({
  auralStatus: state.game.auralStatus
});

export default connect(mapStateToProps)(AuralStatus);

//we want people to know things are changing on the screen - the screen reader will make this update apparent to the person when they click to hear the status of the game