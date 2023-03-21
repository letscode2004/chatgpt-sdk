# Use the official Node.js image as a parent image
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Specify the command to run when the container starts
CMD [ "node", "test.js" ]