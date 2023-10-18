import React, {Component} from "react";

class TeamMember extends Component {
  render(){
  return (
    <div className="col-md-4 col-sm-4">
      <div className="card">
        <div className="card-header">
          <img className="card-img rounded-4" style={{ maxWidth: '100%' }} src={this.props.img} alt={this.props.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle">{this.props.position}</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.phone}</li>
            <li className="list-group-item">{this.props.email}</li>
            <a className="card-footer" href={this.props.website} >Website</a>
          </ul>

        </div>
      </div>
    </div>

  )
}
}

export default TeamMember