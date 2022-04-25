# Live Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b7dacfc-3e8a-4d84-bf98-f062df195af0/deploy-status)](https://app.netlify.com/sites/spontaneous-gnome-50563c/deploys)
website Link: https://spontaneous-gnome-50563c.netlify.app

# Run App Locally

## ENV variables

```
  REACT_APP_API_URL="put api base url here."
  REACT_APP_TOKEN="token here"
```

for getting list of product, client make request with

### `REACT_APP_API_URL/ + functions/products`

so if your request endpoint is www.example.com/functions/products, you should set the env variable with https://www.example.com/

Don't share env variables in codebase or repo.

In the project directory, you can run with:

### `yarn start`
