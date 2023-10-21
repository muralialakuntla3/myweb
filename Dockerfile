FROM nginx

# Remove the default NGINX index.html file
RUN rm -f /usr/share/nginx/html/*

# Copy the contents of the app directory into the NGINX web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]