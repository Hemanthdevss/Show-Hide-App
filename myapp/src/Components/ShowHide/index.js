import {Component} from "react"
import "./index.css"

class ShowHide extends Component {
  state = {
    isFirstNameDisplayed : false,
    isLastNameDisplayed : false
  }

  onDisplayFirstName = () => {
    this.setState((prevState) => (
      {isFirstNameDisplayed : !prevState.isFirstNameDisplayed}
    ))
  }

  onDisplayLastName = () => {
    this.setState((prevState) => (
      {isLastNameDisplayed : !prevState.isLastNameDisplayed}
    ))
  }



  render() {
      const {isFirstNameDisplayed , isLastNameDisplayed} = this.state
      let paraContentFirst = ""
      let paraContentLast = ""
 

      if (isFirstNameDisplayed) {
        paraContentFirst = "Joe"
      } else {
        paraContentFirst = null
      }
      
      if (isLastNameDisplayed) {
        paraContentLast = "Jones"
      } else {
        paraContentLast = null
      }

      return (
        <div className="bg_container">
            <h1 className="headingStyle"> Show/Hide </h1>
            <div className="Container">
                <div className="firstContainer">
                  <button onClick={this.onDisplayFirstName}> Show/Hide FirstName </button>
                  <p> {paraContentFirst}</p>

                </div>

                <div>
                    <button onClick={this.onDisplayLastName}> Show/Hide LastName </button>
                    <p> {paraContentLast}</p>
                </div>
            </div>
            
            
            
        </div>    
    )
  }

}

export default ShowHide