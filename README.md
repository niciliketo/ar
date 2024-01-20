# 🚀 AR test project

To bundle the application (output to /dist)

```
yarn build
```

To run in development
```
yarn webpack-dev-server
```

# Dokku
This contains config to deploy to dokku. Couple of things to note.
1. you will need dokku setup , along with the nginx plugin :-)
2. The static site outputs to /dist . To tell dokku about this:
```
dokku config:set <dokku_app_name> NGINX_ROOT=dist
```

TODO:
1. dokku builds the app twice
