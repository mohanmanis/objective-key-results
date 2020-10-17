import React from 'react';
import AppManager from './stores/AppManager';
import Objective from "./components/Objective"

interface Props {
  managers: AppManager;
}

export default function App(props: Props) {
  return (
    <div>
      <div className="App">
        <Objective managers={props.managers}></Objective>
      </div>
    </div>
  );
}

