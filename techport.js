var project_id = document.querySelector('.mdl-textfield__input')

function searchTechPort() {

    document.querySelector('.title').innerHTML = ''
    document.querySelector('.leadOrganization').innerHTML = '<strong>Lead Organization Information: </strong>'
    document.querySelector('.programManagers').innerHTML = '<strong>Program Manager(s): </strong>'
    document.querySelector('.projectManagers').innerHTML = '<strong>Project Manager(s): </strong>'
    document.querySelector('.principalInvestigators').innerHTML = '<strong>Principal Investigator(s): </strong>'
    document.querySelector('.description').innerHTML = ''
    document.querySelector('.closeoutSummary').innerHTML = ''
    document.querySelector('.benefits').innerHTML = ''
    document.querySelector('.projectlinks').innerHTML = ''

    fetch(`https://api.nasa.gov/techport/api/projects/${project_id.value}?api_key=KkQjQmZrtPAocKtyCZh88yZAKUeDJKKkfOXN8LXE`).then(res => res.json())
        .then(json => {
            console.log(json);

            document.querySelector('.content').style.visibility = "visible"

            var title = document.createElement('div')
            title.innerHTML = json.project.title
            title.style.fontWeight = "bolder"
            document.querySelector('.title').append(title)

            var description = document.createElement('div')
            description.innerHTML = '<strong>Project Description: </strong> ' + json.project.description
            document.querySelector('.description').append(description)

            var benefits = document.createElement('div')
            benefits.innerHTML = '<strong>Project Benefits: </strong>' + json.project.benefits
            document.querySelector('.benefits').append(benefits)

            for(let i = 0; i < json.project.closeoutDocuments.length; i++){
                var links = document.createElement('a')
                links.innerHTML = "Project Link " + ' ' + [i + 1] + ' Download ' + `<br>`
                links.style.textDecoration = "none"
                links.style.color = "blue"
                links.href = json.project.closeoutDocuments[i]
                document.querySelector('.projectlinks').append(links)
            }

            for(let i = 0; i < json.project.projectManagers.length; i++){
                var projectManagers = document.createElement('div')
                projectManagers.innerHTML = json.project.projectManagers[i] + `/`
                document.querySelector('.projectManagers').append(projectManagers)
            }

            for(let i = 0; i < json.project.programManagers.length; i++){
                var programManagers = document.createElement('div')
                programManagers.innerHTML = json.project.programManagers[i] + `/`
                document.querySelector('.programManagers').append(programManagers)
            }

            for(let i = 0; i < json.project.principalInvestigators.length; i++){
                var principalInvestigators = document.createElement('div')
                principalInvestigators.innerHTML = json.project.principalInvestigators[i] + `/`
                document.querySelector('.principalInvestigators').append(principalInvestigators)
            }

            var closeoutSummary = document.createElement('div')
            closeoutSummary.innerHTML = '<strong>Closeout Summary: </strong>' + json.project.closeoutSummary
            document.querySelector('.closeoutSummary').append(closeoutSummary)

            var institute = document.createElement('div')
            institute.innerHTML = 'Lead Organization Name: ' + json.project.leadOrganization.name + ', City: ' +json.project.leadOrganization.city+ ', State: ' + json.project.leadOrganization.state
            document.querySelector('.leadOrganization').append(institute)
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