const Discord = require('discord.js');
const axios = require('axios').default;
const moment = require('moment');

const API_GAMES = 'https://itch.io/api/1/YLI3BwnG1wWxh8RMCHSEdJV0wsYXuNEnfh09pMou/search/games?query=';

function game(msg, args) {
    let gameTitle = args.slice(1).join(' ');

    axios.get(`${API_GAMES}${gameTitle}`)
    .then((res) => {
        let game = res.data.games[0];

        let embed = new Discord.RichEmbed()
        .setTitle(game.title)
        .setThumbnail(game.cover_url)
        .addField("Published", moment(game.published_at).fromNow(), true)
        .addField('Download', `[(play on itch.io)](${game.url})`, true)
        .addField('Description',game.short_text);

        msg.channel.send(embed);
    })
    .catch((err) => {
        console.log(err);
        msg.channel.send("Couldn't get that user from itch.io.");
    })
}

exports.game = game;