const items = require('../assets/data')


exports.handler = async (event, contex, cb) => {
  console.log(event);
  return {
    statusCode: 200,
    // body: JSON.stringify(person)
    body: JSON.stringify(items)
  }
}