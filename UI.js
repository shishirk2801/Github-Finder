class UI{
    displayUser(user)
    {
    
        let output =`            
        <div class="row">
            <div class="col-3">
                <div class="card " style="background:white">
                <img class="card-img-top img-thumbnail" src=${user.userProfile.avatar_url} alt="Profile pic">
                <div class="card-body">
                    <h4 class="card-title text-center " style="color:black">${user.userProfile.login}</h4>
                    <hr>
                    <a href="${user.userProfile.html_url}" target="_blank" class="btn btn-success btn-block">See Profile</a>
            </div>
          </div>
            </div>
            <div class="col-9">
            <span class="badge badge-light">Public Repos: ${user.userProfile.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.userProfile.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.userProfile.followers}</span>
            <span class="badge badge-info">Following: ${user.userProfile.following}</span>
            <br><br>
            <ul class="list-group mt-2">
              <li class="list-group-item">Company: ${user.userProfile.company}</li>
              <li class="list-group-item">Website/Blog: ${user.userProfile.blog}</li>
              <li class="list-group-item">Location: ${user.userProfile.location}</li>
              <li class="list-group-item">Member Since: ${user.userProfile.created_at}</li>
            </ul>
            <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
            <div id="repos"></div>
            </div>

        </div>
        `;
        document.querySelector(".userinfo").innerHTML=output;
    }
    //  Show user repos
    displayRepo(repos) {
    let output = '';
        console.log(repos);
    repos.userRepo.forEach(function(repo) {
        
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
      document.getElementById('repos').innerHTML = output;
    });
}
    alertDisplay(message,className){
        this.clearAlert();
        const alert = document.createElement("div");
        alert.className=className;
        alert.appendChild(document.createTextNode(message));
        let parent = document.querySelector(".searchcont");
        let before = document.querySelector(".userinfo");
        parent.insertBefore(alert,before);
        setTimeout(()=> this.clearAlert(),2000);


    }
    clearAlert(){
        let alert = document.querySelector(".alert");
        if(alert){
            alert.remove();
        }
        
    }
    clearInfo(){
        document.querySelector(".userinfo").innerHTML="";
    }
    spinner(){

    }
}