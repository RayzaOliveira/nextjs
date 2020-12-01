// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Obeter a connectionString do branco de Dados (MongoDB)
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
