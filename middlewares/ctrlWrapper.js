const ctrlWrapper = (contacts) => {
  return async (req, res, next) => {
    try {
      await contacts(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = ctrlWrapper;
