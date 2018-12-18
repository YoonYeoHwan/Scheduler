import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Schedule1 from './Schedule.json';


LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['SUN','MON','TUE','WED','THU','FRI','SAT']
};

var newdays = []

 for (var i=0; i<Schedule1.schedules.length; i++){
      newdays.push(
        Schedule1.schedules[i].date
      )
    }

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      marked: null,
    };
  }
  componentDidMount() {
    this.anotherFuc();
  }
  anotherFuc = () => {
    var obj = newdays.reduce((c, v) => Object.assign(c, {[v]: {selected: true, marked: true}}), {});
    this.setState({marked : obj});
  }
  render() {   
    return (
      <View>
        <Calendar
          currentMonth={'2015-08-01'}       // Optional date to set the currently displayed month after initialization
          customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
          dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
          eventDates={['2018-10-31']}       // Optional array of moment() parseable dates that will show an event indicator
          events={[{date:'2018-10-31', }]}// Optional array of event objects with a date property and custom styles for the event indicator
          monthNames={Array}                // Defaults to english names of months
          nextButtonText={'Next'}           // Text for next button. Default: 'Next'
          onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
          onDateLongPress={(date) => this.onDateLongPress(date)} // Callback after date is long pressed
          onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
          onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
          onTouchNext={this.onTouchNext}    // Callback for next touch event
          onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
          onTitlePress={this.onTitlePress}  // Callback on title press
          prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
          removeClippedSubviews={false}     // Set to false for us within Modals. Default: true
          // renderDay={<CustomDay />}         // Optionally render a custom day component
          scrollEnabled={true}              // False disables swiping. Default: False
          selectedDate={'2015-08-15'}       // Day to be selected
          showControls={true}               // False hides prev/next buttons. Default: False
          showEventIndicators={true}        // False hides event indicators. Default:False
          startDate={'2015-08-01'}          // The first month that will display. Default: current month
          titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
          today={'2017-05-16'}              // Defaults to today
          weekStart={1} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
          markedDates={this.state.marked}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1, alignSelf: 'stretch',
    flexDirection: 'column',
    // backgroundColor: "blue"
  },

});

const Schedule = () => {
  const customStyle = {
    calendarContainer: {
      backgroundColor: 'blue',
    },
  }
  return <Calendar customStyle={customStyle} />
}