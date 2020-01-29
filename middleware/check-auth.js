export default function(context) {
  console.log('[Middleware] check-auth')
  context.store.dispatch('login/initAuth', context.req)
}
