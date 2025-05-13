FROM node:18

# Set the working directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install all dependencies (including dev) so sqlite3 builds correctly
RUN npm install

# Rebuild sqlite3 to ensure it's compatible with Linux
RUN npm rebuild sqlite3

# Copy all remaining app code
COPY . .

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]