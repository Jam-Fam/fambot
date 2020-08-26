const Discord = require('discord.js');
const axios = require('axios').default;

const API_GAMES = 'https://itch.io/api/1/YLI3BwnG1wWxh8RMCHSEdJV0wsYXuNEnfh09pMou/search/games?query=';
const API_USER = 'https://itch.io/api/1/YLI3BwnG1wWxh8RMCHSEdJV0wsYXuNEnfh09pMou/search/users?query=';

function user(msg, args) {
    let links = [];

    let username = args[1];

    axios.get(`${API_GAMES}${username}`)
    .then((res) => {
        let games = res.data.games;
        links = games.map(g => `[${g.title}](${g.url})`).join(' | ');

        axios.get(`${API_USER}${username}`)
        .then((res) => {
            let user = res.data.users[0];

            let embed = new Discord.RichEmbed()
            .setTitle(user.display_name || username)
            .setThumbnail(user.cover_url)
            .addField("Games", links)

            msg.channel.send(embed);
        })
    })
    .catch((err) => {
        console.log(err);
        msg.channel.send("Couldn't get that user from itch.io.");
    })
}

exports.user = user;