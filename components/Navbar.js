export const navbar = (activePage) => {
  return `
      <style>
        .header{
            padding: 0 55px 0 35px;
            background-color: rgb(255, 255, 255);
            box-shadow: 3px 0 10px rgb(130, 123, 123);
            position: fixed;
            top: 0px;
            z-index: 20;
            width: 100vw;
            height: auto;
        }
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        nav .lo{
            width: 80px;
            height: 80px;
        }
        nav .lo img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 60px;
            list-style: none;
        }
        nav ul a {
            text-decoration: none;
            color: rgba(11, 11, 11, 0.904);
            font-size: 1.15rem;
            font-weight: 500;
            cursor: pointer;
        }
        nav ul a.active {
            color: #f97316;
            text-decoration: underline;
        }
        nav ul a:hover {
            color: #fb923c;
        }
        .toggle-btn {
            display: none;
            width: 40px; /* Fixed width */
            height: 40px; /* Fixed height */
            cursor: pointer;
            place-content: center;
            text-align: center;
        }    

        .burger {
            width: 100%;
            height: 100%;
            object-fit: cover;
            font-size: 1.8rem; /* Adjust icon size */
            line-height: 1; /* Ensure vertical centering */
         }

          
        /* Drop Navbar Styles */
        .drop-nav {
            height: 0;
            overflow: hidden;
            position: absolute;
            right: 30px;
            top: 80px;
            width: 80%;
            background: rgba(0, 0, 0, .1);
            backdrop-filter: blur(5px);
            border-radius: 0 0 10px 10px;
            transition: height 0.3s ease-in-out;
            z-index: 10; /* Ensure dropdown is above other content */
        }
        .drop-nav.open {
            height: 230px;
        }
        .drop-nav ul {
            flex-direction: column;
            gap: 15px;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .drop-nav ul a {
            font-size: 20px;
            color: #fff;
            font-weight: 500;
            text-decoration: none;
        }
        .drop-nav ul a.active {
            color: #fb923c;
        }
        .drop-nav ul a:hover {
            color: #fb923c;
        }
  
        /* Responsive Design */
        @media (max-width: 1024px) {
          .logo {
            font-size: 24px;
          }
          ul {
              gap: 25px;
          }   
        }


        @media (max-width: 768px) {
          .logo {
              font-size: 24px;
          }  
          nav ul {
            display: none;
          }
          .toggle-btn {
            display: block;
          }
          .drop-nav {
            left: 2rem;
            width: unset;
          }
        }
      </style>
  
      <div class="header">
          <nav>
              <a href="home.html"><div class="lo"><img src="./images/voco_hotel.png" alt=""></div>
                </a>
              <ul>
                  <li><a href="rooms.html" class="${
                    activePage === "rooms" ? "active" : ""
                  }">Rooms</a></li>
                  <li><a href="about.html" class="${
                    activePage === "about" ? "active" : ""
                  }">About</a></li>
                  <li><a href="events.html" class="${
                    activePage === "events" ? "active" : ""
                  }">Events</a></li>
                  <li><a href="contact.html" class="${
                    activePage === "contact" ? "active" : ""
                  }">Contact</a></li>
                  <li><a href="reservation.html" class="${
                    activePage === "reservation" ? "active" : ""
                  }">Reservation</a></li>
              </ul>
              <div class="toggle-btn"><span class="burger">&#9776;</span></div>
          </nav>
  
          <!-- Drop Navbar -->
          <div class="drop-nav" id="drop-nav"> 
              <ul>
                  <li><a href="rooms.html" class="${
                    activePage === "rooms" ? "active" : ""
                  }">Rooms</a></li>
                  <li><a href="about.html" class="${
                    activePage === "about" ? "active" : ""
                  }">About</a></li>
                  <li><a href="events.html" class="${
                    activePage === "events" ? "active" : ""
                  }">Events</a></li>
                  <li><a href="contact.html" class="${
                    activePage === "contact" ? "active" : ""
                  }">Contact</a></li>
                  <li><a href="reservation.html" class="${
                    activePage === "reservation" ? "active" : ""
                  }">Reservation</a></li>
              </ul>
          </div>
      </div>
    `;
};
