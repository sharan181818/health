# Use the official Node.js image as the base image
FROM node:20

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install



# Copy the rest of the Next.js app source code to the container
COPY . .

RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Define the command to start the app
CMD ["npm","run", "start"]

