# Use the official Node.js 18 image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files first to leverage Docker's cache
COPY package.json package-lock.json ./

# Install all dependencies (including the ones needed for the build)
RUN npm install

# Copy the rest of your application code.
# This ensures 'locales', 'public', 'components', etc., are all included.
COPY . .

# Build your Next.js application for production
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# The command to start the app.
# The '--' passes the '-H 0.0.0.0' argument to the 'next start' command.
# This is crucial for Docker to expose the app correctly.
CMD [ "npm", "start", "--", "-H", "0.0.0.0" ]