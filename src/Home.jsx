import './App.css'
import { Nav } from './components/nav.jsx'

export function Home() {
  return (
    <div>
      <Nav />
      <div className="pf">
      <img src="https://cdn.discordapp.com/avatars/696953667403644938/be00ceac4a30d2947ac26acd4dbc829e.png?size=1024" alt="" className='pfp' />
      </div>
      <div className="pgs">
      <div className="CS">[Paragraph about CS endevours]</div>
      <div className="MATH">[Paragraph about Math endevours]</div>
      <div className="PROJECTS">[Paragraph about Projects]</div>
      </div>
      <div className="FOOT">
        <a href="mailto:me@amukh1.dev" className='fi'>me@amukh1.dev</a>
        <a href="discordapp.com/users/696953667403644938" className='fi'>amukh1 @ discord</a> 
        <a href="https://github.com/amukh1" className='fi'>amukh1 @ github</a> 
      </div>
    </div>
  )
}