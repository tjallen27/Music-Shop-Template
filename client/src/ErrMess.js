import React, {Component} from 'react';

export default class ErrMess extends Component {
  render(){
    return(
      <div className="err-messages">
        <div id="message-successful-payment">
          <p id="message-successful-text"></p>
        </div>
      </div>
    )
  }
}
