const items = require('../assets/data')

exports.handler = async (event, contex, cb) => {
  console.log(event);
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items)
  }
}