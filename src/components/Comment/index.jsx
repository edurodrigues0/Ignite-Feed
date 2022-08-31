import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src='https://github.com/diego3g.png' 
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>

              <time 
                title='11 de Maio as 08 e 13' 
                dateTime='2022-05-11 08:13:32'
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  );
}