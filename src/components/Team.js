import React, { Component } from "react";
import TeamMember from "./TeamMember";
import memberinfo from "./memberInfo";

class Team extends Component {
  constructor() {
    super()
    this.state = {
      memberinfo: memberinfo,
      members: [],
      counter: 0,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.clickShowHandler = this.clickShowHandler.bind(this);
  }

  clickHandler() {
    this.setState((prevStat) => {
      return { counter: prevStat.counter + 1 }
    })
  }

  clickShowHandler() {
    // console.log(memberinfo[0].name)
    // console.log(memberinfo.length)
    // console.log(this.state.newMember.length)
    if(this.state.counter < this.state.memberinfo.length){

      this.state.members.push(this.state.memberinfo[this.state.counter])
      this.setState((prevStat) => {
        return { counter: prevStat.counter + 1 }
      })
    }
    console.log(this.state.members.length)

    // this.newMember.name.push('modarsoos')

    // var x = document.getElementById("showMe");
    // if (x.style.visibility === "hidden") {
    //   x.style.visibility = "visible";
    // } else {
    //   x.style.visibility = "hidden";
    // }
    
    // show new data


    // end of show new data
  }



render() {

  // let theCanvas = document.getElementById('myCanvas');
  // theCanvas.getContext('2d');
  // theCanvas.fillStyle = '#000';
  // theCanvas.fillRect(0,0,theCanvas.width, theCanvas.height);

  this.members = this.state.members.map(member =>
    < TeamMember
      // console.log(`<TeamMember ${member.name}/>`);
      key={member.id}
      img={member.img}
      name={member.name}
      position={member.position}
      phone={member.phone}
      email={member.email}
      website={member.website}
    />
  );


  return (
    <div className="container">

      <div className="row d-flex align-items-center mb-2 mt-3">
        <div className="col-4">{this.state.counter}</div>
        <div className="col-4"><button className="btn btn-primary" onClick={this.clickHandler}>Counter</button></div>
        <div className="col-4"><button className="btn btn-info btn-sm" onClick={this.clickShowHandler}>Show Photos!</button></div>
      </div>

      <div id='showMe' className="row">{this.members}</div>
    </div>
  )
}
}

export default Team