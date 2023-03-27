import React, { Component } from "react";
import Gird from "../../components/gird/gird";
import GridBody from "../../components/gird/grid-body";
import GridHeader from "../../components/gird/grid-header";

export default class UsersGridView extends Component {
  gridColumns = [
    {fieldValue: 'name' ,label: 'Name', width: '30%'}, 
    {fieldValue: 'username' ,label: 'User Name', width: '20%'}, 
    {fieldValue: 'email' ,label: 'E-Mail', width: '25%'}, 
    {fieldValue: 'phone' ,label: 'Phone', width: '25%'}, 
  ];

  render() {
    return (
      <Gird>
        <GridHeader columns={this.gridColumns} />
        <GridBody dataList={this.props.users} columns={this.gridColumns} striped hover />
      </Gird>
    );
  }
}
