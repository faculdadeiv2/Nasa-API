function searchTech() {
    document.querySelector('.content').innerHTML = ''

    fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.results.length; i++) {
                var div = document.createElement('div')
                div.setAttribute('class', 'demo-card-wide mdl-card mdl-shadow--2dp')
                div.style.padding = '15px'
                div.style.boxShadow = '0px 2px 6px black'
                div.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
                div.style.color = 'white'
                div.style.width = '100%'
                div.style.display = 'flex'
                div.style.flexWrap = 'wrap'
                div.style.margin - '10px'
                div.style.marginBottom = '10px'
                div.style.marginTop = '10px'
                div.style.padding = '10px'

                var project = document.createElement('div')
                project.innerHTML = `<strong>Project Name: </strong>` + json.results[i][1]
                div.append(project)

                var name = document.createElement('div')
                name.innerHTML = `<strong>Title: </strong>` + json.results[i][2]
                div.append(name)

                var description = document.createElement('div')
                description.innerHTML = `<strong>Project Description: </strong>` + json.results[i][3]
                div.append(description)

                var typeofProject = document.createElement('div')
                typeofProject.innerHTML = `<strong>Type Of Project: </strong>` + json.results[i][5]
                div.append(typeofProject)

                var image = document.createElement('img')
                image.src = json.results[i][10]
                image.setAttribute('width', '96%')
                image.setAttribute('height', '90%')
                image.style.boxShadow = "0px 2px 3px black"
                image.style.margin = "auto"
                image.style.marginTop = '50px'
                div.append(image)

                document.querySelector('.content').append(div)
            }
        })
}

searchTech()

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