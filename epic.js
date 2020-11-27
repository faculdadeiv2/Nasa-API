var date = document.querySelector('.input1')
var dayImages = []

function searchEPIC() {
    document.querySelector('.content').innerHTML = ''
    document.querySelector('.text').innerHTML = ''
    dayImages = []

    fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date.value}?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            console.log(typeof json);

            var text = document.createElement('div')
            text.innerHTML = `<p>These are the Earth Photos taken at: `+date.value+`</p><br>`
            document.querySelector('.text').append(text)

            for (let i = 0; i < json.length; i++) {
                dayImages.push(json[i].image)
            }

            var newDate = date.value.replace(/-/g, '/')

            for (let i = 0; i < dayImages.length; i++) {
                var img = document.createElement('img')
                img.setAttribute('width', '256px')
                img.setAttribute('height', '256px')
                img.style.borderRadius = '12px'
                img.style.boxShadow = "0px 1.5px 3px black"
                img.style.margin = "10px"
                img.src = `https://api.nasa.gov/EPIC/archive/natural/${newDate}/png/${dayImages[i]}.png?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`
                document.querySelector('.content').append(img)
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