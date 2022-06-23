import "../Assets/css/navbar.css"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className=' '>
        <div className='navbar-header logoheader'>
        <img src="img/logo1.jpg" className="img-responsive pagelogo" alt="" />{" "}
         
          <a   className='navbar-brand page-scroll ' href='#page-top'>
            Sude Özel Eğitim
          </a>
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Kazançlarımız
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Hakkımızda
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Servislerimiz
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeri
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Referanslar
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Takımımız
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
