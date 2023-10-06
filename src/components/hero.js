
import Search from './search'
export default function Hero(){
    return(
        <div className='p-5 m-4 hero' >
            <h2>Welcom to our Movie App</h2>
            <p>Find your favorite movie between milions</p>
            <div className='search d-flex justify-content-center align-items-center'>
                <Search/>
                <button className='d-inline btn btn-warning'>Search</button>
            </div>
        </div>
    )

    }