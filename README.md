# stayconnected
ფრონტენდი   - React
ბექენდი	    - Django
მონიტორინგი - Prometheus
CI/CD       - Github Actions		  	  	 	

პროექტის გასაშვებათ საჭიროა ფრონტზე და ბექზე გავუშვათ შესაბამისი ბრძანებები>>>

ჯერ ვუშვებთ ბექენდს:
# 1. Create a virtual environment (venv)
python3 -m venv venv

# 2. Activate the virtual environment
source venv/bin/activate

# 3. Upgrade pip (optional, but recommended)
pip install --upgrade pip

# 4. Install dependencies from requirements.txt
pip install -r requirements.txt

# 5. Make Django migrations
python manage.py makemigrations

# 6. Apply migrations
python manage.py migrate

# 7. Run the Django development server
python manage.py runserver

შემდგომ ფრონტდენს:
npm install
npm run dev
