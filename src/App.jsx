import './Styles/global.css';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: "paragraph", content:"Fala galera"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat"},
      {type: "link", content:"jane.design/doctorcare"},
      {type: "link", content:"#novoprojeto"},
      {type: "link", content:"#nlw"},
      {type: "link", content:"#rocketseat"}
    ],
    publishedAt: new Date('2022-08-30 20:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      {type: "paragraph", content:"Fala galera"},
      {type: "paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat"},
      {type: "link", content:"jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-08-29 10:08:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}