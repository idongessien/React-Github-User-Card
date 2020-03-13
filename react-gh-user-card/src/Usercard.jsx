import React from "react";

const Usercard = (props) => {
  console.log(props.login);

  return (
    <div>
      <div key={props.id}>
        <div>
          <img src={props.avatar_url} alt={props.id}></img>
          <p>{props.login}</p>
          <p>{props.location}</p>
          <p> Users: Followers {props.followers}</p>
         <h5> password:<p className = "password"> 12312313123</p></h5>
        </div>
      </div>
    </div>
  );
}

export default Usercard;