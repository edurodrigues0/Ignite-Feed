import { Avatar } from '../Avatar';
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

const urlImage = 'https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={urlImage} />
      
      <div className={styles.profile}>
        <Avatar 
          src='https://github.com/edurodrigues0.png'
        />
        
        <strong>Eduardo Rodrigues</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}