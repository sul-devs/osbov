import Image from "next/image";
import logo from "../app/twitter-image.png";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container">
        <section className="grid grid-cols-3 gap-3">
          {/* Company Section */}
          <section className="company">
            <h3>Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              tempora necessitatibus illum a fugit, consequuntur unde recusandae
              ratione quo rerum!
            </p>
          </section>

          {/* Links Section */}
          <section className="links">
            <Image src={logo} width={90} height={60} alt="Logo." />
            <nav>
              <ul>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
                <li>
                  <a href="#">Link 4</a>
                </li>
                <li>
                  <a href="#">Link 5</a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <h3>Contact Us</h3>
            <ul className="flex gap-2">
              <li>
                <a href="#">
                  <span className="sr-only">Facebook.</span>
                  <Image
                    className="aspect-square"
                    src={logo}
                    width={20}
                    height={20}
                    alt="Logo."
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sr-only">Facebook.</span>
                  <Image
                    className="aspect-square"
                    src={logo}
                    width={20}
                    height={20}
                    alt="Logo."
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sr-only">Facebook.</span>
                  <Image
                    className="aspect-square"
                    src={logo}
                    width={20}
                    height={20}
                    alt="Logo."
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="sr-only">Facebook.</span>
                  <Image
                    className="aspect-square"
                    src={logo}
                    width={20}
                    height={20}
                    alt="Logo."
                  />
                </a>
              </li>
            </ul>
          </section>
        </section>

        {/* Copyright */}
        <p>Copyright &copy; 2025 Company, All rights reserved.</p>
      </div>
    </footer>
  );
}
