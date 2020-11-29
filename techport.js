var project_id = document.querySelector('.mdl-textfield__input')

function searchTechPort() {

    document.querySelector('.content').innerHTML = ''

    fetch(`https://api.nasa.gov/techport/api/projects/${project_id.value}?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {

            document.querySelector('.content').style.visibility = "visible"
            var div = document.createElement('div')
            div.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
            div.style.color = 'white'
            div.style.boxShadow = '0px 2px 6px black'
            div.style.textAlign = 'justify'
            div.style.padding = '10px'

            var title = document.createElement('div')
            title.innerHTML = json.project.title
            title.style.fontWeight = "bolder"
            div.append(title)

            var projectManagers = document.createElement('div')
            projectManagers.innerHTML = `<strong>Project Managers: </strong>`

            for (let i = 0; i < json.project.projectManagers.length; i++) {
                projectManagers.append(json.project.projectManagers[i] + ` / `)
                div.append(projectManagers)
            }

            var programManagers = document.createElement('div')
            programManagers.innerHTML = `<strong>Program Managers: </strong>`

            for (let i = 0; i < json.project.programManagers.length; i++) {
                programManagers.append(json.project.programManagers[i] + ' / ')
                div.append(programManagers)
            }

            var principalInvestigators = document.createElement('div')
            principalInvestigators.innerHTML = `<strong> Principal Investigators: </strong>`

            for (let i = 0; i < json.project.principalInvestigators.length; i++) {
                principalInvestigators.append(json.project.principalInvestigators[i] + ` / `)
                div.append(principalInvestigators)
            }

            var closeoutSummary = document.createElement('div')
            closeoutSummary.innerHTML = '<strong>Closeout Summary: </strong>' + json.project.closeoutSummary
            div.append(closeoutSummary)

            var institute = document.createElement('div')
            institute.innerHTML = 'Lead Organization Name: ' + json.project.leadOrganization.name + ', City: ' + json.project.leadOrganization.city + ', State: ' + json.project.leadOrganization.state
            div.append(institute)

            var description = document.createElement('div')
            description.innerHTML = '<strong>Project Description: </strong> ' + json.project.description
            div.append(description)

            var benefits = document.createElement('div')
            benefits.innerHTML = '<strong>Project Benefits: </strong>' + json.project.benefits
            div.append(benefits)

            for (let i = 0; i < json.project.closeoutDocuments.length; i++) {
                var links = document.createElement('a')
                links.innerHTML = "Project Link " + ' ' + [i + 1] + ' Download ' + `<br>`
                links.style.textDecoration = "none"
                links.style.color = "lightblue"
                links.href = json.project.closeoutDocuments[i]
                div.append(links)
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