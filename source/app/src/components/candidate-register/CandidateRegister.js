import "./CandidateRegister.scss";
import { Component } from "react";

export default class CandidateRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      personalityScore: null,
      aptitudeScore: null,
      resume: {
        skills: "",
        personality: "",
        education: "",
        experience: ""
      },
      uploadedFileName: "",
      showErrorMessage: false
    };
  }

  updateTextBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  uploadFileButtonClick = () => {
    document.getElementById("candidate-register-resume-input").click();
  };

  uploadFile = (e) => {
    console.log(e);
    const resume = document.getElementById("candidate-register-resume-input")
      .files[0];
    this.setState({
      uploadedFileName: resume.name
    });
  };

  render() {
    return (
      <div id="candidate-register-container">
        <h1>FAIVE - AI-Based Job Portal</h1>
        <div className="candidate-register-field-container">
          <label
            className="candidate-register-label"
            id="candidate-register-name-label"
            htmlFor="candidate-register-name-input"
          >
            Name:
          </label>
          <input
            autoComplete="off"
            id="candidate-register-name-input"
            className="candidate-register-input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.updateTextBox}
          ></input>
        </div>
        <div className="candidate-register-field-container">
          <label
            className="candidate-register-label"
            id="candidate-register-email-label"
            htmlFor="candidate-register-email-input"
          >
            Email ID:
          </label>
          <input
            autoComplete="off"
            id="candidate-register-email-input"
            className="candidate-register-input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.updateTextBox}
          ></input>
        </div>
        <div className="candidate-register-field-container">
          <label
            className="candidate-register-label"
            id="candidate-register-password-label"
            htmlFor="candidate-register-password-input"
          >
            Password:
          </label>
          <input
            autoComplete="off"
            id="candidate-register-password-input"
            className="candidate-register-input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.updateTextBox}
          ></input>
        </div>
        <div id="candidate-register-score-section">
          <div className="candidate-register-score-item">
            <label
              className="candidate-register-label"
              id="candidate-register-resume-label"
              htmlFor="candidate-register-resume-input"
            >
              Resume:
            </label>
            <div
              onClick={this.uploadFileButtonClick}
              className="candidate-register-button"
            >
              Upload CV
            </div>
            {!this.state.uploadedFileName ? (
              <p>Please upload .pdf only</p>
            ) : (
              <p>{this.state.uploadedFileName}</p>
            )}
          </div>
          <div className="candidate-register-score-item">
            <label
              className="candidate-register-label"
              id="candidate-register-personality-test-label"
            >
              Personality:
            </label>
            <a
              id="candidate-register-personality-test-input"
              className="candidate-register-test-link"
              href="www.google.com"
              target="_blank"
            >
              Take the test
            </a>
          </div>
          <div className="candidate-register-score-item">
            <label
              className="candidate-register-label"
              id="candidate-register-aptitude-test-label"
            >
              Aptitude:
            </label>
            <a
              id="candidate-register-aptitude-test-input"
              className="candidate-register-test-link"
              href="www.google.com"
              target="_blank"
            >
              Take the test
            </a>
          </div>
        </div>

        <div id="candidate-register-save-button">
          <div
            onClick={this.createCandidate}
            className="candidate-register-button"
          >
            Create
          </div>
        </div>
        <input
          onChange={this.uploadFile}
          type="file"
          id="candidate-register-resume-input"
        ></input>
        {this.state.showErrorMessage && (
          <p id="candidate-register-error-message">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    );
  }
}