FROM nginx

# Set the working directory to /app
WORKDIR /app

# Copy the contents of the current directory into the container's /app directory
COPY . .

# Remove the default NGINX index.html file
RUN rm /usr/share/nginx/html/index.html

# Copy the contents of the app directory into the NGINX web root
COPY app/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
