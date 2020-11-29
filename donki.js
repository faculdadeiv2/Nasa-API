var start_date = document.querySelector('.input1')
var end_date = document.querySelector('.input2')

function searchDONKI() {
    document.querySelector('.content').style.visibility = "visible"

    fetch(`https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=${start_date.value}&endDate=${end_date.value}&api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            var div = document.createElement('div')
            div.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
            div.style.color = 'white'
            div.style.boxShadow = '0px 2px 6px black'
            div.style.textAlign = 'center'
            div.style.padding = '10px'

            for (let i = 0; i < json.length; i++) {
                var iframes = document.createElement('iframe')
                iframes.setAttribute('height', '600px')
                iframes.setAttribute('margin-bottom', '50px')
                iframes.src = json[i].link
                div.append(iframes)
            }

            document.querySelector('.content').append(div)
        })
}

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
    thissound.volume = 0.09
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}