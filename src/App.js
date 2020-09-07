import React from "react";
import DrumPad from "./components/Drumpad";
const sounds = [
  {
    key: 'Q',
    mp3: 'https://freesound.org/data/previews/243/243158_2195044-lq.mp3'
  },
  {
    key: 'W',
    mp3: 'https://freesound.org/data/previews/243/243159_2195044-lq.mp3'
  },
  {
    key: 'E',
    mp3: 'https://freesound.org/data/previews/243/243147_2195044-lq.mp3'
  },
  {
    key: 'A',
    mp3: 'https://freesound.org/data/previews/322/322856_4455510-lq.mp3'
  },
  {
    key: 'S',
    mp3: 'https://freesound.org/data/previews/336/336656_2278554-lq.mp3'
  },
  {
    key: 'D',
    mp3: 'https://freesound.org/data/previews/417/417170_6603437-lq.mp3'
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const App = () => (
  <div id="display" className="display">
    <h1>Presiona las teclas del teclado</h1>
    {sounds.map((sound, idx) => (
      <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
    ))}
  </div>
);
document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `Presionaste la ${id}  `;
    audio.play();
  }
});
export default App;