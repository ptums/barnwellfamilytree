require('dotenv').config()
const { MongoClient } = require('mongodb');

exports.handler = async function() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: 'An array of of barnwells will go here...',
        msg: "Here are the members of the family tree",
        status: 200
      })
    }
  } catch(err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({err: 'Something went wrong!'})
    }
  } finally {
    await client.close();
}
}