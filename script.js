const balloons = document.getElementById('balloons');
const stars = document.getElementById('stars');
for(let i=1;i<=4;i++){const b=document.createElement('div');b.className=`balloon b${i}`;balloons.appendChild(b)}
for(let i=0;i<22;i++){const s=document.createElement('span');s.className='star';s.textContent=Math.random()>.5?'✦':'•';s.style.left=`${Math.random()*100}%`;s.style.top=`${Math.random()*100}%`;s.style.animationDelay=`${Math.random()*2.5}s`;stars.appendChild(s)}
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
