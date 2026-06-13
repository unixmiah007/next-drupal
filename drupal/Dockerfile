FROM dunglas/frankenphp:php8.4-bookworm

# Install system dependencies for PHP extensions and Composer
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libwebp-dev \
    libzip-dev \
    unzip \
    git \
    default-mysql-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql opcache zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy composer files first for better caching
COPY composer.json composer.lock ./

# Allow Composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER=1

# Install dependencies
RUN composer install --optimize-autoloader --no-scripts --no-interaction

# Copy the rest of the application
COPY . .

# Run any post-install scripts
RUN composer run-script post-install-cmd --no-interaction || true

# Ensure the install script is executable
RUN chmod +x /app/scripts/install-drupal.sh

# Expose the port Railway provides
EXPOSE ${PORT:-80}

# Start FrankenPHP — override SERVER_NAME at runtime so it binds to Railway's PORT
CMD ["sh", "-c", "SERVER_NAME=:$PORT frankenphp php-server --root /app/web"]
