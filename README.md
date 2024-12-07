StayConnected: Full-Stack Application
🚀 Frontend: React (Vite)
⚙️ Backend: Django (Gunicorn)
📊 Monitoring: Prometheus
🔄 CI/CD: GitHub Actions

This project is a full-stack web application that integrates React (frontend) with Django (backend), all containerized using Docker. It also incorporates monitoring with Prometheus and CI/CD using GitHub Actions.

🛠️ Project Structure
lua
Copy code
stayconnected/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── manage.py
│   └── cfcollab/
├── frontend/
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── package.json
│   └── src/
├── docker-compose.yml
├── nginx.conf
└── README.md
⚙️ Technologies Used
Service	Technology
Frontend	React (Vite)
Backend	Django (Gunicorn)
Database	PostgreSQL
Proxy	Nginx
Containerization	Docker & Docker Compose
Monitoring	Prometheus
CI/CD	GitHub Actions
🚀 How to Run the Project
1️⃣ Running Without Docker
If you prefer to run the backend and frontend without Docker, follow these instructions.

🖥️ Backend Setup
bash
Copy code
# 1️⃣ Create a virtual environment
python3 -m venv venv

# 2️⃣ Activate the virtual environment
source venv/bin/activate

# 3️⃣ Upgrade pip (optional, but recommended)
pip install --upgrade pip

# 4️⃣ Install dependencies
pip install -r requirements.txt

# 5️⃣ Make and apply migrations
python manage.py makemigrations
python manage.py migrate

# 6️⃣ Run the Django development server
python manage.py runserver
🖥️ Frontend Setup
bash
Copy code
# 1️⃣ Navigate to the frontend directory
cd frontend

# 2️⃣ Install Node.js dependencies
npm install

# 3️⃣ Run the Vite development server
npm run dev
Once running, visit:

Frontend: http://localhost:8080
Backend: http://localhost:8000
2️⃣ Running with Docker
Run frontend, backend, Nginx, and PostgreSQL services using Docker Compose.

🚀 Full Dockerized Version
Run the following commands from the root project directory (stayconnected/).

bash
Copy code
# 1️⃣ Stop and clean up any previous containers, volumes, and networks
docker compose down --volumes --remove-orphans

# 2️⃣ Build Docker images for backend, frontend, and other services
docker compose build

# 3️⃣ Start the Docker containers in detached mode
docker compose up -d
🔍 Check Logs
To view container logs, run:

bash
Copy code
docker logs backend_container
docker logs frontend_container
docker logs nginx_container
docker logs postgres_db
📜 Run Database Migrations
bash
Copy code
docker exec backend_container python manage.py makemigrations
docker exec backend_container python manage.py migrate
🗝️ Create Superuser (Optional)
bash
Copy code
docker exec -it backend_container python manage.py createsuperuser
💡 Note: These commands should be run in the root folder (stayconnected/) where the docker-compose.yml file is located.

📂 File Descriptions
File/Folder	Description
docker-compose.yml	Main Docker Compose file for all services
nginx.conf	Nginx configuration for proxying requests to frontend and backend
backend/	Django backend code and Dockerfile
frontend/	React (Vite) frontend code and Dockerfile
backend/Dockerfile	Dockerfile for the Django backend
frontend/Dockerfile	Dockerfile for the React frontend
requirements.txt	Python dependencies for the backend
package.json	NPM dependencies for the frontend
📢 Key Ports
Service	Port	Description
Frontend	8080	React app (Vite)
Backend	8000	Django API (Gunicorn)
Nginx	80	Proxy for backend and frontend
PostgreSQL	5432	Database for Django backend
📊 Environment Variables
Variable	Default Value	Required?
SECRET_KEY	django-insecure-key	✅ Yes
DEBUG	1 (for development)	✅ Yes
DB_NAME	collabdb	✅ Yes
DB_USER	postgres	✅ Yes
DB_PASSWORD	postgres	✅ Yes
DB_HOST	db	✅ Yes
DB_PORT	5432	✅ Yes
📸 Project Screenshots
Add screenshots of the running app, like login, home page, etc.

🧪 Testing
Run the following commands to check that everything is running smoothly.

bash
Copy code
docker logs backend_container
docker logs frontend_container
docker logs nginx_container
docker logs postgres_db
If the backend is working, you should see:

Backend: http://localhost:8000/admin/
Frontend: http://localhost:8080
Full App (via Nginx): http://localhost/
🌐 CI/CD with GitHub Actions
This project includes a GitHub Actions CI/CD pipeline.
Whenever you push to the main branch, the following tasks are triggered:

✅ Build & Test: Ensures the app builds without errors.
✅ Run Lint Checks: Code is linted before deployment.
✅ Run Tests: Ensures no tests fail before deploying.
To trigger CI/CD, push to the main branch:

bash
Copy code
git add .
git commit -m "Deploy new changes"
git push origin main
You can find the GitHub Actions workflow in .github/workflows/ci.yml.

🤔 Common Issues & Troubleshooting
Problem	Solution
502 Bad Gateway on http://localhost	Make sure the Nginx container is running and proxying correctly. Check docker logs nginx_container.
Can't access localhost:8080	Ensure the Vite server is running (npm run dev) or check docker logs frontend_container.
PostgreSQL connection error	Verify database container is up and accessible on port 5432. Check docker logs postgres_db.
Error when running python manage.py	Make sure you have run migrations (python manage.py migrate).
Nginx can't find static files	Run python manage.py collectstatic inside the container.
📚 Useful Commands
Command	Description
docker ps	See all running containers
docker logs backend_container	View backend container logs
docker exec -it backend_container bash	Shell access into backend container
docker compose down	Stop all Docker containers
docker compose up -d	Start all services in detached mode
python manage.py createsuperuser	Create an admin superuser
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Contributors
Your Name - Project Lead
Other Contributors - Full-stack Developers
⭐ Support & Feedback
If you have any issues or questions, feel free to create a GitHub issue or submit a pull request.

This README.md is a comprehensive guide to help you set up, run, and troubleshoot the StayConnected project. Let me know if you'd like any edits, improvements, or additional details! 🚀




# stayconnected
ფრონტენდი   - React
ბექენდი	    - Django
მონიტორინგი - Prometheus
CI/CD       - Github Actions		  	  	 	

პროექტის გასაშვებათ საჭიროა ფრონტზე და ბექზე გავუშვათ შესაბამისი ბრძანებები>>>

ჯერ ვუშვებთ ბექენდს:
# 1. ვქმნით ვირტუალურ გარემოს (venv)
python3 -m venv venv

# 2. ვააქტიურებთ ვირტუალურ გარემოს
source venv/bin/activate

# 3. ვანახლებთ pip-ს (სურვილისამებრ, თუმცა სასურველია)
pip install --upgrade pip

# 4. ვაყენებთ დეფენდენსებს
pip install -r requirements.txt

# 5. ვაკეთებთ მიგრაციებს
python manage.py makemigrations

# 6. ვადასტურებთ მიგრაციებს
python manage.py migrate

# 7. ვუშვებთ ჯანგოს დეველოპმენტ სერვერს
python manage.py runserver

შემდგომ ფრონტდენს:
npm install
npm run dev

for dockerized version (backend)
# Stop everything
docker compose down --volumes --remove-orphans

# Rebuild everything
docker compose build

# Start all services
docker compose up -d

# Check container logs
docker logs backend_container

# Apply migrations
docker exec backend_container python manage.py makemigrations
docker exec backend_container python manage.py migrate

# Create superuser (optional)
docker exec -it backend_container python manage.py createsuperuser
