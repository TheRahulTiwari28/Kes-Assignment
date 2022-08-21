import React from 'react'
import HtmlData from '../Data/HtmData';
import Cards from '../components/cards/CardBox';

const Html = () => {
    return (
        <>
        <section className='home-section open'>
            <div className="text">HTML</div>
            {/* <div className='paragraph'>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</div> */}
            <div className="card">
                {HtmlData.map((value) => {
                    return(
                        <Cards
                            img={value.img}
                            heading={value.heading}
                            authImg={value.authImg}
                            authName={value.authName}
                            level={value.level}
                            authLink={value.authLink}
                        />
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Html
