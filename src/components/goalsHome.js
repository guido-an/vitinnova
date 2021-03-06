import React from 'react'

const goalsHome = ({ titleSection, title1, subtitle1, title2, subtitle2, title4, subtitle4, title5, subtitle5 }) => (
  <section className='goals-section'>
    <div>
      <h2>
        {titleSection}
      </h2>
    </div>
    <div id='why-section'>
      <div className='why-box'>
        <span>1</span>
        <strong>{title1}</strong>
        <p>
          {subtitle1}
        </p>
      </div>
      <div className='why-box'>
        <span>2</span>
        <strong>{title2}</strong>
        <p>
          {subtitle2}
        </p>
      </div>
      <div className='why-box'>
        <span>3</span>
        <strong>{title4}</strong>
        <p>
          {subtitle4}
        </p>
      </div>

      <div className='why-box'>
        <span>4</span>
        <strong>{title5}</strong>
        <p>
          {subtitle5}
        </p>
      </div>
    </div>
    <style jsx='true'>{`
      .goals-section {
        margin-top: 120px;
        margin-bottom: 40px;
        text-align: center
      }
      #why-section{
        margin: 0 auto
      }
   
      .why-box {
        padding-top: 20px;
      }
      .why-box span {
        font-size: 32px;
        font-weight: bold;
        display: block;
        color: #b00020;
        font-size: 54px;
        opacity: 70%;
      }
      .why-box strong {
        font-size: 18px;
        text-align: center;
        display: block;
      }
     
      @media only screen and (min-width: 1200px) {

        .goals-section{
            margin-top: 160px
        }
        #why-section {
         margin-top: 60px;
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: repeat(2, 1fr);
         grid-column-gap: 120px;
         grid-row-gap: 0px;
         
        }

      }
    `}
    </style>
  </section>
)

export default goalsHome
