FROM node

WORKDIR /usr/app

COPY package.json ./

RUN apt-get update -qqy \
    && apt-get -qqy install google-chrome-stable

# Install the Selenium drivers
RUN apt-get -y install unzip
RUN wget https://chromedriver.storage.googleapis.com/84.0.4147.30/chromedriver_linux64.zip -P /usr/local/bin
RUN unzip /usr/local/bin/chromedriver_linux64.zip -d /usr/local/bin

# Configure the Chrome executable
ENV CHROME_BIN /usr/bin/google-chrome-stable

# Configure the ChromeDriver executable
ENV CHROME_DRIVER /usr/local/bin/chromedriver

# Add the Chrome user
RUN groupadd -r chrome && useradd -r -g chrome -G audio,video chrome \
    && mkdir -p /home/chrome && chown -R chrome:chrome /home/chrome


RUN npm install

COPY . .


EXPOSE 3000

CMD ["npm", "start"]

CMD ["npm","test"]

CMD tail -f /dev/null
