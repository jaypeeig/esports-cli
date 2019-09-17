
const esports = {

    anchor_point: 1,

    euro_odds : (malay_odds) => {
        if(malay_odds > 0){
            return 1 + parseFloat(malay_odds)
        }else{
            return ((1 / Math.abs(malay_odds)) + 1).toFixed(2)
        }
    },

    home : ( away, base_spread ) => {
        away = parseFloat(away)
        let home = 2 - (base_spread / 100) - away
        home = (home  > 1) ? home - 2 : home
        return home.toFixed(2)
    },

    away : ( home, base_spread ) => {
        home = parseFloat(home)
        let away = 2 - (base_spread / 100) - home
        away = (away > 1) ? away - 2 : away
        return away.toFixed(2)
    },

    spread : ( home, away ) => {
        home = parseFloat(home)
        away = parseFloat(away)
        let spread = Math.abs( home + away )
        spread = (spread > 1) ? Math.abs( (Math.abs(spread) - 2) * 100) : Math.abs(spread) * 100
        return spread.toFixed(0)
    }
}

module.exports = esports