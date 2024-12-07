# 📡 **StayConnected: Full-Stack Application**

🚀 **Frontend**: React (Vite)  
⚙️ **Backend**: Django (Gunicorn)  
📊 **Monitoring**: Prometheus  
🔄 **CI/CD**: GitHub Actions  

StayConnected is a full-stack web application powered by React and Django. It supports containerized deployment using Docker and features a robust monitoring system with Prometheus. This guide covers how to run the application both with and without Docker.

---

## ⚙️ **Technologies Used**
| **Component**       | **Technology**           |
|---------------------|-------------------------|
| **Frontend**        | React (Vite) - API-based |
| **Backend**         | Django (Gunicorn) - API-based |
| **Database**        | PostgreSQL               |
| **Proxy**           | Nginx                    |
| **Containerization**| Docker & Docker Compose  |
| **Monitoring**      | Prometheus               |
| **CI/CD**           | GitHub Actions           |

---

## 🚀 **Project Setup Instructions**
### 1️⃣ **Without Docker**
If you prefer to run the project **without Docker**, follow these instructions:

### 🖥️ **Backend Setup**
1. **Create a virtual environment**  
   ```bash
   python3 -m venv venv


# 1️⃣ ვირტუალური გარემოს შექმნა
python3 -m venv venv

# 2️⃣ ვირტუალური გარემოს აქტივაცია
source venv/bin/activate

# 3️⃣ Upgrade pip (optional, but recommended)
pip install --upgrade pip

# 4️⃣ Install dependencies
pip install -r requirements.txt

# 5️⃣ მიგრაციების შექმნა და დადასტურება
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

ფრონტის ბმული: http://localhost:8080
ბექის ბმული: http://localhost:8000
2️⃣ დოკერით გაშვების ინსტრუქცია
Run frontend, backend, Nginx, and PostgreSQL services using Docker Compose.

🚀 სრული დოკერით გაშვების ინსტრუქცია
Run the following commands from the root project directory (stayconnected/).


# 1️⃣ Stop and clean up any previous containers, volumes, and networks  გამორთეთ და წაშალეთ წინა კონტეინერები, ვოლუმები და ქსელები
docker compose down --volumes --remove-orphans

# 2️⃣ Build Docker images for backend, frontend, and other services დოკერ იმიჯის დაბილდვა ბექისთვის, ფრონტისთვის და სხვა სერვისებისთვის
docker compose build

# 3️⃣ Start the Docker containers in detached mode დოკერის კონტეინერის გაშვება დეტაჩდ მოუდში.
docker compose up -d
🔍 ლოგირება
კონტეინერების ლოგების სანახავად:

docker logs backend_container
docker logs frontend_container
docker logs nginx_container
docker logs postgres_db
📜 მონაცემთა ბაის მიგრაციების გაშვება
docker exec backend_container python manage.py makemigrations
docker exec backend_container python manage.py migrate
🗝️ Create Superuser (Optional)

docker exec -it backend_container python manage.py createsuperuser
💡 Note: These commands should be run in the root folder (stayconnected/) where the docker-compose.yml file is located.


🧪 ტესტირება
Run the following commands to check that everything is running smoothly.

docker logs backend_container
docker logs frontend_container
docker logs nginx_container
docker logs postgres_db
If the backend is working, you should see:

ბექი: http://localhost:8000/admin/
ფრონტი: http://localhost:8080
Full App (via Nginx): http://localhost/
🌐 CI/CD with GitHub Actions
This project includes a GitHub Actions CI/CD pipeline.  
Whenever you push to the main branch, the following tasks are triggered:

✅ ბილდი და ტესტირება: ვრწმუნდებით რომ პროექტი ეშვება ხარვეზების გარეშე
✅ Lint ტესტები: კოდი ილინტება დეფლოიმენტამდე
✅ Run ტესტები: ვრწმუნდებით რომ არცერთი ხარვეზი არაა პროდაქშენზე გაშვებამდე

საჭირო კომანდები:
git pull
git add .
git commit -m "Deploy new changes"
git push origin main
You can find the GitHub Actions workflow in .github/workflows/ci.yml.
docker ps	See all running containers
docker logs backend_container	View backend container logs
docker exec -it backend_container bash	Shell access into backend container
docker compose down	Stop all Docker containers
docker compose up -d	Start all services in detached mode
python manage.py createsuperuser	Create an admin superuser
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 კონტრიბუტორები D
DevOps - სერგი პაპინაშვილი, გივი შაფაქიძე
Team Developers >>> 
React სოფიკო იმნაიშვილი (TEAM LEAD)
React ანა ჟუჟუნაშვილი
React თორნიკე  სამხარაძე
React დავით ნანავა
Python advance	გეგა თვარაძე
Python advance	გიორგი მაისურაძე
iOS	სანდრო მარანელი
iOS	ილიკო კუკავა

⭐ ფიდბექები
If you have any issues or questions, feel free to create a GitHub issue or submit a pull request.

This README.md is a comprehensive guide to help you set up, run, and troubleshoot the StayConnected project. Let me know if you'd like any edits, improvements, or additional details! 🚀



ტექსტური ინსტრუქციები:
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
