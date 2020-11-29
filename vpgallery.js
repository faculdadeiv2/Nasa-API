var content = document.querySelector('.input1')
var resposta = document.querySelector('.content')

function searchPhoto() {
    resposta.innerHTML = ''
    fetch(`https://images-api.nasa.gov/search?q=${content.value}`).then(res => res.json())
        .then(json => {
            for (let i = 0; i < json.collection.items.length; i++) {
                var div = document.createElement('div')
                div.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
                div.style.color = 'white'
                div.style.boxShadow = '0px 2px 6px black'
                div.style.textAlign = 'center'
                div.style.padding = '10px'
                div.style.marginTop = '50px'
                div.style.width = '100%'

                var title = document.createElement('div')
                title.innerHTML = '<p style="font-size:2em;"><strong>' + json.collection.items[i].data[0].title + '</strong></p>'
                div.append(title)

                var image = document.createElement('img')
                image.style.width = '100%'
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
                link.style.color = 'lightblue'
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
