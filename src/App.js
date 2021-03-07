import React from "react";
import Img from "./img.jpg";
import Profile from "./Profile";
class App extends React.Component {
  state = {
    person: { fullName: "Meriam", bio: "hello", profession: "Etudiante" },
    show: false,
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <div className="App">
            <Profile person={this.state.person} personImg={Img} />
          </div>
        )}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
      </div>
    );
  }
}
export default App;
