console.log("renderer.js is working.");

// const axios = require('axios');
// const $ = require('jquery');

// This function uses the https://github.com/huchenme/github-trending-api repo, see link for docs.

function getTrending() {

    let type = document.getElementById('type-drop').value;
    console.log(type);
    let since = document.getElementById('since-drop').value;
    console.log(since);

    let apiType = "";
    let apiSince = "";

    switch (type) {
        case 'repositories':
            // console.log("Case: repositories");
            apiType = "repositories";
            switch (since) {
                case 'daily':
                    // console.log("Case: daily");
                    apiSince = "?since=daily"
                    break;
                case 'weekly':
                    apiSince = "?since=weekly"
                    //console.log(apiSince);
                    break;
                case 'monthly':
                    apiSince = "?since=monthly"
                    //console.log(apiSince);
                    break;
                default: // Do nothing.
            };
            break;
        case 'developers':
            console.log("Case: developers");
            apiType = "developers";
            switch (since) {
                case 'daily':
                    // console.log("Case: daily");
                    apiSince = "?since=daily"
                    break;
                case 'weekly':
                    apiSince = "?since=weekly"
                    //console.log(apiSince);
                    break;
                case 'monthly':
                    apiSince = "?since=monthly"
                    //console.log(apiSince);
                    break;
                default: // Do nothing.
            };
            break;
        default:
    };

    let axiosURL;

    axiosURL = `https://github-trending-api.now.sh/${apiType}${apiSince}`;
    console.log(axiosURL);

    axios.get(axiosURL)
        .then(function (response) {

            //console.log(response.data);

            var trendingCol1 = document.createElement('div');
            trendingCol1.setAttribute('class', 'trend-cont');

            var trendingCol2 = document.createElement('div');
            trendingCol2.setAttribute('class', 'trend-cont');

            var trendingCol3 = document.createElement('div');
            trendingCol3.setAttribute('class', 'trend-cont');

            // Variable for keeping track of which column to place content, see below for logic.
            let columnCounter = 1;

            Object.keys(response.data).forEach(key => {

                console.log(key);

                switch (apiType) {
                    case 'repositories':

                        let authorR = JSON.stringify(response.data[key].author).replace(/['"]+/g, '');
                        let avatarR = JSON.stringify(response.data[key].avatar);
                        let repoR = JSON.stringify(response.data[key].url).replace(/['"]+/g, '');
                        let infoR = JSON.stringify(response.data[key].description).replace(/['"]+/g, '');
                        let starsR = JSON.stringify(response.data[key].stars);
                        let forksR = JSON.stringify(response.data[key].forks).replace(/['"]+/g, '');
                        let langR;
                        let langColorR;

                        // Check is language object exists.
                        if (response.data[key].language) {
                            langR = JSON.stringify(response.data[key].language).replace(/['"]+/g, '');
                        } else {
                            langR = "Unknown";
                            langColorR = "#f25f4c"
                        }

                        // Check is languageColor object exists.
                        if (response.data[key].languageColor) {
                            langColorR = JSON.stringify(response.data[key].languageColor).replace(/['"]+/g, '');
                        }

                        // Check is description object is empty.
                        if (response.data[key].description === "") {
                            infoR = "No Description."
                        }

                        if (columnCounter === 1 && parseInt(key) < 24) {
                            trendingCol1.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img class="trending-cards" src=${avatarR} style="width: 4rem; display: block;" alt="avatar">
                                    <h2 class="trending-cards text-limit">${authorR}</h2>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        if (columnCounter === 2 && parseInt(key) < 24) {
                            trendingCol2.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img class="trending-cards" src=${avatarR} style="width: 4rem; display: block;" alt="avatar">
                                    <h2 class="trending-cards text-limit">${authorR}</h2>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        if (columnCounter === 3 && parseInt(key) < 24) {
                            trendingCol3.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img class="trending-cards" src=${avatarR} style="width: 4rem; display: block;" alt="avatar">
                                    <h2 class="trending-cards">${authorR}</h2>
                                    <a class="trending-cards text-limit" href="${repoR}" target="_blank">${repoR}</a>
                                    <p class="trending-cards text-limit" title="${infoR}">${infoR}</p>
                                    <p class="trending-cards" style="color: ${langColorR}">${langR}</p>
                                    <p class="trending-cards"><img src="../images/star.svg" width="16" alt="Star icon."> ${starsR}</p>
                                    <p class="trending-cards"><img src="../images/fork.svg" width="16;" alt="Fork icon."> ${forksR}</p>
                                </div>`);
                        }

                        // Logic for counter which column to inject content accordingly.
                        columnCounter++;

                        if (columnCounter === 4) {
                            columnCounter = 1;
                        }

                        break;
                    case 'developers':
                        let userName = JSON.stringify(response.data[key].username).replace(/['"]+/g, '');
                        let name = JSON.stringify(response.data[key].name).replace(/['"]+/g, '');
                        // let type = JSON.stringify(response.data[key].type).replace(/['"]+/g, '');
                        let userURL = JSON.stringify(response.data[key].url).replace(/['"]+/g, '');
                        let avatar = JSON.stringify(response.data[key].avatar);
                        let repoName = JSON.stringify(response.data[key].repo.name).replace(/['"]+/g, '');
                        let repoInfo = JSON.stringify(response.data[key].repo.description).replace(/['"]+/g, '');
                        let repoURL = JSON.stringify(response.data[key].repo.url).replace(/['"]+/g, '');

                        let stars = JSON.stringify(response.data[key].stars);

                        if (columnCounter === 1 && parseInt(key) < 24) {
                            trendingCol1.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img src=${avatar} style="width: 4rem;" alt="avatar">
                                    <h2 class="trending-cards text-limit">${name}</h2>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        if (columnCounter === 2 && parseInt(key) < 24) {
                            trendingCol2.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img src=${avatar} style="width: 4rem;" alt="avatar">
                                    <h2 class="trending-cards text-limit">${name}</h2>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        if (columnCounter === 3 && parseInt(key) < 24) {
                            trendingCol3.insertAdjacentHTML("beforeend",
                                `<div class="content trend-divs">
                                    <img src=${avatar} style="width: 4rem;" alt="avatar">
                                    <h2 class="trending-cards text-limit">${name}</h2>
                                    <a class="trending-cards" href="${userURL}" target="_blank">${userName}</a>
                                    <h4 class="trending-cards">${repoName}</h4>
                                    <p class="trending-cards text-limit" title="${repoInfo}">${repoInfo}</p>
                                    <a class="trending-cards text-limit" href="${repoURL}" target="_blank">Link</a>
                                </div>`);
                        }

                        // Logic for counter which column to inject content accordingly.
                        columnCounter++;

                        if (columnCounter === 4) {
                            columnCounter = 1;
                        }
                        break;
                    default:
                };

            });


            $('#sandbox-1').html(trendingCol1);
            $('#sandbox-2').html(trendingCol2);
            $('#sandbox-3').html(trendingCol3);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}

$('#type-drop').on('change', function() {getTrending()});
$('#since-drop').on('change', function() {getTrending()});

// Start the API call on page load.
getTrending();