import { useEffect } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useParams } from 'react-router-dom'

export default function Watched(){
    const parms=useParams()
    //=========> redux data that user store (watched list)////////********** */
    
    

    return(
    <>
        <h2 >watched list</h2>
        <div className='row d-flex justify-content-center card '>
            {Array.from({ length: 15 }).map((_, i) => (
                <WatchListCard key={i} />
            ))}
        </div>
        
        
    </>
    )
}

function WatchListCard(){
    return(
        <>
        {/* m-1 col-sm-3 col-md-3 col-lg-2 */}
        <div xs={6}className="card col-5 m-2 " > 
            <img className="" src="https://via.placeholder.com/300" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <small>2023 <span className='d-inline d-flex justify-content-end'><AiFillHeart/></span></small>
            </div>
        
     </div>
        </>
    )
}