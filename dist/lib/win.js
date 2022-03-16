const win = (score) => {
    let rang = ""
    if (score < 30 ) {
        rang = "silver"
    } else if (score < 60) {
        rang = "Gold"
    }else if (score < 90) {
        rang = "Platine"
    } else {
        rang = "Diamond"
    }

    return userType
}

export {win}
