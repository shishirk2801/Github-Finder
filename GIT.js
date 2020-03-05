class GIT{
    constructor() {
        this.client_ID ="1b73f94b68323853c549";
        this.client_Secret="7e2224d88d1144f46949a01517f586e6c5113ba3";
        this.repos_count=5;
        this.repos_sort== 'created: asc';
    }
    async getData(user){
        let gitUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_Secret}`);
        let userProfile = await gitUser.json();
        let gitRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_Secret}`);
        let userRepo = await gitRepo.json();
        
        return{
            userProfile,
            userRepo
        }
    }

}
