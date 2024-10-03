export default function App() {
  return (
    <div>
      <nav className="flex items-center justify-around mt-10 max-w-screen-xl mx-auto h-18">
        <div className="logo font-bold">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className="poppins-thin flex gap-4">
          <li href = "#">Menu</li>
          <li href = "#">Location</li>
          <li href = "#">About</li>
          <li href = "#">Contact</li>
        </ul>
        <button className="rounded-lg bg-red-600 p-2 text-white font-semibold ">login</button>
      </nav>
    </div>
  )
}