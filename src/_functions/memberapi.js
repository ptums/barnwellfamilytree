require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

exports.handler = async function() {
  try {
    const connection = await MongoClient.connect(process.env.MONGODB_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = connection.db(process.env.DB_NAME)
    const members = await db.collection('members')
    const response = await members.find({}).toArray()
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response,
        satus: 200,
        msg: "Here are the members of the family tree"
      })
    }
  } catch(err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({err: 'Something went wrong!'})
    }
  } 
}