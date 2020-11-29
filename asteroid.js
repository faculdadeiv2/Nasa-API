var asteroid_id = document.querySelector('#selec')

function bringAsteroids() {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            for (let i = 0; i < json.near_earth_objects.length; i++) {
                var options = document.createElement('option')
                options.innerHTML = json.near_earth_objects[i].name
                options.value = json.near_earth_objects[i].id
                document.querySelector('#selec').append(options)
            }
        })
}

bringAsteroids()

asteroid_id.addEventListener('change', function () {
    document.querySelector('.content').innerHTML = ''
    var apparizonInfos1 = document.createElement('div')
    apparizonInfos1.setAttribute('display', 'flex')
    apparizonInfos1.setAttribute('flex-wrap', 'wrap')

    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroid_id.value}?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            var div = document.createElement('div')
            div.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
            div.style.color = 'white'
            div.style.boxShadow = '0px 2px 6px black'
            div.style.textAlign = 'center'
            div.style.padding = '10px'

            var siteLink = document.createElement('a')
            siteLink.innerText = "Asteroid's Site Link"
            siteLink.href = json.nasa_jpl_url
            siteLink.style.textDecoration = "none"
            siteLink.style.color = "lightblue"
            div.append(siteLink)

            var asteroidName = document.createElement('div')
            asteroidName.innerHTML = json.name
            div.append(asteroidName)

            var iframe = document.createElement('a')
            iframe.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect')
            iframe.setAttribute('target', '_blank')
            iframe.innerText = 'Look For It on Google'
            asteroidd = json.name
            iframe.href = `https://www.google.com/search?q=${asteroidd}&source=lmns&bih=657&biw=1366&rlz=1C1GCEA_enBR928BR928&hl=pt-BR&sa=X&ved=2ahUKEwiIvOXTpJTtAhW3A7kGHRlEDtwQ_AUoAHoECAEQAA`
            div.append(iframe)

            var diameter = document.createElement('div')
            diameter.innerHTML = '<strong>Estimated Maximum Diameter: </strong>' + json.estimated_diameter.meters.estimated_diameter_max + ' meters' + '<br><strong>Estimated Minimum Diameter: </strong>' + json.estimated_diameter.meters.estimated_diameter_min + ' meters'
            div.append(diameter)

            for (let i = 0; i < json.close_approach_data.length; i++) {
                var apparizonInfos = document.createElement('div')
                apparizonInfos.innerHTML = '<div style="background-color: rgba(0,0,0, 0.75); color: white; box-shadow: 0px 2px 6px black; padding:7.5px; margin:7.5px;"><strong>Approach Date: </strong>' + json.close_approach_data[i].close_approach_date_full + '<br><strong>Distance from Earth: </strong>' + json.close_approach_data[i].miss_distance.kilometers + ' Kilometers' + '<br><strong>Relative Velocity: </strong>' + json.close_approach_data[i].relative_velocity.kilometers_per_hour + ' Km/h</div>'
                apparizonInfos1.append(apparizonInfos)
            }

            div.append(apparizonInfos1);

            document.querySelector('.content').append(div)
        })
})

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