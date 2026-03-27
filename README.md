# ToDo's – Tehtävienhallintasovellus

**Tekijä:** [Sofiya Sakhchinskaya]

## Verkkolinkit

- 🌐 **Sovellus verkossa:** [(https://todoapp-ssofiyas.netlify.app/)](https://google.com)


## Työn jakautuminen

Koska tein projektin yksin, vastasin kaikesta itse: suunnittelusta, koodauksesta, testauksesta, dokumentoinnista ja videon teosta. Työ eteni johdonmukaisesti ja opin valtavasti.

## Oma arvio työstä ja osaamisen kehittymisestä

**Mielestäni onnistuin**  
- Rakentamaan toimivan ja selkeän kokonaisuuden ilman ulkoisia kirjastoja.  
- Hyödyntämään monipuolisesti DOM-skriptausta: elementtien luonti, muokkaus, poisto ja tapahtumankuuntelijat.  
- Lisäämään ekstraominaisuuksia, kuten edistymispalkin, analytiikan, päiväkirjan ja motivoivan aloitusikkunan.  
- Pitämään koodin ymmärrettävänä ja johdonmukaisena.  

**Parantamista olisi**  
- Sovellus ei ole kovin responsiivinen, se toimii parhaiten työpöytäkokoisella näytöllä (yritän tuoda muutoksia tälle asialle).  
- Olisin voinut lisätä virheiden näyttämisen hienovaraisemmin kuin `alert` viesteillä.  
 
**Sovelluksesta jäi puuttumaan**  
- Suodatuspainikkeet (näytä vain aktiiviset / vain tehdyt).  
- Tehtävien muokkausmahdollisuus.  

**Koen, että olen oppinut**  
- DOMin käsittelyn perusteet ja sen, miten JavaScriptillä luodaan dynaamista sisältöä.  
- Lomakkeiden hallinnan ja syötteiden validoinnin tärkeyden.  
- Paikallistallennuksen (localStorage) hyödyntämisen käytännössä.  
- Sen, miten sovellus pidetään toiminnassa ilman sivulatauksia (SPA-tyylinen toiminta).  

**Epäselväksi jäi**  
Aluksi tuntui vaikealta hallita usean listan tilaa ja niiden välistä analytiikkaa, mutta harjoittelemalla se selkeni.  

**Antaisin itselleni pisteet:** 10/10  
Perustelen tätä sillä, että sovellus täyttää kaikki vaatimukset, toimii moitteettomasti, ulkoasu on viimeistelty, koodi on kommentoitu ja se on julkaistu sekä GitHubissa että Netlifyssa. Lisäksi olen tehnyt videodemon.

## Palaute opettajalle kurssista

Kurssi on erittäin hyödyllinen ja kiva, että käydän asioita yksityiskohdissa. Materiaalit ovat selkeitä ja helposti löydettävissä. DOM-skriptaus ja lomakkeet tulivat tutuiksi.

---

## Sisällysluettelo

- [ToDo's – Tehtävienhallintasovellus](#todos--tehtävienhallintasovellus)
  - [Verkkolinkit](#verkkolinkit)
  - [Työn jakautuminen](#työn-jakautuminen)
  - [Oma arvio työstä ja osaamisen kehittymisestä](#oma-arvio-työstä-ja-osaamisen-kehittymisestä)
  - [Palaute opettajalle kurssista](#palaute-opettajalle-kurssista)
  - [Sisällysluettelo](#sisällysluettelo)
  - [Tietoja sovelluksesta](#tietoja-sovelluksesta)
  - [Tunnetut virheet/bugit](#tunnetut-virheetbugit)
  - [Kuvakaappaukset](#kuvakaappaukset)
  - [Teknologiat](#teknologiat)
  - [Asennus](#asennus)

## Tietoja sovelluksesta

**ToDo's** on selaimessa toimiva tehtävänhallintasovellus, jossa käyttäjä voi luoda useita listoja (kansioita) ja hallita niiden tehtäviä.

**Keskeiset ominaisuudet:**  
- Useiden listojen luonti, valinta ja poisto  
- Tehtävien lisäys, poisto ja merkitseminen tehdyksi pyöreällä pallerolla  
- Syötteiden validointi (vähintään 2 merkkiä) ja virheiden korostus punaisella  
- Edistymispalkki jokaiselle listalle  
- Yhteenvetonäkymä: listojen määrä, tehtävät yhteensä, tehdyt tehtävät ja kokonaissuoritusprosentti  
- Päiväkirja-/viikkosuunnitelma-osio, joka tallentuu automaattisesti  
- Motivoiva aloitusikkuna, joka näyttää satunnaisen lainauksen tunnetuilta ajattelijoilta  
- Tietojen tallennus selaimen localStorageen – tiedot säilyvät sivun sulkemisen jälkeen

## Tunnetut virheet/bugit

- Sovellus on suunniteltu työpöytäkäyttöön; mobiilissa ulkoasu ei ole optimaalinen.  
- Hyvin pitkät tehtävänkuvaukset eivät rivity kauniisti sivupalkissa.  
- Jos listoja on paljon, sivupalkkiin ei tule vieritystä (tämä on tietoinen valinta yksinkertaisuuden vuoksi).

## Kuvakaappaukset

Lisää tähän vähintään yksi kuvakaappaus toimivasta sovelluksesta:

`![Päänäkymä](./screenshot.png)`

(Ota kuvakaappaus ja tallenna se projektin juureen nimellä `screenshot.png`.)

## Teknologiat

Projekti on toteutettu ainoastaan seuraavilla natiivitekniikoilla:

- **HTML5** – sivun rakenne  
- **CSS3** – ulkoasu ja tyylit (ei ulkoisia kirjastoja)  
- **JavaScript (ES6+)** – kaikki toiminnallisuus, kuten:  
  - DOM-skriptaus (`createElement`, `appendChild`, `classList`, `addEventListener` jne.)  
  - Lomakkeiden käsittely ja validointi  
  - localStorage datan tallennus ja luku  
  - Modaalisen motivaatioikkunan hallinta

## Asennus

Sovellus on täysin staattinen, joten se ei vaadi asennusta tai build vaihetta.
