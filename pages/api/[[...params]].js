const handler = (req, res) => {
  const { params } = req.query;
  res.status(200).json(params);
};
export default handler;
