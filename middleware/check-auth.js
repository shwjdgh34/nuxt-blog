export default function(context) {
  console.log('[Middleware] check-auth')
  console.log('nono - client', process.client)
  if (process.client) {
    context.store.dispatch('login/initAuth')
  }
}
