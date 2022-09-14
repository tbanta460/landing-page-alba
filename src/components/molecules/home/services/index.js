import React, {useState} from 'react';
import './index.css';
import { AppDev, WebDev, CmsDev, Mt, Payment, DigitalProduct, Angular, Aws, IsRuby, IsCss, IsHtml, IsPython, IsPhp, IsJavaScript, IsReactjs, MongoDb, Mssql, IsMysql, PostgressSql, DropBox } from '../../../../assets';

const Products = () => {
    return [
        {
            name: 'Website development',
            desk: 'High-performance website to reach out more your potential customers',
            id: 223451,
            image: WebDev,
        },
        {
            name: 'Mobile apps development',
            desk: 'To accelerate your business process',
            id: 55623,
            image: AppDev
        },
        {
            name: 'Digital product design',
            desk: 'Complete digital product creations from UX prototyping to final UI designs',
            id: 556271,
            image: DigitalProduct
        },
        {
            name: 'Maintenance',
            desk: 'Make sure your digital environment keep online and updated ',
            id: 948571,
            image: Mt
        },
        {
            name: 'CMS development',
            desk: 'You can update your website content yourself',
            id: 827354,
            image: CmsDev
        },
        {
            name: 'Integrated payment gateway',
            desk: 'Simplify the payment system with just one step',
            id: 728190,
            image: Payment
        }
    ]
}  

const Services = () => {
    const myProducts = Products();
    const [isArrow, setIsArrow] = useState("");
    const skills = [Angular, Aws, IsRuby, IsCss, IsHtml, IsPython, IsPhp, IsJavaScript, IsReactjs, MongoDb, Mssql, IsMysql, PostgressSql, DropBox]
    const handleEnter = (e) => {
        setIsArrow(e.currentTarget.id.toString())
    }
    const handleLeave = () => {
        setIsArrow("")
    }
    return(
        <>
            <section className='ctn-services' id='service'>
                <div className='chd-services'>
                    <h2 className='title-prd'>From product design to software continuous delivery</h2>
                    <ul className='lst-products'>
                        {
                            myProducts.map(data => {
                                return(
                                    <li className='itm-product'key={data.id}id={data.id} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                                        <div className='wrp-product'>
                                            <img src={data.image}alt={data.name} className='icn-prd'/>
                                            <h4 className={`ttl-prd ${isArrow === data.id.toString() && 'arrow'}`}>{data.name}</h4>
                                            <p className='desk-prd'>{data.desk}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='is-skills'>
                    <ul className='lst-skills'>
                        {
                            skills.map((data,i) => {
                                return(
                                    <li key={i}className='itm-skills'>
                                        <img src={data}alt={data} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Services