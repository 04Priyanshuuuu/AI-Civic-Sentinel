from pathlib import Path
import os
import dj_database_url

# -------------------------
# BASE DIR
# -------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# -------------------------
# SECURITY
# -------------------------
SECRET_KEY = os.getenv("SECRET_KEY", "unsafe-secret-key")

DEBUG = False

ALLOWED_HOSTS = ["*"]

# -------------------------
# APPLICATIONS
# -------------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'complaints',

    'cloudinary',
    'cloudinary_storage',
]

# -------------------------
# MIDDLEWARE
# -------------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # IMPORTANT
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# -------------------------
# CORS
# -------------------------
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True

# -------------------------
# URLS
# -------------------------
ROOT_URLCONF = 'server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'server.wsgi.application'

# -------------------------
# DATABASE
# -------------------------
DATABASES = {
    "default": dj_database_url.config(
        default=f"sqlite:///{BASE_DIR / 'db.sqlite3'}"
    )
}

# -------------------------
# PASSWORD VALIDATION
# -------------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# -------------------------
# I18N
# -------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# -------------------------
# STATIC FILES (🔥 FIX HERE 🔥)
# -------------------------
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# -------------------------
# MEDIA (CLOUDINARY)
# -------------------------
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

CLOUDINARY_STORAGE = {
    'CLOUD_NAME': os.getenv("CLOUDINARY_CLOUD_NAME"),
    'API_KEY': os.getenv("CLOUDINARY_API_KEY"),
    'API_SECRET': os.getenv("CLOUDINARY_API_SECRET"),
}

# -------------------------
# DEFAULT PK
# -------------------------
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
