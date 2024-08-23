import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'

const Navbar = ({setData, cart}) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm ] = useState();

    const filterByCategory = (category) =>{
        const element = items.filter((product)=> product.category === category)
        setData(element);
    }

    const filterByPrice = (price)=>{
        const element = items.filter((product)=> product.price <= price)
        setData(element);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        searchTerm("");
    }

  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={"/"} className="brand">E-Shop</Link>
            <form onSubmit={handleSubmit} className="search-bar">
                <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                   type='text' placeholder='Search Products' 
                />
            </form>
            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
                </button>
            </Link>
        </div>

        <div className="nav-bar-wrapper">
            <div className="items">Filters {"->"}</div>
            <div onClick={()=> setData(items)} className="items">NO Filter</div>
            <div onClick={()=> filterByCategory('mobiles')} className="items">
                Mobiles
            </div>

            <div onClick={()=> filterByCategory('laptops')} className="items">
                Laptops
            </div>

            <div onClick={()=> filterByCategory('tablets')}className="items">
                Tablets
            </div>

            <div
            onClick={()=>filterByPrice(30000)}
            className="items">Under-30000</div>
            <div
            onClick={()=>filterByPrice(40000)}
            className="items">Under-40000</div>
            <div
            onClick={()=>filterByPrice(60000)}
            className="items">Under-60000</div>
            <div
            onClick={()=>filterByPrice(90000)}
            className="items">Under-90000</div>
        </div>
    </header>
    </>
  )
}

export default Navbar