import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <main className="dashboard">
        <aside>
            <Link to='vegetarian'>Vegetarian</Link>
            <Link to='non-vegetarian'>Non Vegetarian</Link>
        </aside>
        <section>
            <h2>Info de recetas</h2>
            <Outlet />
        </section>
    </main>
  )
}

export default Dashboard