// home page with two separate white boxes
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="card">
          <div className="link-boxes">
            <Link href="/" className="link-box">Home</Link>
            <Link href="/movies" className="link-box">Movies</Link>
            <Link href="/favorites" className="link-box">Favorites</Link>
          </div>
        </div>

        <div className="card">
          <h1>Welcome to My Movie List</h1>
          <p>- This app lets you pick movies and save them as favorites.</p>
          <p>- I made this project using basic Next.js with TypeScript.</p>
          <p>- I created 3 components (NavBar, MovieCard, FavoritesList).</p>
          <p>- I used "useState" and "useEffect" for state, 
            and passed props between parent and child components.</p>
          <p>- Events are handled with button clicks for Add / Remove and Clear Favorites. 
            I also used conditional rendering to show messages like 
            "No favorites yet". For styling I used a simple CSS file 
            with cards and buttons. </p>
        </div>
      </div>
    </>
  )
}
