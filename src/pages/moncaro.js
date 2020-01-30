import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Moncaro = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
          <h1>TERRE CORTESI <span style={{ color: '#b00020' }}>MONCARO</span></h1>
        </div>
        <p> 
        La Terre Cortesi Moncaro Società Cooperativa Agricola costituita il 12.03.1964, ha iniziato la sua attività con la vendemmia del 1971, nel 1996 procede alla incorporazione della Cantina Sociale del Conero, e nel 2000 alla incorporazione della Cantina Sociale dei Colli di Acquaviva Picena. <br/><br/>Il Consiglio di Amministrazione risulta costituito da 11 membri di cui Presidente è il Sig. Marchetti Doriano, il Vicepresidente Cardinali Vito, più 9 consiglieri. Il 7 dicembre 2004 la cooperativa ha modificato il proprio statuto sociale per adeguarlo alle norme relative alle Organizzazioni dei Produttori. <br/><br/>Nel febbraio 2006 la cooperativa ha ottenuto il riconoscimento e l’iscrizione nell’elenco regionale delle OP DGR 1193/03 così come modificato dalla DGR 1511 del 7.12.2004 (decreto di riconoscimento emanato dalla Regione Marche in data 27.2.2006 - decreto n. 29/SIA n. 10 del 27.2.2006). La cooperativa associa (al 31.01.2018) n. 795 soci per una superficie coltivata a vigneto specializzato di 1.331 ettari, ubicati nelle tre più importanti aree viticole della Regione, quella dei Castelli di Jesi, del Conero e del Piceno. Il potenziale produttivo è interamente destinato alla produzione di vini di qualità DOC e IGT.<br/><br/>La cooperativa fin dal 2003 ha ottenuto la certificazione di processo e di prodotto ai sensi della normativa UNI EN ISO 9001 Vision 2000 inoltre la stessa è certificata nel rispetto degli standard BRC Technical Standard ed I.F.S International Food Standard per la vinificazione e l’imbottigliamento dei vini. <br/><br/>Moncaro presidia le aree vitivinicole più importanti delle Marche, da oltre cinquanta anni coltiva e arricchisce l’antico sapere enologico di queste terre con vini di eccellenza. Da sempre impegnata nel lavoro di selezione e perfezionamento dei vigneti, con particolare attenzione alle tecniche colturali per migliorare l’ambiente in campagna oltre che la qualità dei vini, la Moncaro ha specializzato la sua gamma di prodotti focalizzandosi proprio sulle Marche. Oggi l’azienda ha tre cantine con 1.331 Ha di vigneti costituiti da Bianchi DOC e DOCG di 714 Ha, Rossi DOC e DOCG di 439 Ha, Bianchi IGT 84 Ha, Rossi IGT 87 Ha, Bianchi Tavola 5 Ha e Rossi Tavola 2 Ha.<br/><br/> I vigneti sono ubicati nelle aree ad alta vocazione viticola della regione: la Cantina di Montecarotto nell’area classica di produzione del Verdicchio dei Castelli di Jesi, la Cantina del Conero a Camerano, alle pendici del Monte Conero dove si producono Conero Riserva nonché Rosso Conero e la Cantina di Acquaviva Picena, dove viene prodotto il Rosso Piceno Superiore e la DOCG Offida con il Pecorino e la Passerina vinificati in purezza.<br/><br/> L’attuale assortimento dei vini Moncaro - composto dalle denominazioni più rinomate delle Marche quali le DOC e DOCG Verdicchio dei Castelli di Jesi, Conero Riserva, Piceno Superiore, Lacrima di Morro d’Alba e Offida - si arricchisce di una rilevante produzione di vini da coltivazioni biologiche, su cui la Cooperativa ha investito molto. Tutta la produzione di Moncaro è caratterizzata dall’utilizzo di tecniche a basso impatto ambientale.<br/><br/> Proprio grazie alla grande cura nei processi di vinificazione e al pregio della sua produzione vinicola, l’azienda può vantare una lunga serie di premi e riconoscimenti nazionali e internazionali di alto valore. La Moncaro nel 2014 ha aderito alla rete di imprese “Wine Research Team” o in breve “WRT” che ha lo scopo di promuovere un’attività di ricerca e sviluppo dei metodi di produzione di vini, nonché la eliminazione di solfiti aggiunti, realizzando un processo di condivisione di valori e di trasferimento di know-how enologico, unitamente alla ricerca di strategie innovative di marketing.<br/><br/> Un importante risultato di questa attività di ricerca è stata la prima produzione dei vini Verdicchio dei Castelli di Jesi classico superiore dall'annata 2013 e Rosso Piceno Superiore sempre dall'annata 2013 senza l’aggiunta di solfiti, tali risultati sono ovviamente un punto di partenza e si stanno sviluppando ricerche con l'obiettivo di migliorare sempre di più la qualità di questa tipologia di vini che ha anche l'obiettivo di ridurre l'uso di solfiti su tutto il resto della produzione.
        <br/><br/>Da diversi anni la cooperativa collabora con il mondo accademico e con Istituti di ricerca al fine di promuovere e sviluppare studi e progetti innovativi nel settore viti-vinicolo. Particolarmente intensi sono i rapporti con il Dipartimento di Scienze Agrarie, Alimentari ed Ambientali e con il Dipartimento di Scienze della Vita e dell’Ambiente dell’Università Politecnica delle Marche, con i quali sono stati realizzati e sono attualmente in corso diversi progetti nel settore enologico e viticolo. La Cooperativa agricola Moncaro ha partecipato con CIA e UNIVPM al progetto di setting up VITINNOVA avente come soggetto capofila la Cooperativa Moderna.

        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Moncaro($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Moncaro
