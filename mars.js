var date = document.querySelector('.input1')

function searchMars() {
    document.querySelector('.content').innerHTML = ''
    document.querySelector('.text').innerHTML = ''

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date.value}&api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            var text = document.createElement('div')
            text.innerHTML = `<p><strong>Name of The Cam: </strong>`+json.photos[0].camera.full_name+`</p><br>`
            document.querySelector('.text').append(text)

            for (let i = 0; i < json.photos.length; i++) {
                var image = document.createElement('img')
                image.setAttribute('width', '256px')
                image.setAttribute('height', '256px')
                image.style.borderRadius = '12px'
                image.style.boxShadow = "0px 1.5px 3px black"
                image.style.margin = "10px"
                image.src = json.photos[i].img_src
                document.querySelector('.content').append(image)
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