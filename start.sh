#!/bin/bash

# Run nginx
echo "start nginx"
nginx &

# Starting Node
echo "start node"
node /app/.build/server.js
