# Use the Python 3.9 slim image as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all Python programs into the container
COPY . /app

# Make the Python files executable (optional step if needed)
RUN chmod +x *.py

# Set the default command to start a bash shell
CMD ["/bin/bash"]
