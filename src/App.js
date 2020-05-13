import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    userOutputs: [
      { userName: 'User1',
        paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        paragraph2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { userName: 'User2',
        paragraph1: 'Vitae congue eu consequat ac felis donec et. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Nibh tortor id aliquet lectus proin nibh nisl. Sagittis purus sit amet volutpat consequat mauris nunc congue.', 
        paragraph2: 'Tincidunt dui ut ornare lectus sit amet est. Vitae ultricies leo integer malesuada nunc. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Imperdiet massa tincidunt nunc pulvinar.' },
      { userName: 'User3',
        paragraph1: 'Vitae et leo duis ut diam quam. Id venenatis a condimentum vitae sapien pellentesque habitant. Aliquam purus sit amet luctus. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Quisque non tellus orci ac.', 
        paragraph2: 'Non enim praesent elementum facilisis leo vel. Ut pharetra sit amet aliquam id diam maecenas ultricies. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Eu nisl nunc mi ipsum.' }
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>UserInput/UserOutput!</h1>
        <UserOutput userName={this.state.userOutputs[0].userName} paragraph1={this.state.userOutputs[0].paragraph1} paragraph2={this.state.userOutputs[0].paragraph2} />
        <UserOutput userName={this.state.userOutputs[1].userName} paragraph1={this.state.userOutputs[1].paragraph1} paragraph2={this.state.userOutputs[1].paragraph2} />
        <UserOutput userName={this.state.userOutputs[2].userName} paragraph1={this.state.userOutputs[2].paragraph1} paragraph2={this.state.userOutputs[2].paragraph2} />
      </div>
    );
  }
}

export default App;




{/* <ol>
<li>Create TWO new components: UserInput and UserOutput</li>
<li>UserInput should hold an input element, UserOutput two paragraphs</li>
<li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
<li>Pass a username (of your choice) to UserOutput via props and display it there</li>
<li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
<li>Add a method to manipulate the state (=> an event-handler method)</li>
<li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
<li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
<li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
<li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
</ol> */}
