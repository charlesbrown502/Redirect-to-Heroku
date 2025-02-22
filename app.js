// Function to validate src parameter
function validateSrc() {
    if (!unr) {
        unr = "XZ_Bots";
        return
    }
    let spl = unr.split("/");
    if (spl.length < 2 || spl[1] == "") {
        return throwError();
    }
}

// Function to setup fork button
function setupForkButton() {
    if (unr == "XZ_Bots") {
        document.getElementById("telegram").innerHTML = `<a class="button" href="https://telegram.me/xz_bots" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" data-size='large' aria-label="Subscribe @XZ_Bots on Telegram">Telegram</a>`;
    } else {
        document.getElementById("telegram").innerHTML = `<a class='button' href='https://telegram.me/${unr}' data-color-scheme='no-preference: dark_high_contrast; light: dark_dimmed; dark: dark_dimmed;' data-icon='octicon-repo-forked' data-size='large' data-show-count='true' aria-label='Fork ${unr} on GitHub'>Fork it!</a>`;
    }
}


// Function to redirect to heroku
function redirectToHeroku() {
    let input = document.getElementById("repo-link").value;
    if (!input || input == "") {
        return throwError("Please enter your forked repo link!");
    }

    if (input.includes(unr)) {
        return throwError("You are trying to deploy the original repo which was banned from heroku. Please enter your forked repo link or kindly fuck off!");
    }

    const regex = /https?:\/\/github\.com\/(?:[^\/\s]+\/)+/g
    if (!regex.test(input)) {
        return throwError("Please enter a github repo url!");
    }

    window.open(`https://heroku.com/deploy?template=${input}`, "_blank");
}

// Function to throw errors
function throwError(alTxt = null) {
    if (alTxt) {
        alert(alTxt);
    } else {
        window.location = "oops.html";
    }
}


// Get the url parameters
var unr = new URL(window.location.href).searchParams.get("src");

validateSrc();
setupForkButton();
