// Balões decorativos
const balloons = document.getElementById("balloons");
const balloonClasses = [
  ["b1", "purple"], ["b2", "black"], ["b3", "purple"], ["b4", "silver"],
  ["b5", "black"], ["b6", "purple"], ["b7", "silver"], ["b8", "purple"]
];

balloonClasses.forEach(([position, color]) => {
  const balloon = document.createElement("div");
  balloon.className = `balloon ${position} ${color}`;
  balloons.appendChild(balloon);
});

// Estrelas decorativas
const stars = document.getElementById("stars");
const starPositions = [
  ["8%", "15%"], ["91%", "20%"], ["12%", "67%"],
  ["88%", "68%"], ["48%", "4%"], ["52%", "91%"],
  ["30%", "82%"], ["72%", "78%"]
];

starPositions.forEach(([left, top], index) => {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = index % 2 === 0 ? "✦" : "✧";
  star.style.left = left;
  star.style.top = top;
  star.style.animationDelay = `${index * 0.25}s`;
  stars.appendChild(star);
});

// Pequena interação no nome
const name = document.querySelector(".name-area h1");
name.addEventListener("click", () => {
  name.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.08)" },
      { transform: "scale(1)" }
    ],
    { duration: 500, easing: "ease-out" }
  );
});

const musicButton=document.getElementById('musicButton');
const backgroundMusic=document.getElementById('backgroundMusic');
if(musicButton&&backgroundMusic){
  const updateMusicButton=()=>{
    const isPlaying=!backgroundMusic.paused;
    musicButton.textContent=isPlaying?'♫':'♪';
    musicButton.setAttribute('aria-label',isPlaying?'Desligar música':'Ligar música');
    musicButton.setAttribute('aria-pressed',String(isPlaying));
    musicButton.title=isPlaying?'Desligar música':'Ligar música';
  };
  const startMusic=async()=>{
    try{
      await backgroundMusic.play();
    }catch(error){
      console.info('A reprodução será iniciada após uma interação com a página.',error);
    }
    updateMusicButton();
  };
  musicButton.addEventListener('click',async()=>{
    if(backgroundMusic.paused){await startMusic();}
    else{backgroundMusic.pause();updateMusicButton();}
  });
  backgroundMusic.addEventListener('play',updateMusicButton);
  backgroundMusic.addEventListener('pause',updateMusicButton);
  document.addEventListener('pointerdown',startMusic,{once:true});
  document.addEventListener('keydown',startMusic,{once:true});
  startMusic();
}
