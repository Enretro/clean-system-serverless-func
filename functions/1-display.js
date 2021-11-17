// domain/.netlify/functions/1-display

// const person = {name: "john"}

exports.handler = async (event, contex, cb) => {
  console.log(event);
  return {
    statusCode: 200,
    // body: JSON.stringify(person)
    body: 'En Firs Clean-System result!'
  }
}