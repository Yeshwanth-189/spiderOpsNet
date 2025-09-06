import React from "react";
],
stack: "Spark, Kafka, Flink, MLflow, Kubernetes, React",
image: "/assets/projects/power-spider.jpg",
},
];


export default function ProjectsSection() {
return (
<section className="projects-section" aria-label="Projects">
<div className="container">
<motion.header
className="projects-header"
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.6 }}
transition={{ duration: 0.6 }}
>
<p className="eyebrow">Selected Work</p>
<h2 className="title">Projects</h2>
<p className="subtitle">
Modern, data‑driven solutions with clean UX and performant engineering.
</p>
</motion.header>


<div className="projects-list">
{projects.map((p, idx) => {
const direction = idx % 2 === 0 ? "left" : "right";
return (
<motion.article
key={p.id}
className={`project-row ${idx % 2 !== 0 ? "reverse" : ""}`}
variants={slide(direction)}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.4 }}
>
<figure className="project-media">
<div className="media-frame">
<img src={p.image} alt={`${p.title} preview`} loading="lazy" />
</div>
</figure>


<div className="project-body">
<div className="card">
<h3 className="project-title">{p.title}</h3>
<p className="project-kicker">{p.subtitle}</p>


<p className="project-objective">{p.objective}</p>


<ul className="project-points">
{p.bullets.map((b, i) => (
<li key={i}>{b}</li>
))}
</ul>


<div className="project-meta">
<span className="label">Stack</span>
<span className="value">{p.stack}</span>
</div>
</div>
</div>
</motion.article>
);
})}
</div>
</div>
</section>
);
}