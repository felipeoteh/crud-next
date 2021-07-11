import style from '../styles/home.module.scss'
import Menu from '../components/menu'

export default function Users() {
  return (
    <div className={style.container}>      
      <div className={style.boxCenter}>
        <header>
          <h1>Crud Next + Mysql</h1>
          <Menu/>
        </header>    
        <main>
          <h4>Users</h4>
        </main>
      </div>
    </div>
  )
}