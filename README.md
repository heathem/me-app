### Steps to initialize project

# Virtual env setup
virtualenv env
C:\Users\mckin\me-app\env\Scripts\activate

# Create backend
pip install djangorestframework
django-admin startproject api
cd api
python manage.py startapp mysite
python manage.py createsuperuser
python manage.py runserver (to start)
deactivate

# Create frontend
npx create-react-app frontend
npm start (to start)

# Set up styling
npm install -D tailwindcss
npx tailwindcss init

### Resources
https://www.youtube.com/watch?v=fhch7UvdfnU
https://www.django-rest-framework.org/tutorial/quickstart/
https://create-react-app.dev/
https://tailwindcss.com/docs/guides/create-react-app
