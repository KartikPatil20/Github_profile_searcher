let Name = document.getElementById("profile-name")
let Img = document.getElementById("img")
let Bio = document.getElementById("profile-bio")
let Followers = document.getElementById("followers")
let Following = document.getElementById("following")
let Repos = document.getElementById("repos")
let Twitter = document.getElementById("twitter")
let Location = document.getElementById("location")
let Search = document.getElementById("input")
let Input


class GitHub {

    async getUserDetails(id) {

        try {
            let res = await fetch(`https://api.github.com/users/${id}`)
            let data = await res.json()
            return await data
        }
        catch (e) {
            return null
        }

    }

    async createUserCard(data) {
        Img.src = data.avatar_url
        Name.innerText = data.name
        Bio.innerText = data.bio
        Followers.innerText = data.followers
        Following.innerText = data.following
        Repos.innerText = data.public_repos
        Twitter.innerText = data.twitter_username
        Location.innerText = data.location
    }

}

async function my(){
    let card = new GitHub()
    let data = await card.getUserDetails("KartikPatil20")
    card.createUserCard(data)
}
my()

Search.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
        Input = Search.value
        let card = new GitHub()
        let data = await card.getUserDetails(Input)
        card.createUserCard(data)
    }
})
