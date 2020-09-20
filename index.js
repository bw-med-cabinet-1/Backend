const server = require('./api/server')
const chalk = require('chalk')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(chalk.blue(`\n*** Server listening on port ${PORT} ***\n`))
}) 