const esports = require('./esports')
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const yargs = require('yargs')
yargs.version('1.1.0')

yargs.command({
    command:'euro',
    describe:'Compute euro odds',
    builder:{
        malay_odds:{
            describe:'Malay Odds',
            demandOption:true,
            type:'float'
        }
    },
    handler: function(argv) {
        let euro_odds = esports.euro_odds(argv.malay_odds)
        console.log(`Malay Odds: ${chalk.blue(argv.malay_odds)}`)
        console.log(chalk.green(`Euro Odds is ${chalk.yellow(euro_odds)}`))
    }
})

yargs.command({
    command:'home',
    describe:'Compute home value',
    builder:{
        away:{
            describe:'Away',
            demandOption:true,
            type:'float'
        },
        spread: {
            describe:'Spread',
            demandOption:true,
            type:'float'
        }
    },
    handler: function(argv) {
        let home = esports.home(argv.away, argv.spread)
        console.log(`Away: ${chalk.blue(argv.away)} | Spread: ${chalk.blue(argv.spread)}`)
        console.log(chalk.green(`Home is ${chalk.yellow(home)}`))
    }
})

yargs.command({
    command:'away',
    describe:'Compute away value',
    builder:{
        home:{
            describe:'Home',
            demandOption:true,
            type:'float'
        },
        spread: {
            describe:'Spread',
            demandOption:true,
            type:'float'
        }
    },
    handler: function(argv) {
        let away = esports.away(argv.home, argv.spread)
        console.log(`Home: ${chalk.blue(argv.home)} | Spread: ${chalk.blue(argv.spread)}`)
        console.log(chalk.green(`Away is ${chalk.yellow(away)}`))
    }
})


yargs.command({
    command:'spread',
    describe:'Compute away value',
    builder:{
        home:{
            describe:'Home',
            demandOption:true,
            type:'float'
        },
        away:{
            describe:'Away',
            demandOption:true,
            type:'float'
        },
    },
    handler: function(argv) {
        let spread = esports.spread(argv.home, argv.away)
        console.log(`Home: ${chalk.blue(argv.home)} | Away: ${chalk.blue(argv.away)}`)
        console.log(chalk.green(`[Answer] Base Spread is ${chalk.yellow(spread)}`))
    }
})


clear();
console.log('')
console.log('')
yargs.argv
console.log('')

console.log(
    chalk.yellow(
        figlet.textSync('Esports', { horizontalLayout: 'full' })
    )
);
console.log('')
console.log(chalk.red('      Commands: [euro, home, away, spread]        '))
console.log('')
console.log('')
