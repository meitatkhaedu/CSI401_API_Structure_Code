# Dockerfile

# Using the Node.js base image
FROM node:22.9.0

# Set Working Directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Include and Install dependencies
RUN yarn

# Copy all project files into container
COPY . .

# Set ENV when you use ENV file
ENV PORT=55100
ENV ConnectionString=mongodb://mongo:27017/yourDatabaseName

# Running Port or Default Port
EXPOSE 55100

# Start Command
CMD ["yarn", "nodemon"]
