# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.19.0

################################################################################
# Use Node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing dependencies.
FROM base AS deps

# Install all dependencies (including devDependencies)
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Copy the source files into the image.
COPY . .

# Run the build script.
RUN npm run build

################################################################################
# Use Nginx to serve the built application.
FROM nginx:alpine AS final

# Copy the built application from the build stage into Nginx's html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port that the application listens on.
EXPOSE 80

# The Nginx server will start automatically when you run the container.
CMD ["nginx", "-g", "daemon off;"]
