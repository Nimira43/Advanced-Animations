import Navbar from "./Navbar"

function NavSearch() {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <Navbar />
        <main className='container py-10'>{children}</main>
      </body>
    </html>
  )
}
export default NavSearch