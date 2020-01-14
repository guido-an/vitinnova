import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import LocalizedLink from '../components/LocalizedLink'
import societaCoperativa from '../images/societa-cooperativa-agricola.png'
import moncaro from '../images/moncaro.png'
import belisario from '../images/belisario.png'
import univpm from '../images/univpm.png'
import agricoltoriItaliani from '../images/agricoltori-italiani.png'
import assam from '../images/assam.png'
import Layout from '../components/layout'

const Team = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data} titleFooter={data.footer.childFooterJson.title} subtitleFooter={data.footer.childFooterJson.subtitle}>
      <Seo title='Il progetto' />
      <section className='container' style={{ padding: '0 4%', marginBottom: '180px' }}>
        <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '80px' }}>
          <h1>IL NOSTRO <span style={{ color: '#b00020' }}>TEAM</span></h1>
          <p>Questi i partner di progetto.</p>
        </div>
        <div className='logo-container'>
          <LocalizedLink to='/societa-cooperativa-agricola'>
            <img className='logo-team' src={societaCoperativa} alt='societa-cooperativa-agricola' />
          </LocalizedLink>
          <LocalizedLink to='/moncaro'>
            <img className='logo-team' src={moncaro} alt='moncaro' />
          </LocalizedLink>
          <LocalizedLink to='/belisario'>
            <img className='logo-team' src={belisario} alt='belisario' />
          </LocalizedLink>
          <LocalizedLink to='/univpm'>
            <img className='logo-team' src={univpm} alt='univpm' />
          </LocalizedLink>
          <LocalizedLink to='/cia'>
            <img className='logo-team' src={agricoltoriItaliani} alt='agricoltori-italiani' />
          </LocalizedLink>
          <LocalizedLink to='/assam'>
            <img className='logo-team' src={assam} alt='assam' />
          </LocalizedLink>
        </div>
      </section>
      <style jsx='true'>{`
          .logo-team{
              display: block;
              margin: 0 auto;
              width: 250px;
              padding: 20px
          }
          @media(min-width: 968px){
              .logo-container{
                  display: flex;
                  justify-content: space-evenly;
                  flex-wrap: wrap
              }
          }
          `}
      </style>

    </Layout>
  )
}

export const query = graphql`
  query Team($locale: String) {
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
  }
`

export default Team
