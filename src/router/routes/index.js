const modulesContext = require.context('.', false, /^(?!.*[/\\](index)\.js).*\.(js|vue)$/)
const routes = modulesContext.keys().reduce((modules, key) => modules.concat(modulesContext(key).default), [])

routes.push({
  path: '*',
  redirect: '/404'
})

export default routes
