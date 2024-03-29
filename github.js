class Github{
    constructor() {
        this.client_id = '55a61e12a0db95cf2a1a';
        this.client_secret = '56b0c25c98c8719dae02bd4df5c25d3d525e2343';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profileData,
            repos: repos
        }
    }
}