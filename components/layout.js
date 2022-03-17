import Navbar from './layout-nav'
import Footer from './layout-footer'
import layout from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <Navbar />
      {/* <main>{children}</main>
      <Footer /> */}
    </div>
  )
}