# Stage 1: Build the Vite frontend application
FROM node:18-alpine AS build_image

# Set working directory
WORKDIR /app/react-app

# Copy package.json and package-lock.json to install dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build


# Stage 2: Production stage (Use Nginx to serve static files)
FROM nginx:alpine AS production_image

# Copy Vite build output from the build stage to Nginx's html directory
COPY --from=build_image /app/react-app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
