var longitude = document.querySelector('.longitude')
var latitude = document.querySelector('.latitude')
var date = document.querySelector('.date')
var zoom = document.querySelector('.zoom')

function searchEarth(){
    document.querySelector('.content').innerHTML = ''

    var text = document.createElement('div')
    text.innerHTML = `<p>The image above represents latitude: `+latitude.value+`, longitude: `+longitude.value+`, on date: `+date.value+`, zoom scale is: `+(zoom.value*10)+`x</p>`
    
    var image = document.createElement('img')
    image.setAttribute('width', '850px')
    image.setAttribute('height', '850px')
    image.setAttribute('z-index', '2000')
    image.src = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude.value}&lat=${latitude.value}&date=${date.value}&dim=${zoom.value}&api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`
    image.onerror = function (){
        this.src = "https://i.pinimg.com/originals/44/e8/3b/44e83bd748eba16854edaec3484541a1.png"
    }
    
    document.querySelector('.content').append(text, image)
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    thissound.volume = 0.09
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}