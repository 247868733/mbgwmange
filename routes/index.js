const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  console.log(ctx)
  ctx.body = 'koa2 string'
})

router.post('/json', async (ctx, next) => {
  let postParam = ctx.request.body //获取post提交的数据
  console.log(postParam)
  ctx.body = {
    title: '猪儿虫'
  }
})
router.put('/put', async (ctx, next) => {
  let postParam = ctx.request.body //获取post提交的数据
  console.log(postParam)
  ctx.body = {
    title: '猪儿虫'
  }
})
router.delete('/delete/:id', async (ctx, next) => {
  let postParam = ctx.request.body //获取post提交的数据
  console.log(postParam)
  ctx.body = {
    title: '猪儿虫'
  }
})
module.exports = router
