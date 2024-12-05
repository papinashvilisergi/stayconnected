# Step 1: Build the frontend
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files and build the app
COPY . ./
RUN npm run build

# Step 2: Serve the frontend
FROM nginx:alpine

# Copy the build folder from the previous step to nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the frontend to be accessible
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
