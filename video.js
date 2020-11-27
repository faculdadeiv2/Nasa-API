var data = document.querySelector('.input1')
var resposta = document.querySelector('.content')

function searchVideo() {
    resposta.innerHTML = ''
    fetch(`https://images-api.nasa.gov/search?q=${data.value}&media_type=video&year_start=1920&year_end=2020`).then(res => res.json())
        .then(json => {

            for (let i = 0; i < json.collection.items.length; i++) {
                var div = document.createElement('div')
                div.setAttribute('class', 'demo-card-wide mdl-card mdl-shadow--2dp')
                div.style.width = '100%'
                div.style.display = 'flex'
                div.style.flexWrap = 'wrap'
                div.style.margin - '10px'
                div.style.marginBottom = '10px'
                div.style.marginTop = '10px'
                div.style.textAlign = 'justify'
                div.style.padding = '10px'

                
                var title = document.createElement('div')
                title.innerHTML = '<p style="font-size:2em;"><strong>' + json.collection.items[i].data[0].title + '</strong></p>'
                div.append(title)

                var description = document.createElement('div')
                description.innerHTML = '<p ><strong>Description: </strong>' + json.collection.items[i].data[0].description + '</p>'
                div.append(description)
                
                
                var video = document.createElement('video')
                video.setAttribute('controls', true)
                video.setAttribute('type', 'video/mp4')
                video.src = `http://images-assets.nasa.gov/video/${json.collection.items[i].data[0].nasa_id}/${json.collection.items[i].data[0].nasa_id}~small.mp4`
                video.onerror = function (){
                    this.src = 'https://youtu.be/DmwaUBY53YQ'
                }
                div.append(video)

                resposta.append(div)


                console.log(video);
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