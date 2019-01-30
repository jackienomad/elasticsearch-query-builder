import { fetchShipments } from '~/api/controllers/search'
import express from 'express'
export const router = express.Router()
import { checkToken } from 'ig-library/src/middleware/tokenValidator'

router.get('/', checkToken, function(req, res) {
  res.json({ message: 'hooray! welcome to our api' })
})

router.post('/fetchShipments', checkToken, async (req, res, next) => {
  const result = await fetchShipments(req.body)
  res.json(result)
})
