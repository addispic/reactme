import {Link, useNavigate} from 'react-router-dom'
export default function Home(){
    // hooks
    const navigate = useNavigate()
    return (
        <>
        <div>
            <h3>Home Page</h3>
            <Link to={`/comments/${45}`}>Comments</Link>
            <button className='block px-3 py-1 rounded-sm text-sm bg-sky-500 text-white transition-colors ease-in-out duration-300 hover:bg-sky-600' onClick={()=> {
                navigate(`/comments/${64}`)
            }}>Comments 64</button>
            </div></>
    )
}