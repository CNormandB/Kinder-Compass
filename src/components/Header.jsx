import "./Header.css";

function Header(){
return(
  <section className="header_container">
    <div className="header_logo">
      <img className="logo_img" src="Logo.png"/>
      <img className="logo_txt" src="logo_text.png"/>
    </div>
    <div className="header_buttons">
      <button>Staff Space</button>
      <button>Attendance</button>
      <button className="header_message">
        <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="20%" viewBox="0 0 24 24">
          <g fill="#FFE8D6" stroke="#CB997E" stroke-width="2">
            <rect width="16" height="12" x="4" y="6" rx="2"/>
            <path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9"/>
          </g>
        </svg>
      </button>
      <button className="header_new_entry">
        <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="20%" viewBox="0 0 24 24">
          <g fill="none" stroke="#CB997E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
           <path d="M3.25 13h3.68a2 2 0 0 1 1.664.89l.812 1.22a2 2 0 0 0 1.664.89h1.86a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 17.07 13h3.68"/>
           <path d="m5.45 4.11l-2.162 7.847A8 8 0 0 0 3 14.082V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.918a8 8 0 0 0-.288-2.125L18.55 4.11A2 2 0 0 0 16.76 3H7.24a2 2 0 0 0-1.79 1.11M10 8.5h4m-2-2v4"/>
          </g>
        </svg>
      </button>
    </div>
  </section>
)
}

export default Header;