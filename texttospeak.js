
const images = {
    a: "./images/a.jpg",
    b: "./images/b.jpg",
    c: "./images/c.jpg",
    d: "./images/d.jpg",
    e: "./images/e.jpg",
    f: "./images/f.jpg",
    g: "./images/g.jpg",
    h: "./images/h.jpg",
    i: "./images/i.jpg",
    j: "./images/j.jpg",
    k: "./images/k.jpg",
    l: "./images/l.jpg",
    m: "./images/m.jpg",
    n: "./images/n.jpg",
    o: "./images/o.jpg",
    p: "./images/p.jpg",
    q: "./images/q.jpg",
    r: "./images/r.png",
    s: "./images/s.png",
    t: "./images/t.png",
    u: "./images/u.png",
    v: "./images/v.png",
    w: "./images/w.png",
    x: "./images/x.png",
    y: "./images/y.png",
    z: "./images/z.png",
    backspace: "./images/backspace.jpg",
    f5: "./images/notfound.jpg",
  };
  const keyBox = document.getElementById("key-box");
  const imageBox = document.getElementById("image-box");
  var txtInput = document.querySelector("#key-box");
  
  document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();
    keyBox.textContent = key.toUpperCase();
    console.log(images[key]);
    if (images[key]) {
      imageBox.innerHTML = `<img src="${images[key]}" alt="${images[key]}"/>`;
    } else {
      imageBox.innerHTML = `<img src="./images/notfound.jpg" alt=""/>`;
    }
  }); 
  let btnSpeak = document.querySelector("#btnSpeak");
  let synth = window.speechSynthesis;
  let voices = [];
  PopulateVoices();
  if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
  }
  
  document.addEventListener("keydown", () => {
    let toSpeak = new SpeechSynthesisUtterance(txtInput.textContent);
    toSpeak.voice = voices[7];
    synth.speak(toSpeak);
  });
  
  function PopulateVoices() {
    voices = synth.getVoices();
    voices.forEach((item, index) => console.log(item.name, index));
  }
  