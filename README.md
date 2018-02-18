# Vincit koodarijahti 2018
# Idea
Palautukseni ennakkotehtävään on oikeastaan vaihtoehto A), mutta koska olen äärimmäisen kiinnostunut backend-puolella tapahtuvista asioista, päätin laittaa vähän bonusta mukaan.
Omissa opinnoissa sattui juuri sopivasti olemaan UI-asioihin paneutuva kurssi, joten päätin yhdistää nämä kaksi.

Käytän siis valmiina annettua palvelinta, mutta kontitin sen Docker-konttiin. 

# Web-käyttöliittymästä
Tein tätä projektia myös "web-käyttöliittymät" nimiselle opintojaksolle AMK:iin, joten verkkosivusto on vähän laajempi kuin Te toivoitte tehtävänannossa. Tein kuitenkin Teille tärkeät toiminnallisuudet yhdelle sivulle, jolloin se toimii haluamananne singlepagena.

# Käyttäminen
Aja server kansiossa "npm install" ja "npm start".

TAI, jos käytössä on Docker-ohjelmisto, aja server kansiossa "docker build -t serveri ." ja "docker run --name serv -p 8081:8081 serveri".
Kontin saa suljettua komennolla "docker stop serv".

&copy; Olli Ritari 2018