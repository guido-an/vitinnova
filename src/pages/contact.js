import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const Contact = ({ pageContext: { locale }, data }) => {
  const { title1, title2, title3, subtitle, phone } = data.contact.childContactJson
  return (
    <div className='contact'>
      <Layout
        path='/'
        locale={locale}
        data={data}
        dataHeader={data.header.childHeaderJson}
        titleFooter={data.footer.childFooterJson.title}
        subtitleFooter={data.footer.childFooterJson.subtitle}
      >
        <Seo title='Il progetto' />
        <section className='container' style={{ padding: '0 4%', marginBottom: '200px' }}>
          <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '180px' }}>
            <h1>{title1} <span style={{ color: '#b00020' }}>{title2}</span> {title3}</h1>
            <p>{subtitle}</p>
          </div>
          <div className='contact-page-container'>
            <p><strong>Email:</strong><a href='mailto:ancona@cia.it'> ancona@cia.it</a></p>
            <p><strong>{phone}</strong><a href='tel:071200437'> 071 200437</a></p>
          </div>
        </section>
      </Layout>
      <style jsx='true'>{`
          .contact .footer-container{
              display: none
          }
          .contact-page-container{
              text-align: center
          }
          .contact-page-container p {
              margin: 40px;
              font-size:18px
          }
          .contact-page-container a {
              color: #777;
              text-decoration: none;
          }

          .contact-page-container a:hover {
              color: #222;
          }
          @media(min-width:1200px){
            .contact-page-container{
                display: flex;
                justify-content: space-evenly
            }
          }
          
          
          `}
      </style>
    </div>

  )
}

export const query = graphql`
  query Contact($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        innovation
        project
        contact
      }
    }
    footer: file(name: { eq: $locale }, relativeDirectory: { eq: "footer" }) {
      childFooterJson {
        title
        subtitle
      }
    }
    contact: file(name: { eq: $locale }, relativeDirectory: { eq: "contact" }) {
      childContactJson {
        title1
        title2
        title3
        subtitle
        phone
      }
    }
  }
`

export default Contact
