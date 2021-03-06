import React from 'react'
import LocalizedLink from './LocalizedLink'
import './hero.css'
import './aboutHome.css'
import imgAboutHome from '../images/vittinova-il-progeto.jpg'

function aboutHome ({ title, subtitle, cta, linkInnovation }) {
  return (
    <section className='about-home'>
      <div>
        <img className='shadow' src={imgAboutHome} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}
        </p>
        <LocalizedLink className='about-home-cta' to={linkInnovation}>> {cta}</LocalizedLink>
      </div>
    </section>
  )
}

export default aboutHome
