const axios = require("axios");
const { API_KEY} = process.env;

const getAllPlatforms = async () => {
    try {
        let platforms = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        platforms = platforms.data.results;
        platforms = platforms?.map((plat) => {
            return {
                name: plat.name,
            };
        });
        console.log("plataforms", platforms);
        return platforms;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {getAllPlatforms}