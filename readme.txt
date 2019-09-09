WRAPPI app
copyright 2019 Roman Tuomisto & Pauliina Veijalainen

Wrappi app on matemaattisia laskutoimituksia sisältävä fullstack web appi, 
joka on toteutettu NodeJS, ReactJS ja MySql teknologioita hyödyntäen.

sen tarkoitus on auttaa peruskoululaisia oppimaan matemaattisia 
laskutaitoja koulun matematiikan tuntien ohella.

App vaatii toimiakseen 

.env tiedoston, jota ei ole tässä kyseisessä github repossa turvallisuus syistä.
se teidän tulee itse luoda ja määritellä.
sen sisältöön kuuluu seuraavat NodeJS prosess.env muuttujat

PORT = 
IP = 0.0.0.0 tai vastaava 
SECRET = tämä on secret jota vaatii JWT kirjasto

kun olet kloonannut apin, sinun tulle ajaa 

npm install komento ensin samassa kansiossa missä on server.js tiedosto,
mutta vasta sitten kun olet luonut .env tiedosto samaan kansioon missä server.js tiedosto on.

Tämän jälkeen voit mennä komennolla cd wrappi-client kansioon ja suorittaa siellä myös npm install 
komennon.

sen jälkeen palata takaisin cd .. komennolla ja startata node prosessin ja react frontend dev serverin 
yhdellä komennolla npm run dev

Happy Coding!!!
