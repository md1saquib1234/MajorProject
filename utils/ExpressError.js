class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  };
};

//Error handling in app.js
module.exports = ExpressError;