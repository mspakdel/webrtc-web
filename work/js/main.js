"use strict";

// import adapter from "./lib/adapter";
const mediaStreamConstrains = {
  // audio: true,
  video: true,
  backgroundBlur: true,
};
let localStream;
const screenStreamConstrains = {
  audio: true,
  video: true,
};
const localVideo = document.getElementById("video");
const localScreen = document.getElementById("screen");
console.log(localVideo);
console.log(localScreen);
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}
function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}
function gotLocalScreenStream(mediaStream) {
  localScreen.srcObject = mediaStream;
}
function handleLocalScreenStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}
navigator.mediaDevices
  .getUserMedia(mediaStreamConstrains)
  .then(gotLocalMediaStream)
  .catch(handleLocalMediaStreamError);

navigator.mediaDevices
  .getDisplayMedia(screenStreamConstrains)
  .then(gotLocalScreenStream)
  .catch(handleLocalScreenStreamError);

// posible items for constrains:
const MediaTrackConstraintSet = {
  width: 0, //ConstrainULong
  height: 0, //ConstrainULong
  sampleRate: 0, //ConstrainULong
  sampleSize: 0, //ConstrainULong
  channelCount: 0, //ConstrainULong

  aspectRatio: 0.0, //ConstrainDouble
  frameRate: 0.0, //ConstrainDouble
  latency: 0.0, //ConstrainDouble

  facingMode: "", //ConstrainDOMString
  resizeMode: "", //ConstrainDOMString
  deviceId: "", //ConstrainDOMString
  groupId: "", //ConstrainDOMString

  echoCancellation: true, //ConstrainBoolean
  autoGainControl: true, //ConstrainBoolean
  noiseSuppression: true, //ConstrainBoolean
  backgroundBlur: true, //ConstrainBoolean
};

function endStream() {
  if (localStream) {
    localStream.getVideoTracks()[0].stop();
  }
}

function startStream() {
  navigator.mediaDevices
    .getUserMedia(mediaStreamConstrains)
    .then(gotLocalMediaStream)
    .catch(handleLocalMediaStreamError);
}
