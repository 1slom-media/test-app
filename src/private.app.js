import { Route, Routes } from 'react-router-dom';
import { Blok, Direction, Home } from './modules';

export const Private=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blok' element={<Blok/>}/>
            <Route path='/direction' element={<Direction/>}/>
        </Routes>
        </>
    )
}