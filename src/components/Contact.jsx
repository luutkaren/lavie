export const Contact = (props) => {

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>

            <div className='row'>
              <div className='section-title'>

                <h2>Get In Touch</h2>

              </div>
            </div>
          </div>

          <div className='contact-item'>
            <p>
              <span>
                <h3>Contact Us</h3>
                <i className='fa fa-map-marker'></i>
                Address<br>
                </br>
              </span>{ ' ' }
              { props.data ? props.data.address : 'loading' }
            </p>
          </div>

          <div className='contact-item'>
            <p>
              <span>
                <i className='fa fa-phone'></i> Phone <br>
                </br>
              </span>{ ' ' }
              { props.data ? props.data.phone : 'loading' }
            </p>
          </div>

          <div className='contact-item'>
            <p>
              <span>
                <i className='fa fa-envelope-o'></i> Email <br>
                </br>
              </span>{ ' ' }
              { props.data ? props.data.email : 'loading' }
            </p>
          </div>
        </div>
      </div>

      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Karen Luu
          </p>
        </div>
      </div>
    </div>
  )
}
