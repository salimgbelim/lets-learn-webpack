console.log('Hello from about.js')

function loadProfiles(userNames = []) {
    let namesLength = userNames.length;
    console.log(namesLength)
}

function displayTags(targetElement, ...tags) {
    for (let i in tags) {
        console.log(tags[i]);
    }
}


function buildUser(first, last, postCount) {
    let fullName = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;

    return {
        first,
        last,
        fullName,
        isActive: () => {
            return postCount >= ACTIVE_POST_COUNT
        }
    }
}

function countdownTimer(target, timeLeft, options = {}) {
    let defaults = {
        container: ".timer-display",
        timeUnit: "seconds",
        clonedDataAttribute: "cloned",
        timeoutClass: ".is-timeout",
        timeoutSoonClass: ".is-timeout-soon",
        timeoutSoonTime: 10
    }

    let settings = Object.assign({}, defaults, options);

    console.log(settings);
}

export {loadProfiles, displayTags, buildUser, countdownTimer}