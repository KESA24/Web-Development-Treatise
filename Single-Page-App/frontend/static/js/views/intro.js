import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Intro");
    }

    async getHtml() {
        return `
        <section>
        <div class="intro">
                <ul display="in-line">
                    <li><a href="/" class="nav__link" data-link>Adhore Tech</a></li>
                    <li><a href="/posts" class="nav__link" data-link>Blog</a></li>
                    <li> <a href="/research" class="nav__link" data-link>Latest Research</a></li>
                    <li> <a href="#contact" class="nav__link">Contact</a></li>
                </ul> 
            <h1 class="hero_text">Welcome to Adhore Tech</h1>
        </div>
    </section>
    <section>
        <div class="work">
            <h1 class="headings">Our Latest Work</h1>
            <div class="row">
                <div class="column">
                  <div class="card">
                    <img src="./static/images/chem.jpg" alt="Avatar" style="width:100%">
                    <div class="container">
                      <h4><b>Artificial Intelligence</b></h4> 
                      <p>We create tailormade AI solutions for companies</p> 
                    </div>
                  </div>
                </div>
              
                <div class="column">
                  <div class="card">
                    <img src="./static/images/car.jpg" alt="Avatar" style="width:100%">
                    <div class="container">
                      <h4><b>Electric Cars</b></h4> 
                      <p>Our latest Car models are available at your dealership</p> 
                    </div>
                  </div>
                </div>
                
                <div class="column">
                  <div class="card">
                    <img src="./static/images/moon.jpg" alt="Avatar" style="width:100%">
                    <div class="container">
                      <h4><b>Space Exploration</b></h4> 
                      <p>Proxima Cenaturi's latest sighting</p> 
                  </div>
                </div>
            </div>
    </section>
    <section>
    <div class="contact" id="contact">
        <h1 class = "headings">Contact Us</h1>
        <p>Find us on Plot 5B, Pilsoborough Road</p>
        <p>Email us on:<a href="mailto:info@adhoretech.io">info@adhoretech.io</a> </p>
    </div>
</section>
        `;
    }
}