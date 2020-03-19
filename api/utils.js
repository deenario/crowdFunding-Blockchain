const _ = require("lodash");

exports.generateOffset = (limit, page) => {
  const offset = (page > 0) ? (page - 1) * limit : 0;
  return Number(offset);
};

exports.validate = (fields, req) => {
  let errorCount = 0;
  _.forEach(fields, (field) => {
    if (req[field] === '' || req[field] === null) {
      errorCount++;
    }
  });
  return errorCount === 0;
};
