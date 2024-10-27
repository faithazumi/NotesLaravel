import { Link } from "@inertiajs/react"
import { Children } from "react"


const Layouts = ({Children}) => {
  return (
    <div>
      
      <header>
        <nav>
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="/posts/create">Create</Link>
        </nav>
      </header>

      <main>
        {Children}
      </main>
    </div>
  )
}

export default Layouts
