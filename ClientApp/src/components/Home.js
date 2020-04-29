import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, ReactJS!</h1>
        <p>Lab using Openshift which includes:</p>
        <ul>
          <li><a href='https://github.com/'>GitHub</a> as source code repository works great from within Openshift.</li>
          <li> For the client-side code we are using ReactJS and will be hosted in a NodeJS pod in Openshift.</li>
          <li> For the backend we will use a .Net Core 3.1 WebApi populating the Forecasts with data.</li>
        </ul>
        </div>
    );
  }
}
