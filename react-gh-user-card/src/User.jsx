import React from "react";
import axios from "axios";

 class User extends React.Component {
  constructor(){
      super();
      this.state = {
          user:{},
          followers:[]
      }
}

    componentDidMount() {
        axios
          .get("https://api.github.com/users/cessien")
       .then(response =>{
        console.log(response.data)
           this.setState({
               user : response.data
           })
       })
          .catch(err => console.log(err));
        axios
          .get("https://api.github.com/users/cessien/followers")
           .then(response =>{
               console.log(response.data)
               this.setState({
                   followers : response.data
               })
           })
      }

  render() {
        return (
          <div>
            <div>
                    <h2>{this.state.user.login}</h2>
                    <img src = {this.state.user.avatar_url} alt=""></img>
            </div>
            <div>
                  {this.state.followers.map(follower => (
                    <div>
                    <img src = {follower.avatar_url} alt=""></img>
                    <h2>{follower.login}</h2>
                    </div>
                ))}
            </div>
            </div>
          )
      }
}

export default User;