export default function(context) {
  console.log('[Middleware] auth')
  if (!context.app.store.getters['login/isAuthenticated']) {
    context.redirect('/admin/auth')
  }
}
