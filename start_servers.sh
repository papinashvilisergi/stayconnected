#!/bin/bash

# Start Backend Server
cd /root/stayconnected/Sergi/group14_backend_collab || exit 1  # Change to the backend directory or exit if it fails
python3 manage.py runserver 0.0.0.0:8000 & disown

# Start Frontend Server
cd /root/stayconnected/Sergi/stay-connected || exit 1  # Change to the frontend directory or exit if it fails
npm start & disown
