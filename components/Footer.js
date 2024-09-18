export const footer = () => {
  return `
        <style>
        footer {
            display: grid;
            grid-template-rows: repeat(2, auto);
            background-color: rgba(0, 0, 0, 0.9);
            padding: 40px 60px;
        }
        .footer-s1 {
            display: grid;
            grid-template-columns: repeat(4, auto);
            margin-bottom: 20px;
        }
        .footer-ul {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 20px;
            margin: 0;
        }
        .footer-ul a {
            text-decoration: none;
            color: rgba(247, 245, 245, 0.632);
            font-size: 14px;
            font-weight: 300;
            cursor: pointer;
        }
        .footer-address {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0;
        }
        .footer-address div {
            color: rgba(247, 245, 245, 0.632);
            font-size: 14px;
            font-weight: 300;
        }
        .footer-address div i {
            color: rgb(228, 192, 12);
            font-size: 12px;
            margin-right: 5px;
        }
        .address-desc {
            margin: 23px 0;
        }
        .f-header {
            color: rgba(255, 255, 255, 0.966);
            font-size: 14px;
            font-weight: 300;
            font-style: italic;
        }
        .newsletter {
            display: flex;
            flex-direction: column;
            align-items: start;
            color: rgba(247, 245, 245, 0.632);
        }
        .newsletter label {
            margin-bottom: 20px;
            font-size: 14px;
        }
        .newsletter input {
            padding: 10px;
            color: rgba(247, 245, 245, 0.632);
            background-color: rgba(0, 0, 0, 0.9);
            border-style: solid;
            border-color: rgba(247, 245, 245, 0.632);
            border-width: 0 0 1px 0;
        }
        .footer-s2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgba(247, 245, 245, 0.632);
            margin-top: 30px;
            font-size: 14px;
        }
        .footer-s2 i {
            font-size: 15px;
            margin-left: 20px;
        }

        /* Breakpoint 1024*/

        @media only screen and (max-width: 1024px) {
            .footer-s1 {
                display: grid;
                grid-template-columns: repeat(2, 1fr); 
                grid-template-rows: repeat(2, auto); 
                gap: 20px;
            }
        }

        @media only screen and (max-width: 768px) {
            .footer-s1 {
                display: grid;
                grid-template-columns: auto;
                gap: 20px;
                place-items: center; 
            }

            .footer-ul,
            .footer-address,
            .newsletter {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center; 
            }

            .footer-ul li,
            .footer-address div,
            .newsletter label,
            .newsletter input {
                width: 100%; 
            }

            .newsletter input {
                text-align: center;
            }
            .footer-s2 {
                flex-direction: column;
                gap: 20px
            }
        }


        </style>
        <section class="footer-s1">
        <section>
          <ul class="footer-ul">
            <li><a href="">About Us</a></li>
            <li><a href="">Term & Condition</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Rooms</a></li>
          </ul>
        </section>
        <section>
          <ul class="footer-ul">
            <li><a href="">The Rooms & Suites</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Restaurant</a></li>
          </ul>
        </section>
        <section class="footer-address">
          <div>
            <address class="f-header">
              <i class="fa-solid fa-location-dot"></i> Address:
            </address>
            <p class="address-desc">198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div>
            <p class="f-header"><i class="fa-solid fa-phone"></i> Phone:</p>
            <p class="address-desc">(+1) 435 3533</p>
          </div>
          <div>
            <p class="f-header"><i class="fa-solid fa-envelope"></i> Email:</p>
            <p class="address-desc">info@domain.com</p>
          </div>
        </section>
        <section class="newsletter">
          <label>Sign up for our newsletter</label>
          <input type="text" placeholder="Email..." />
        </section>
      </section>
      <hr>
      <section class="footer-s2">
        <div>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </div>
        <div>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-vimeo-v"></i>
        </div>
      </section>   
    `;
};
