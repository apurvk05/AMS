import React from 'react';
import "../Style/stprofile.css"

function SProfileUi(props) {
    return /*#_PURE_*/React.createElement("div", {
        className: "prof-container"
    }, /*#_PURE_*/React.createElement("div", {
        className: "box"
    }, /*#_PURE_*/React.createElement("img", {
        className: "img-box",
        src: props.imgUrl,
        alt: "profile-img"
    }), /*#_PURE_*/React.createElement("h2", {
        className: "name"
    }, `${props.name}`), /*#_PURE_*/React.createElement("h3", {
        className: "des"
    }, `${props.collegeRoll}`), React.createElement("p", {
        className: "des"
    }, `Gender: ${props.gender}`), React.createElement("p", {
        className: "des"
    }, `D.O.B. : ${props.dob}`), React.createElement("p", {
        className: "des"
    }, `Email: ${props.email}`), React.createElement("p", {
        className: "des"
    }, `Mobile Number: ${props.mobile}`), React.createElement("p", {
        className: "des"
    }, `Father Name: ${props.fatherName}`)));
}

export default SProfileUi;