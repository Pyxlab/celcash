/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import cel_cash from '@cel_cash/adonisjs/services/main'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/plans', async ({ request, response }) => {
  const { limit = 10, startAt = 0 } = request.qs()

  const result = await cel_cash.plans.list({
    query: {
      limit: +limit,
      startAt: +startAt,
    },
  })

  if (result.status !== 200) {
    return response.status(result.status).json(result.body)
  }

  return result.body.Plans
})
