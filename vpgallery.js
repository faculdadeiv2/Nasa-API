var content = document.querySelector('.input1')
var resposta = document.querySelector('.content')

function searchPhoto() {
    resposta.innerHTML = ''
    fetch(`https://images-api.nasa.gov/search?q=${content.value}`).then(res => res.json())
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
                div.style.color = 'black'

                var title = document.createElement('div')
                title.innerHTML = '<p style="font-size:2em;"><strong>' + json.collection.items[i].data[0].title + '</strong></p>'
                div.append(title)

                var image = document.createElement('img')
                image.src = json.collection.items[i].links[0].href
                div.append(image)


                var description = document.createElement('div')
                description.innerHTML = "<p><strong>Description: </strong>" + json.collection.items[i].data[0].description + "</p>"
                div.append(description)

                var link = document.createElement('a')
                link.href = `https://images-assets.nasa.gov/image/${json.collection.items[i].data[0].nasa_id}/${json.collection.items[i].data[0].nasa_id}~orig.jpg`
                link.innerText = "Original image Link"
                link.style.textDecoration = 'none'
                link.target = '_blank'
                link.style.color = 'blue'
                div.append(link)

                resposta.append(div)
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
