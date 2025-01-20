<main>
	<section id="info">
		<h2>Il 1522</h2>
		<h3>Numero gratuito di pubblica utilità</h3>

		<p>
			Il <strong>1522</strong> è stato attivato nel 2006 dal
			<strong>Dipartimento per le Pari Opportunità</strong> con l'obbiettivo di sviluppare un'ampia azione
			di sistema per l'emersione e il contrasto del fenomeno della violenza intra ed extra familiare
			a danno delle donne. Nel 2009, con l'entrata in vigore della L.38/2009 modificata nel 2013 in tema
			di atti persecutori, ha iniziato un'azione di sostegno anche nei confronti delle vittime di stalking.
		</p>
		<p>
			Il numero di pubblica utilità 1522 è <strong>attivo 24 ore su 24</strong>, tutti i giorni
			dell'anno ed è accessibile dall'intero territorio nazionale gratuitamente, sia da
			<strong>rete fissa</strong>
			che <strong>mobile</strong>. L'accoglienza è disponibile in
			<strong>
				italiano, inglese, francese, spagnolo, arabo, farsi, albanese, russo ucraino, portoghese,
				polacco
			</strong>.
		</p>
		<p>
			Le operatrici telefoniche dedicate al servizio forniscono una prima risposta ai bisogni delle
			vittime di violenza di genere e stalking, offrendo informazioni utili e un orientamento verso
			i servizi socio-sanitari pubblici e privati presenti sul territorio nazionale ed inseriti
			nella mappatura ufficiale della <strong
				>Presidenza del Consiglio – Dipartimento Pari Opportunità</strong
			>. Il 1522, attraverso il supporto alle vittime, sostiene l'emersione della domanda di aiuto,
			con assoluta <strong>garanzia di anonimato</strong>. I casi di violenza che rivestono
			carattere di emergenza vengono accolti con una specifica procedura tecnico-operativa condivisa
			con le Forze dell'Ordine.
		</p>

		<a href="https://www.1522.eu/cose-1522/">Fonte</a>
	</section>
	<section id="features">
		<h2>Features</h2>

		<h3>RBAC</h3>
		<p>
			I permessi degli utenti sono gestiti tramite un sistema di Role-Based Access Control. I
			permessi sono definiti in <a
				href="https://github.com/Sebastiano-Racca/1522/blob/main/server_static/rbac/acl.yml"
				target="_blank">acl.yml</a
			>.
			<br />
			Se l'utente non è loggato verrà considerato <strong>GUEST</strong>
		</p>

		<h3>GDPR</h3>
		<p>
			La webapp è sviluppata in modo da rispettare le normative del GPDR:
			<br />
			Nessuno, nemmeno gli admin del sito, può impersonificare un utente già esistente; le password non
			sono salvate in chiaro e gli id delle sessioni sono salvati solo client-side.
			<br />
			I dati dei ticket sono accessibili solo a chiunque ne conosca il codice segreto.
		</p>

		<h3>Serverless Architecture</h3>
		L'applicazione utilizza un'architettura moderna per garantire performance e scalabilità:
		<ul>
			<li>
				<strong>SvelteKit</strong>: un framework reattivo e leggero per la costruzione di interfacce
				utente performanti.
			</li>
			<li>
				<strong>Neon</strong>: database provider per PostgreSQL, ottimizzato per il cloud e
				progettato per applicazioni moderne.
			</li>
			<li>
				<strong>Prisma</strong>: un potente ORM per interagire con il database in modo semplice e
				sicuro.
			</li>
			<li>
				<strong>Vercel</strong>: piattaforma di hosting serverless per distribuire e scalare
				rapidamente l'applicazione.
			</li>
		</ul>
	</section>
	<section id="credits">
		<h2>Crediti</h2>
		<p>
			Questo progetto è stato fatto da <a href="https://racca.me">Sebastiano Racca</a> per la sensibilizzazione
			contro la violenza sulle donne.
		</p>
		<p>
			Il progetto è stato creato come parte di un progetto scolastico di educazione civica, per
			mostrare le potenzialità e l'importanza di sensibilizzare su tematiche di utilità pubblica.
		</p>
		<p>
			Per ulteriori dettagli sul servizio 1522, visita il sito ufficiale:
			<a href="https://www.1522.eu" target="_blank">1522.eu</a>
		</p>
	</section>
</main>

<style lang="scss">
	main {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-family: Arial, sans-serif;
		line-height: 1.6;
		background-color: #f9f9f9;

		section {
			padding: 25px;
			border-radius: 12px;
			background-color: #ffffff;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			font-size: 1rem;
			color: #666;
			margin-bottom: 15px;

			transition:
				transform 0.2s,
				box-shadow 0.2s;

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
			}

			h2 {
				font-size: 2rem;
				font-weight: bold;
				text-transform: uppercase;
				color: #333;
				margin-bottom: 15px;
			}

			h3 {
				font-size: 1.25rem;
				font-weight: 500;
				text-transform: uppercase;
				color: #555;
				margin-bottom: 10px;
			}

			&#info h3 {
				margin-top: -10px;
				color: #444;
			}

			strong {
				color: #222;
				font-weight: 500;
			}

			a {
				display: inline-block;
				margin-top: 15px;
				font-size: 1rem;
				text-decoration: none;
				color: #007bff;
				font-weight: bold;
				transition: color 0.2s;

				&:hover {
					color: #0056b3;
				}
			}
		}
	}
</style>
