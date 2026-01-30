import {Outlet} from 'react-router-dom'
// components
import Header from "../../components/Header"
export default function HomeLayout(){
    return (
        <div>
            {/* header */}
            <Header />
        <div>
            <Outlet />
        </div>
        </div>
    )
}