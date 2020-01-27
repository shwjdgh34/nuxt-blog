export default function(context) {
  if (!context.app.store.getters['login/isAuthenticated']) {
    context.redirect('/admin/auth')
  }
}
