const axios = require('axios')

module.exports = async function() {
  try {
    const queryUrl = `https://barnwellfamilytree.netlify.app/.netlify/functions/memberapi`
    const response = await axios.get(queryUrl)
   
    return response.data.data
  } catch(error) {
    console.error(error)
  }
}