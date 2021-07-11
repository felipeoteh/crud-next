import style from './style.module.scss'
import Link from 'next/link'

export default function Menu(){
    return(
        <ul className={style.menu}>
            <Link href="/users"><li>Usuários</li></Link>
            <Link href="/users/new"><li>Novo Usuário</li></Link>
            <Link href="/users/edit"><li>Editar Usuários</li></Link>
        </ul>
    )
}