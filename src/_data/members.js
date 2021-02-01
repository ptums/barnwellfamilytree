const fetch = require("node-fetch");

module.exports = async function() {
  try {
    const response = await fetch('https://barnwellfamilytree.netlify.app/.netlify/functions/memberapi')
      .then((data) => data.json());

    return response.data
  } catch(error) {
    console.error(error)
  }
}