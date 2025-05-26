# Stage 1: Install dependencies
FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production

# Stage 2: Runtime image
FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 8080
ENV PORT 8080

HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --quiet --spider http://localhost:8080/health || exit 1

CMD ["npm", "start"]


