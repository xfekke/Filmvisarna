Vad testar vi?

Chalil har fokuserat på att testa bokningsbekräftelsen så den fungerar korrekt samt har rätt information som till exempel boknings id,  film samt tid och datum. Han har även testat så att användare med registrerade konton kan logga in samt med negativa scenarier som tar hänsyn till om användaren matar in fel uppgifter. 

Mitar har testat de bokningar användaren gjort som finns på “Min sida” samt bokningshistoriken som också syns där. Han skrev testen för att se att filtreringen av filmerna baserad på ålder fungerar och även filmdetaljer syns som det ska.

Joakim har testat prissystemet (det moment när man ändrar på antal biljetter på de olika prisklasserna) men även skrivit tester för att trailers för filmerna fungerar ordentligt. 

Albin har skrivit test för att boka säten för specifika visningar av film samt bekräftat att det är korrekt säten. De test försöker boka 1 plats, 3 platser samt en loop för att boka alla resterande platser som finns kvar. Han har även testat att de olika sidorna har en unik URL genom att spara dem som variabler som sedan kan jämföras med varandra. 

Sebastian har skrivit ett test för att se att det finns tillgängliga sätet samt ett negativt scenario som tillhör där den kollar om visningen är fullbokad. Tillhörande test kollar så att det inte går att boka platser som redan blivit bokade av någon innan. Han har även skrivit ett test som loggar in för att avboka en visning, avboka resterande bokningar samt kollar så alla visningar är avbokade efter. 

Vad visar testerna på? 

Flera test visade att hemsidan är väldigt långsam på att boka platser samt att det inte finns någon indikation på att bokningen laddas. Alla våra test visade att hemsidan fungerar, det fanns bokningar att se på “Min sida”, det gick att avboka, man kunde se trailers för filmerna, man kan logga in och så vidare. Våra negativa scenarier har visat att hemsidan tar hänsyn till användaren kan skriva in fel information eller om biosalongen är fullbokad till exempel. 

Finns det buggar/fel i produkten?

Den enda buggen vi upptäckt som direkt hindrar användaren är att alla säten i salongen försvinner efter en liten tid och att sidan måste laddas om. Däremot fanns flera förbättringsområden som att ibland gick det inte att boka flera olika prisklasser samtidigt bredvid varandra.

Finns det saker vi inte hann testa?

Som systemägare vill jag se en prototyp med minst 5 filmer, fördelade med minst 30 (fiktiva) visningsdatum över våra 2 biografsalonger. Som besökare vill jag kunna registrera ett nytt konto för att sedan kunna logga in.

Finns det tester det kan finnas felaktigheter/brister i själva step-definitions koden? I så fall vilka?

Vi skulle kunna gjort vissa step-definitions tydligare samt även test-koden mer komprimerad och bättre. Det test med att boka hela salongen skulle kunnat göras om så att det bokades så många det gick hela tiden men det hade tagit för lång tid och varit för svårt. Om vi hade planerat hur alla olika features hängt ihop innan vi började så hade vi bara sparat tid men även haft mer effektiva och tydliga step-definitions.