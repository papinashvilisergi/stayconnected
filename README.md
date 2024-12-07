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
