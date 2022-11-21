import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import './direction.scss';
import { useAuth } from '../../../hooks/useAuth';

export const Direction=()=>{
    const {faculties}=useAuth();
    const [univerId,setUniverId]=useState(null)

    const filteredUniver=faculties?.filter(faculted=>faculted?.univer_id === Number(univerId))

    return(
        <div className="direction">
            <div className="container direction__container">
                <Link to='/blok' className='goback'>
                    <FiArrowLeft style={{marginRight:"15px"}}/>Orqaga
                </Link>
                <h1 className="direction__heading">Blok testlar hush kelibsiz</h1>
                <div className="direction__role">
                    <span className='direction__role-circle'>1</span>
                    <span className='direction__role-line'></span>
                    <span className='direction__role-circle'>2</span>
                    <span className='direction__role-line'></span>
                    <span className='direction__role-circle'>3</span>
                </div>
                <div className="direction__wrapper">
                    <div className="direction__left">
                        <span className="direction__left-title">Yonalish tanlash</span>
                        <select className='direction__select' onChange={(e)=>setUniverId(e.target.value)}>
                        <option  value="universitet tanlang" defaultValue='universitet tanlang'>universitet tanlang</option>
                            {faculties?.map(faculted=>(
                                <option key={faculted?.fac_id} value={faculted?.univer_id}>{faculted.universities[0].univer_name}</option>
                            ))}
                        </select>

                        <ul className="direction__list">
                            <li className="direction__item-title">Fakultetlar ro`yxati :</li>
                            {filteredUniver?.map(univer=>(
                                <li key={univer.fac_id} className="direction__item">{univer.fac_name}</li>  
                            ))}
                        </ul>
                    </div>
                    <div className="direction__right">
                        {filteredUniver?.map(univer=>(
                            <div key={univer.fac_id} className="direction__right-box">
                                <h4 className="direction__right-title">{univer.fac_name}</h4>
                                <ul className="direction__right-list">
                                    <li className="direction__right-item">Grand</li>
                                    <li className="direction__right-item">{univer.grand_soni}</li>
                                    <li className="direction__right-item">{univer.grand_score}</li>
                                </ul>
                                <ul className="direction__right-list">
                                    <li className="direction__right-item">Shartnoma</li>
                                    <li className="direction__right-item">{univer.kontrakt_soni}</li>
                                    <li className="direction__right-item">{univer.kontrakt_score}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}