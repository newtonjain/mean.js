(function (app) {
  

  app.registerModule('chat', ['core']);
  app.registerModule('chat.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
