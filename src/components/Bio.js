import React from 'react'

function Bio(props) {
    let values = [];
    for(var key in props.user) {
        props.user[key] &&
        values.push(<p key={key}>{key} => {props.user[key]}</p>);
    }
    return (
      <div>
      <h3>{props.user.login}'s Bio</h3>
        <img src={props.user.avatar_url} width="50" />
        {values}
      </div>
    );
}

export default Bio
