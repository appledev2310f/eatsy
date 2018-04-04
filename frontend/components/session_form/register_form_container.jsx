import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { register } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Register",
    navLink: <Link to="/signin">Sign in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(register(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
