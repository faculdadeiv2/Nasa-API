var start_date = document.querySelector('.input1')
var end_date = document.querySelector('.input2')

function searchDONKI(){
    document.querySelector('.content').style.visibility = "visible"

    fetch(`https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=${start_date.value}&endDate=${end_date.value}&api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
    .then(json => {

        for(let i = 0; i < json.length; i++){
            var iframes = document.createElement('iframe')
            iframes.setAttribute('height', '600px')
            iframes.style.marginBottom = '50px'
            iframes.src = json[i].link
            document.querySelector('.content').append(iframes)
        }
    })
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