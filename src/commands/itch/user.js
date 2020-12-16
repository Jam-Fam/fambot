const Discord = require('discord.js');
const axios = require('axios').default;

const API_GAMES = 'https://itch.io/api/1/YLI3BwnG1wWxh8RMCHSEdJV0wsYXuNEnfh09pMou/search/games?query=';
const API_USER = 'https://itch.io/api/1/YLI3BwnG1wWxh8RMCHSEdJV0wsYXuNEnfh09pMou/search/users?query=';
const MAX_GAMES = 10;

function user(msg, args) {
    let links = [];

    let username = args[1];

    axios.get(`${API_USER}${username}`)
    .then((res) => {
        let user = res.data.users[0];

        axios.get(`${API_GAMES}${username}`)
        .then((res) => {
            let games = res.data.games;
            
            games = games.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
            let isTruncated;

            if (games.length > MAX_GAMES) {
                games = games.slice(0,MAX_GAMES);
                isTruncated = true;
            }

            let embed = new Discord.MessageEmbed()

            .setTitle(user.display_name || user.username)
            .setThumbnail(user.cover_url)

            games.forEach(g => {
                let shortenedUrl = g.url.replace('https://', '');
                if (isTruncated) embed.setDescription(`Showing only first ${MAX_GAMES} results.`);
                embed.addField(g.title,`[${shortenedUrl}](${g.url})`);
            });

            msg.channel.send(embed);
        })
        .catch((err) => {
            console.log(err);
            msg.channel.send("Couldn't get that user from itch.io.");
        })


    })


}

exports.user = user;