# Threat Miner for SDL

A security tool that uses web scraping and machine learning to identify threats.

## Prerequisites
1. A [Python 2 >= 2.7.9 and Pip](https://github.com/BurntSushi/nfldb/wiki/Python-&-pip-Windows-installation) installation
2. A [Git installation](https://git-scm.com/downloads)
3. Install [Node JS and NPM](https://www.npmjs.com/get-npm)
4. install bower: `npm i -g bower`
5. A running web server. To run a MySQL web server locally, install [WAMP](http://www.wampserver.com/en/) if running on Windows, or install [XAMPP](https://www.apachefriends.org/index.html) if running on MAC/Linux

## Installation
```no-highlight
    git clone https://github.com/intel/threatminer-for-sdl
    cd threatminer-for-sdl
    pip install -r requirements.txt
    cd client
    npm install && bower install
```

## Setup
```no-highlight
    setup.py
```
A prompt will present itself. Enter the following values:
```no-highlight
    Host: localhost
    Username: root
    Password:
    DB: threat_intelligence_db
    Charset: utf8
    port: 3306
```
Run database migrations:
```no-highlight
    cd server/database
    python database.py db init
    python database.py db migrate
    python database.py db upgrade
```

If running windows:
```no-highlight
    cd server
    set FLASK_APP=run.py
    set FLASK_ENV=development
```

If running Linux
```no-highlight
    cd server
    export FLASK_APP=run.py
    export FLASK_ENV=development
```

## Usage
Run the RestAPI:
```no-highlight
    cd server
    flask run
```
Open a new terminal and run the client server:
```no-highlight
    cd client
    gulp serve
```
