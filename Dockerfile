# 1. Base image with Node + all Playwright browsers
FROM mcr.microsoft.com/playwright:v1.47.0-jammy

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json + package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy your Playwright tests
COPY . .

# 6. Run Playwright tests
CMD ["npx", "playwright", "test", "--reporter=html"]
