export default function ({ store, redirect }) {
  if (!store.state.isAuthenticated) {
    return redirect('/auth/login')
  }
}
