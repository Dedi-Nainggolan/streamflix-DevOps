# Tahap 1: build frontend
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY frontend/package*.json ./frontend/
RUN npm install && npm install --prefix frontend
COPY frontend ./frontend
RUN npm run build --prefix frontend

# Tahap 2: image akhir
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev
COPY backend ./backend
COPY --from=build /app/frontend/dist ./frontend/dist
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:5000/ || exit 1
CMD ["node", "backend/server.js"]