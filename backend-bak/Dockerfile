# Use an official Python image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Recreate the missing sources list
RUN echo "deb https://deb.debian.org/debian bookworm main contrib non-free" > /etc/apt/sources.list \
    && echo "deb https://deb.debian.org/debian bookworm-updates main contrib non-free" >> /etc/apt/sources.list \
    && echo "deb https://deb.debian.org/debian-security bookworm-security main contrib non-free" >> /etc/apt/sources.list

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends libpq-dev gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput || echo "No static files to collect"

# Expose the Gunicorn port
EXPOSE 8000

# Start Gunicorn server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "cfcollab.wsgi:application"]
