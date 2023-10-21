# Use the official NGINX image as the base image
FROM nginx

# Create a working directory inside the container
WORKDIR /app

# Remove the default NGINX index.html file
RUN rm -f /usr/share/nginx/html/*

# Copy your web application files to the working directory inside the container
COPY . .

# Copy the contents of the working directory into the NGINX web root
RUN cp -r /app/* /usr/share/nginx/html/

# Expose port 80 (for documentation purposes)
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
