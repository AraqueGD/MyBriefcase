import Layout from "../components/Layout";
import { skills, experiences, proyects } from "../profile";
import Link from "next/link";

export default function index() {
  return (
    <Layout>
      {/** Header Section */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="photoPortfolio.jpg"
                  alt="photoPortfolio"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Camilo Araque Caro</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  repellendus laboriosam corrupti voluptas excepturi ipsam quis
                  a maxime perspiciatis rerum error quaerat aut consectetur,
                  cupiditate numquam ullam est tempore! Praesentium.
                </p>
                <a href="">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second Section */}
      <div className="row py-2">
        {/** SKILLS */}
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>

              {skills.map(({ skill, percentage }, key) => (
                <div className="py-3" key={key}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/** EXPERIENCE */}
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Study Experience</h1>

              <ul>
                {experiences.map(({ title, description, from, to }, key) => (
                  <li key={key}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** PortFolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {proyects.map(({ name, description, image, repository }, key) => (
                <div className="col-md-4 p-2" key={key}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt="proyect1"
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href={repository} target="_blank">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">More Poryects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
