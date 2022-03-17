const win = (score) => {
    let rang = ""
    if (score < 30 ) {
        rang = "SILVER"
    } else if (score < 60) {
        rang = "GOLD"
    }else if (score < 80) {
        rang = "PLATINE"
    } else {
        rang = "MASTER"
    }

    return rang
}

export {win}
