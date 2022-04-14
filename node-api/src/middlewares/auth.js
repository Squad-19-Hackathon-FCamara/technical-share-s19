const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  // Ausência de token
  if (!authHeader) return res.status(401).send({ error: 'No token provided' })

  const parts = authHeader.split(' ')

  // Testa se existem duas partes no token.
  if (!parts.length === 2) return res.status(401).send({ error: 'Token error' })

  const [scheme, token] = parts

  // Testa o valor do token: Bearer + Código hash
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token malformatted' })

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    // Verifica se o token existe
    if (err) return res.status(401).send({ error: 'Token invalid' })

    req.userId = decoded.id
    return next()
  })
}
