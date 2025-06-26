import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-slate-800 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    <div className="flex">
                        <img src="/LogoIcon.png" alt="Icone de joystick" className='w-10 h-10 mx-1' />
                        <Link to="/home" className="text-2xl font-bold">LOJA DE GAMES</Link>
                    </div>
                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} weight='bold' />
                        <ShoppingCartIcon size={32} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar