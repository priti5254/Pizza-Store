function Home(){
    return(
        <>
   <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/12279525/pexels-photo-12279525.jpeg?auto=compress&cs=tinysrgb&w=600" height={700} className="d-block w-100" alt="..."/>
  
        
        <div className="carousel-caption d-none d-md-block">
          <h5>....Welcome To Our Pizza Store....</h5>
          <p>Please Visit Our Items</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/11653777/pexels-photo-11653777.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>....Please Order Your Favourite Items....</h5>
          <p>Some Items Are Non Deliverable Please Check</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>!!! THANKS FOR BEING OUR CUSTOMER !!!</h5>
          <p>THANKS FOR ORDER THE PIZZA</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  
  
  
        
        
  
        
        
        
        
        </>
    )
  }
  export default Home;