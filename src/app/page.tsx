import { profile } from "@/data/profile";

const navItems = ["Experience", "Projects", "Hackathons"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label={`${profile.name} home`}>
            {profile.name}
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="hero section">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <p className="intro">{profile.intro}</p>
        <div className="link-row" aria-label="Profile links">
          {profile.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2 id="about-heading">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <article className="skill-card" key={category}>
              <h3>{category}</h3>
              <ul className="tag-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="eyebrow">Work</p>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <div className="timeline">
          {profile.experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.period}`}>
              <div>
                <p className="period">{job.period}</p>
                <h3>
                  {job.company}, <span>{job.role}</span>
                </h3>
              </div>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2 id="projects-heading">Projects</h2>
        </div>
        <div className="card-grid">
          {profile.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div>
                <p className="period">{project.period}</p>
                <h3>
                  {project.href ? <a href={project.href}>{project.name}</a> : project.name}
                </h3>
              </div>
              <ul>
                {project.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="hackathons" className="section" aria-labelledby="hackathons-heading">
        <div className="section-heading">
          <p className="eyebrow">Fast Builds</p>
          <h2 id="hackathons-heading">Hackathons</h2>
        </div>
        <div className="card-grid">
          {profile.hackathons.map((hackathon) => (
            <article className="project-card" key={hackathon.name}>
              <div>
                <p className="period">{hackathon.date}</p>
                <h3>
                  {hackathon.href ? (
                    <a href={hackathon.href}>{hackathon.name}</a>
                  ) : (
                    hackathon.name
                  )}
                </h3>
              </div>
              {hackathon.result ? <p className="result">{hackathon.result}</p> : null}
              <ul>
                {hackathon.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <ul className="tag-list">
                {hackathon.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Built with Next.js. Update your details in src/data/profile.ts.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
