let btn = document.getElementById("get-activity");
let activity = document.getElementById("activity");

btn.addEventListener("click", function () {
  disableBtn();
  activity.textContent = "";
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      var i = 0;
      var txt = data.activity;
      var speed = 10;

      function typeWriter() {
        if (i < txt.length) {
          activity.textContent += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();
      setTimeout(enableBtn, 1000);
    });
});

function enableBtn() {
  btn.disabled = false;
  btn.innerText = "next!";
}

function disableBtn() {
  btn.disabled = true;
  btn.innerText = "loading...";
}
