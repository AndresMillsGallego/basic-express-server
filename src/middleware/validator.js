'use strict';

function validateName(request, response, next) {
  let userName = request.query.name;
  if (request.query.name) {
    response.status(200).send({name: userName});
  } else {
    next({status: 500, message: 'No name present in query'});
  }
}

module.exports = validateName;