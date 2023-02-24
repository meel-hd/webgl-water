function toggleHelp() {
  document.getElementById("help-content").classList.toggle("hidden");
  document.getElementById("arrow-icon").classList.toggle("retate");
}

function togglePlayPause() {
  document.getElementById("play-icon").classList.toggle("hidden");
  document.getElementById("pause-icon").classList.toggle("hidden");
  paused = !paused;
}

function setLight() {
    renderer.lightDir = GL.Vector.fromAngles(
        ((90 - angleY) * Math.PI) / 180,
        (-angleX * Math.PI) / 180
      );
      if (paused) renderer.updateCaustics(water);
}

function toggleGravity() {
  useSpherePhysics = !useSpherePhysics;
}

// var event = new KeyboardEvent("keydown", {
//     bubbles: true,
//     cancelable: true,
//     keyCode: 76
// });
// document.dispatchEvent(event);
