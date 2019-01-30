const express = require('express')
const bodyParser = require('body-parser')
import { router as searchRouter } from '~/api/routes/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT

const router = express.Router()

router.use(function(req, res, next) {
  console.log("something is happening"); // eslint-disable-line
  next()
})

app.use('/', searchRouter)
app.use('/search', searchRouter)

app.use('/api', router)

app.listen(port)
console.log("Magic happens on port " + port); // eslint-disable-line
