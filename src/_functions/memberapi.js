require('dotenv').config()
const { MongoClient } = require('mongodb');

exports.handler = async function() {
  try {
    MongoClient.connect(process.env.MONGODB_URI, (err, connection) => {
      if (err) return errorResponse(callback, err);
      const db = connection.db(process.env.DB_NAME);
      const membersCollection = db.collection('members');
      console.log(membersCollection)

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: 'An array of of barnwells will go here...',
          msg: "Here are the members of the family tree",
          status: 200
        })
      }
    })
  } catch(err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({err: 'Something went wrong!'})
    }
  }
}