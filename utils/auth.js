module.exports = (req) => {
    const token = req.headers.authorization || '';
    if (token !== 'Bearer your-secure-token') {
      throw new Error('Unauthorized');
    }
  };
  