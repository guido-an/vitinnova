import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Project = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '180px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>GLI OBBIETTIVI DI <span style={{ color: '#b00020' }}>PROGETTO</span></h1>
          <p>Gli obbiettivi generali e operativi di Vitinnova.</p>
        </div>
        <div>
          <h2>Obbiettivo generale</h2>
          <p>L’intento è quello di abbattere l’impiego di rame nei vigneti biologici, sostituendolo con prodotti alternativi di efficacia dimostrata, che necessitano di una messa a punto all’interno di specifiche condizioni aziendali e colturali.<br /><br /> Verranno monitorati lo sviluppo vegetativo, l’equilibrio vegeto-produttivo ed il decorso della maturazione delle uve, così da modulare gli interventi agronomici e mitigare gli effetti dei cambiamenti climatici, anche attraverso le tecniche di “precision farming”.<br /><br /> Inoltre, si propone la produzione di vino biologico a basso tenore o in assenza di solfiti, così da migliorare la qualità e la sicurezza del prodotto finito, per una dieta sana ed equilibrata.</p>
          <h2 style={{ marginTop: '80px' }}>Obbiettivi operativi</h2>
          <p>Il progetto VITINNOVA si propone di innovare le strategie di protezione antiperonosporica delle viti in biologico attraverso l’uso di sostanze alternative al rame, quali il chitosano, così da ottenere la produzione di vini con un uso ridotto o assente del pericoloso metallo pesante, che è noto accumularsi nei terreni vitati ed il cui apporto è soggetto a restrizioni, con limiti di utilizzo destinati a ridursi ulteriormente.<br /><br />
VITINNOVA vuole diffondere tecniche innovative di gestione della chioma del vigneto biologico capaci di limitare gli effetti del cambio climatico; applicare le tecniche di viticoltura di precisione attualmente disponibili al monitoraggio della vigoria e all’individuazione di aree omogenee su cui calibrare gli interventi per rendere il vigneto più uniforme (concimazione rateo-variabile) o per valorizzare la variabilità (vendemmia selettiva); migliorare lo stato sanitario e la maturità delle uve raccolte attraverso un capillare monitoraggio del decorso della maturazione, la scelta di opportuni interventi di gestione della chioma e una vendemmia più tempestiva grazie all’uso delle vendemmiatrici meccaniche anche nelle aree declivi.
            <br /><br /> Per ridurre o azzerare l’utilizzo dei solfiti e limitare il più possibile la produzione di idrogeno solforato da parte dei lieviti verranno impiegati gas criogenici (azoto liquido e/o CO2) per l'abbattimento istantaneo della temperatura e per limitare il contatto con l'ossigeno.<br /><br /> Sarà impiegato ozono per l’efficace sanitizzazione degli impianti e verranno, inoltre, impiegati due starter appartenenti alla specie Saccharomyces cerevisiae capaci di produrre quantità molto contenute di idrogeno solforato ed in possesso di profili aromatici superiori.

            <br /> <br />Azione 1. Limitare o annullare l’uso del rame in viticoltura biologica impiegando prodotti alternativi nella difesa antiperonosporica del vigneto destinato alla produzione di uva da vino
            <br /> <br />Azione 2. Ottimizzare gli interventi colturali (defogliazione, vendemmia) e l’uso di agrofarmaci e fertilizzanti con tecniche di precision farming (Moderna, Moncaro, Belisario, UNIVPM)
            <br /> <br />Azione 3. Applicare nuove tecniche colturali per l’adattamento al mutato contesto climatico in base al monitoraggio precoce del decorso della maturazione (Moderna, Moncaro, Belisario, UNIVPM)
            <br /><br />Azione 4. Sviluppo di tecnologie per la vinificazione di uve biologiche per vini senza solfiti aggiunti e basso contenuto di H2S
            <br /><br />Azione 5. Sviluppo di tecniche di vinificazione delle uve biologiche tali da ottenere vini a ridotto contenuto di solfiti
            <br /><br />Azione 6. Divulgazione delle attività del progetto
            <br /><br />Azione 7. Coordinamento e gestione amministrativa del G.O.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Project($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Project