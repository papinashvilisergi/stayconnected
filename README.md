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
