console.log("Welcome to Spotify");
//Initialize this variables
let songIndex = 0;
let  audioElement =new Audio('Songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songName: "Don’t Blame Me" ,filePath:"Songs/1.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Lavender Haze" ,filePath:"Songs/2.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Blank Space" ,filePath:"Songs/3.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Delicate" ,filePath:"Songs/4.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Shake It Off" ,filePath:"Songs/5.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Bad Blood" ,filePath:"Songs/6.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Look What You Made Me Do" ,filePath:"Songs/7.mp3",coverPath: "IMG/R.jpg" },
    {songName: "End Game" ,filePath:"Songs/8.mp3",coverPath: "IMG/R.jpg" },
    {songName: "ME!" ,filePath:"Songs/9.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Anti Hero" ,filePath:"Songs/10.mp3",coverPath: "IMG/R.jpg" },
    {songName: "Wildest Dream" ,filePath:"Songs/11.mp3",coverPath: "IMG/R.jpg" },

]


songItems.forEach((Element,i)=> {
    
    Element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    Element.getElementsByClassName("song-name")[0].innerText =songs[i].songName;
})
//audioElement.play();

//Handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//Listen to Evensts
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seek bar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makeAllPlays();
        
       songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
       
       audioElement.src=`Songs/${songIndex+1}.mp3`
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       
    })
})
document.getElementById('next').addEventListener('click',()=>{
  if (songIndex>=10) {
    songIndex = 0;
  }else{
    songIndex+=1;
  }  
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.src=`songs/${songIndex+1}.mp3`
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
      songIndex = 0;
    }else{
      songIndex-=1;
    }  
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })