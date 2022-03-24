class Footer extends HTMLElement {
    constructor () {
        super();
    }
    connectedCallback () {
        this.innerHTML = 
        `<footer class = "container-fluid pt-3">
            <div class = "row">
                <div class = "col-lg-8">
                    <div class = "row">
                        <div class = "col-lg-4">
                            <ul class="q-links">
                                <h3>About Us</h3>
                                    <li class = "q-item"><a href="#">About Us</a></li>
                                    <li class = "q-item"><a href="#">Our People</a></li>
                                    <li class = "q-item"><a href="#">Become a Partner</a></li>
                                    <li class = "q-item"><a href="#">Social Responsibility</a></li>
                            </ul>
                        </div>
                        <div class = "col-lg-4">
                            <ul class="q-links">
                                <h3>Work with Us</h3>
                                <li class = "q-item"><a href="#">Become a Partner</a></li>
                                <li class = "q-item"><a href="#">Work with Us</a></li>
                            </ul>
                        </div>
                        <div class = "col-lg-4">
                            <ul class="q-links">
                                <h3>Contact Us</h3>
                                <li class = "q-item"><a href="#">Locate a Store</a></li>
                                <li class = "q-item"><a href="#">Privacy Policy</a></li>  
                            </ul>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-4">
                    <ul class = "download">
                        <li>
                            <img src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/apple.svg" alt="Download from the App store" srcset="">
                        </li>
                        <li class="ps-2">
                            <img src="https://www.dunkindonuts.com/content/dam/dd/img/rebranding/homepage/google%20play.svg" alt="Download from the Play Store" srcset="">
                        </li>
                    </ul>
                </div>
            </div>
           
            <ul class = "social-links">
                <li class = "social-item">
                    <i class="fab fa-facebook-f"></i>
                </li>
                <li class = "social-item">
                    <i class="fab fa-instagram"></i>
                </li>
                <li class = "social-item">
                    <i class="fab fa-linkedin-in"></i>
                </li>
                <li class = "social-item">
                    <i class="fab fa-twitter"></i>
                </li>
            </ul>
            <hr/>
             <div class = "row">
                <div class = "col-lg-6">
                    <ul class = "end-row">
                        <li><a href="#">Privacy Policy</a></li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div class = "col-lg-6 copy">
                    Copyright &copy; 2022 by Uko Joshua with inspiration from Beck Kanno's <a href="https://dribbble.com/shots/17486047-Redesigned-Chicken-Republic-Landing-Page/attachments/12622335?mode=media">Dribble</a>
                </div>
             </div>

        </footer>`
    }
}

customElements.define('footer-component', Footer)