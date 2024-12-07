# Use Node 20 to match required engine (not Alpine)
FROM node:20 AS build_image

# Set working directory
WORKDIR /app/react-app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20 AS production_image

# Set working directory
WORKDIR /app/react-app

# Copy build output, package.json, and package-lock.json from the build stage
COPY --from=build_image /app/react-app/dist/ /app/react-app/dist/
COPY --from=build_image /app/react-app/package.json /app/react-app/
COPY --from=build_image /app/react-app/package-lock.json /app/react-app/

# Remove the prepare script from package.json
RUN npm pkg delete scripts.prepare

# Install only production dependencies
RUN npm install --omit=dev

# Make sure dist folder is accessible
RUN chmod -R 755 /app/react-app/dist

# Expose port for production
EXPOSE 8080

# Default command (listen on 0.0.0.0, not localhost)
#CMD ["npx", "vite", "preview", "--host", "0.0.0.0"]
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "8080"]
