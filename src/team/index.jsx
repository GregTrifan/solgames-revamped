import React from 'react'
import TeamCard from './components/teamCard';
import {ReactComponent as DarkSquare} from "./svg/darkSquare.svg";
import {ReactComponent as LightSquare} from "./svg/lightSquare.svg";
import {ReactComponent as BottomSquare} from "./svg/bottomSquare.svg";
const Team = () => {
  const  ourTeam= [
    {
      name:"Sandeep ghosh",
      position:"Full Stack dev",
      discord:"blocksan#3532",
      instagram:"https://www.instagram.com/_erfolghustler/",
      linkedIn:"https://www.linkedin.com/in/ersandy/"
    },
    {
      name:"Sandeep ghosh",
      position:"Full Stack dev",
      discord:"blocksan#3532",
      instagram:"https://www.instagram.com/_erfolghustler/",
      linkedIn:"https://www.linkedin.com/in/ersandy/"
    },
    {
      name:"Sandeep ghosh",
      position:"Full Stack dev",
      discord:"blocksan#3532",
      instagram:"https://www.instagram.com/_erfolghustler/",
      linkedIn:"https://www.linkedin.com/in/ersandy/"
    },
    {
      name:"Sandeep ghosh",
      position:"Full Stack dev",
      discord:"blocksan#3532",
      instagram:"https://www.instagram.com/_erfolghustler/",
      linkedIn:"https://www.linkedin.com/in/ersandy/"
    },
    {
      name:"Sandeep ghosh",
      position:"Full Stack dev",
      discord:"blocksan#3532",
      instagram:"https://www.instagram.com/_erfolghustler/",
      linkedIn:"https://www.linkedin.com/in/ersandy/"
    },
  ];
    return (
        <div>
          <div className="hidden-heading">
            Team
          </div>
          <div>
          <h2 className="heading">
            Meet Our Team
            <p className="green-border"></p>
          </h2>
          
          <p className="m-8 leading-9">
          The best game aggregator platform there is The best game 
          aggregator platform there is The best game <br/> aggregator platform there is The best game aggregator platform there is. 
          </p>
          </div>
          <DarkSquare className="absolute right-0"/>
          
          <div className="grid justify-items-center lg:justify-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20">
          {ourTeam.map((teammate)=> (
            <TeamCard teammate={teammate}/>
          ))}
          </div>
          <LightSquare  className="absolute bottom-0 right-0"/>
          <BottomSquare className="absolute right-24"/>
        </div>
      );
}

export default Team
