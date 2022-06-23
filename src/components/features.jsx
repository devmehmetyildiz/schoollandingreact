import "../Assets/css/features.css"
export const Features = (props) => {
  return (
    <div id='khkk' className='text-center'>
      <div style={{ marginTop: '-10px' }} className='container'>
        <div className="row">
          <div style={{ marginBottom: '-10px' }} className='features__title col-md-10 col-md-offset-1 section-title'>
            <h2 className=" ">KHKK</h2>
          </div>
        </div>
        <div className='row' style={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

          {props.data
            ? props.data.map((d, i) => (
          
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  <a href={d.text} download>
                    {' '}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>


                  </a>
                
              </div>
            ))
            : 'Loading...'}
        </div>

      </div>
    </div>
  )
}
