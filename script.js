const synth = window.speechSynthesis;
let textarea = document.getElementById("textarea");
let btn = document.getElementById("btn");
let cancle = document.getElementById("cancle");
let pause = document.getElementById("pause");
btn.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(textarea.value.trim());
  if (utterance.text === "") {
    alert("please fill the text box");
  } else {
    synth.speak(utterance);
  }
});

cancle.addEventListener("click", () => {
  synth.cancel();
});
// pause.addEventListener("click", () => {
//   synth.pause();
// });
clear.addEventListener("click", () => {
  textarea.value = "";
});
