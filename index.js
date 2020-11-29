function searchAPOD() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            var div = document.createElement('div')
            div.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
            div.style.color = 'white'
            div.style.boxShadow = '0px 2px 6px black'
            div.style.textAlign = 'center'
            div.style.padding = '10px'

            var image = document.createElement('img')
            image.setAttribute('id', 'img')
            image.src = json.url
            image.setAttribute('width', '100%')
            div.append(image)

            var title = document.createElement('p')
            title.innerHTML = json.title + '<br>' + json.date
            title.style.fontWeight = "bolder"
            div.append(title)

            var info = document.createElement('p')
            info.innerHTML = json.explanation
            div.append(info)

            var fotografo = document.createElement('a')
            fotografo_name = json.copyright
            fotografo.innerText = fotografo_name
            fotografo.href = `https://www.google.com/search?q=${fotografo_name}&rlz=1C1GCEA_enBR928BR928&oq=Jeff+Dai&aqs=chrome..69i57j46i13j0i13i30l5.712j1j7&sourceid=chrome&ie=UTF-8`
            fotografo.setAttribute('target', '_blank')
            fotografo.style.color = "lightblue"
            fotografo.style.textDecoration = "none"
            div.append(fotografo)

            document.querySelector('#infos').append(div)
        })
}
searchAPOD()

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
