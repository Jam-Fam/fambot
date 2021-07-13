import Discord from 'discord.js';
import axios from 'axios';
import moment from 'moment';
import config from '../../config.js'

const API_GAMES = `https://itch.io/api/1/${config.API_KEY_ITCH}/search/games?query=`;

export default function game(msg, args) {
    let gameTitle = args.slice(1).join(' ');

    axios.get(`${API_GAMES}${gameTitle}`)
    .then((res) => {
        let game = res.data.games[0];
        let creator = game.url.substring("https://".length).split('.')[0];
        let publishedAgo = moment(game.published_at).fromNow();

        let embed = new Discord.MessageEmbed()
        .setTitle(game.title)
        .setThumbnail(game.cover_url)
        .addField("Published",`${publishedAgo} by ${creator}` , true)
        .addField('Download', `[(play on itch.io)](${game.url})`, true)
        .addField('Description',game.short_text);

        msg.channel.send(embed);
    })
    .catch((err) => {
        console.log(err);
        msg.channel.send("Couldn't get that game from itch.io.");
    })
}