var asteroid_id = document.querySelector('#selec')

asteroid_id.addEventListener('change', function(){
    document.querySelector('.content').style.visibility = "visible"
    document.querySelector('.siteLink').innerHTML = ''
    document.querySelector('.title').innerHTML = ''
    document.querySelector('.iframe').innerHTML = ''
    document.querySelector('.size').innerHTML = ''
    document.querySelector('.apparizonInfos').innerHTML = ''

    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroid_id.value}?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
    .then(json => {

        var siteLink = document.createElement('a')
        siteLink.innerText = "Asteroid's Site Link"
        siteLink.href = json.nasa_jpl_url
        siteLink.style.textDecoration = "none"
        siteLink.style.color = "blue"
        document.querySelector('.siteLink').append(siteLink)

        var asteroidName = document.createElement('div')
        asteroidName.innerHTML = json.name
        document.querySelector('.title').append(asteroidName)

        var iframe = document.createElement('a')
        iframe.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect')
        iframe.setAttribute('target', '_blank')
        iframe.innerText = 'Look For It on Google'
        asteroidd = json.name
        iframe.href = `https://www.google.com/search?q=${asteroidd}&source=lmns&bih=657&biw=1366&rlz=1C1GCEA_enBR928BR928&hl=pt-BR&sa=X&ved=2ahUKEwiIvOXTpJTtAhW3A7kGHRlEDtwQ_AUoAHoECAEQAA`
        document.querySelector('.iframe').append(iframe)

        var diameter = document.createElement('div')
        diameter.innerHTML = '<strong>Estimated Maximum Diameter: </strong>' + json.estimated_diameter.meters.estimated_diameter_max + ' meters' + '<br><strong>Estimated Minimum Diameter: </strong>' + json.estimated_diameter.meters.estimated_diameter_min + ' meters'
        document.querySelector('.size').append(diameter)

        for(let i = 0; i < json.close_approach_data.length; i++){
            var apparizonInfos = document.createElement('div')
            apparizonInfos.innerHTML = '<div class="demo-card-wide mdl-card mdl-shadow--2dp" style="margin-top: 10px; padding: auto; background-color:  rgba(0, 0, 0, 0.5); box-shadow: 0px 2px 6px black; color: white; border-radius: 2px; margin-bottom: 5px; margin-left: 2.5px; margin-right: 2.5px; padding-top:35px; width: 308px"><strong>Approach Date: </strong>' + json.close_approach_data[i].close_approach_date_full + '<br><strong>Distance from Earth: </strong>' + json.close_approach_data[i].miss_distance.kilometers + ' Kilometers' + '<br><strong>Relative Velocity: </strong>' + json.close_approach_data[i].relative_velocity.kilometers_per_hour + ' Km/h</div>'
            document.querySelector('.apparizonInfos').append(apparizonInfos)
        }
    })
})

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