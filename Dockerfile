# Build stage
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Final stage
FROM node:20-slim

WORKDIR /app

# Copy built files and package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/README.md ./
COPY --from=builder /app/LICENSE ./

# For a library, we don't necessarily have a CMD, 
# but we can provide a default one that shows the version
CMD ["node", "-e", "console.log(require('./package.json').name + ' v' + require('./package.json').version)"]
