# app-nodejs-azure-flexbox

sin importancia

# version con vercel --prod

{
"version": 2,
"builds": [{
"src": "/src/index.js",
"use": "@vercel/node"
}],
"routes": [{
"src": "/",
"dest": "/src/index.js"
}]
}
