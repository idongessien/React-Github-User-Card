import React from "react";
import axios from "axios";
import styled from "styled-components"

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    `;

const Styledh2 = styled.h2`
    font-weight: 300;
    letter-spacing: 10px;
    font-size: 2rem;
`;

const ImageMain = styled.img`
    border-radius: 50%;
    width: 15%;
    border: 2px solid white;
`;

const Followers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;

const FollowerImg = styled.img`
    border-radius: 50%;
    width: 50%;
    border: 2px solid red;
`;

const Followersh2 = styled.h2`
    margin: 3% auto 2%;
    display: block;
    text-align: center;
`;

const Indivs = styled.div`
    margin: 1%;
`;

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
            <Cards>
                    <Styledh2>{this.state.user.login}</Styledh2>
                    <ImageMain src = {this.state.user.avatar_url} alt="" />
            </Cards>
            <Followersh2>GitHub Followers</Followersh2>
            <Followers>
                  {this.state.followers.map(follower => (
                    <Indivs>
                        <FollowerImg src = {follower.avatar_url} alt="" />
                        <h2>{follower.login}</h2>
                    </Indivs>
                ))}
            </Followers>
            </div>
          )
      }
}

export default User;