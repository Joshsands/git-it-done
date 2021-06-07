var getUserRepos = function () {
    var apiUrl = "https://api.github.comp/users/" + user + "/repos";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
        console.log(data);
    });
});
console.log("outside");
}
getUserRepos("microsoft");