function findMatching(drivers, sought) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase() === sought.toLowerCase()
        )
}

function fuzzyMatch(drivers, testString) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
        )
}

function matchName(drivers, soughtName) {
    return drivers.filter( record => record.name === soughtName)
}