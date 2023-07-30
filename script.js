
const jsonData = {
    "bots": [
        {
            "id": 101,
            "name": "wHz-93",
            "health": 94,
            "damage": 20,
            "armor": 63,
            "bot_class": "Support",
            "catchphrase": "1010010101001101100011000111101",
            "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
            "created_at": "2018-10-02T19:55:10.800Z",
            "updated_at": "2018-10-02T19:55:10.800Z"
        },
        {
            "id": 102,
            "name": "RyM-66",
            "health": 86,
            "damage": 36,
            "armor": 77,
            "bot_class": "Medic",
            "catchphrase": "0110011100000100011110100110011000011001",
            "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
            "created_at": "2018-10-02T19:55:10.827Z",
            "updated_at": "2018-10-02T19:55:10.827Z"
        },
        {
            "id": 103,
            "name": "P-24",
            "health": 88,
            "damage": 25,
            "armor": 60,
            "bot_class": "Witch",
            "catchphrase": "1100101001110111110010011010110",
            "avatar_url": "https://robohash.org/idetcumque.png?size=300x300&set=set1",
            "created_at": "2018-10-02T19:55:10.844Z",
            "updated_at": "2018-10-02T19:55:10.844Z"
        }
    ]
};

// Function to generate HTML for each bot
function generateBotHTML(bot) {
    return `
        <div>
            <img src="${bot.avatar_url}" alt="${bot.name} Avatar" width="100" height="100">
            <h2>${bot.name}</h2>
            <p>Health: ${bot.health}</p>
            <p>Damage: ${bot.damage}</p>
            <p>Armor: ${bot.armor}</p>
            <p>Class: ${bot.bot_class}</p>
            <p>Catchphrase: ${bot.catchphrase}</p>
        </div>
    `;
}

// Get the parent div to append bot information
const botsListContainer = document.getElementById('bots-list');

// Loop through each bot and add its HTML to the container
jsonData.bots.forEach(bot => {
    botsListContainer.innerHTML += generateBotHTML(bot);
})