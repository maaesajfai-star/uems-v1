# Development Dockerfile for NestJS API
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy dependency definitions
COPY apps/api/package*.json ./
COPY apps/api/prisma ./prisma/

# Install dependencies
RUN npm install

# Copy source code (will be overridden by volume in dev, but good for build)
COPY apps/api .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "run", "start:dev"]
