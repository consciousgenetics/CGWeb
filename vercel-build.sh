#!/bin/bash
set -e

# Build the Medusa project
echo "Building Medusa project..."
yarn build

# Create dist directory if it doesn't exist
echo "Creating dist directory..."
mkdir -p dist

# Copy the build output to dist
echo "Copying build output to dist..."
cp -r .medusa/server/* dist/

echo "Build completed successfully!"

# Create a symbolic link from dist to .medusa/server
ln -s .medusa/server dist

# Ensure the script is executable
chmod +x vercel-build.sh 