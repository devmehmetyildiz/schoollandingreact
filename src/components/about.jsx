export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <h2> Biz Kimiz? </h2>
          <p style={{ textAlign: 'center' }}>{props.data ? props.data.paragraph : "Yükleniyor..."}</p>
          <h5 id="WhyUs" style={{ marginBottom:'70px', textAlign: 'center' }}>Kurum Müdürü Özge İNALBARS</h5>
        </div>


        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/home/2.jpg" className="img-responsive" style={{marginBottom:'70px'}} alt="" />{" "}
            <img src="img/home/3.JPEG" className="img-responsive" alt="" />{" "}
          </div>
          <div  className="col-xs-12 col-md-6">
            <div className="about-text" >
              <h3  style={{marginBottom :'40px !important '}} >Neden Bizi Seçmelisiniz?</h3>
              <p>Özel Sude Eğitim ve Rehabilitasyon Merkezi olarak misyonumuzu;</p>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div >
              <p id="WhoCanJoin" style={{marginBottom :'40px !important'}}  >Olarak ifade edebiliriz.</p>
              <h3    >Kimler Faydalanabilir?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <h3  id="FreeCources" style={{marginTop :'40px !important'}}>Ücretsiz Programlar</h3>
              <p style={{marginBottom : '0px', marginTop:'-5px'}}>Aşağıdaki ön tanısı olan bireyler kurumdan ücretsiz eğitim alabilir:</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why3.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why4.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
