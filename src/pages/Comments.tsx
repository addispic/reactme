import {useParams} from 'react-router-dom'
export default function Comments(){
    const {id} = useParams() 
    return (
        <>
        
        <h3>POST ID: {id}</h3></>
    )
}