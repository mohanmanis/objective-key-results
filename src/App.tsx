import React, { Component } from 'react';
import './App.css';
import { observer } from "mobx-react";

import AppManager from './stores/AppManager';
import Objective from "./components/Objective"

interface Props {
  managers: AppManager;
}


@observer
export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }



  render() {
    return (
      <div className="App">
        <Objective managers={this.props.managers}></Objective>
      </div>
    );
  }
};
