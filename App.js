import React, {Component} from 'react';

import ScreenLoading from './src/Loading';
import ScreenStarting from './src/Starting';
import ScreenSchedule from './src/Schedule';



export default class App extends Component {
    state = {
        currentPage : ScreenLoading,
        _id : "",
    }
    change = (category) => {
        if(category === "loading") {
            this.setState({
                currentPage : ScreenLoading
            })
        } else if(category === "starting") {
            this.setState({
                currentPage : ScreenStarting
            })
        } else if(category === "schedule") {
            this.setState({
                currentPage : ScreenSchedule
            })
        } else {
            this.setState({
                currentPage : Navigation
            })
        }
    }
    constructor(props) {
      super(props);
        setTimeout(() => {
          this.setState({
            currentPage : ScreenStarting
          })
        }, 2000);
    }
    render() {
        return (
            <this.state.currentPage/>
        );
    }
}
