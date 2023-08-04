#!/bin/bash
export NODE_ENV=$1

clear
npm run build
node ./dist/app.js