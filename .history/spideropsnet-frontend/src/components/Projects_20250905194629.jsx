import React from "react";


<div className="grid-12">
{projects.map((p, idx) => {
const direction = idx % 2 === 0 ? "left" : "right"; // 1: left→right, 2: right→left, 3: left→right
return (
<article key={p.id} className="project-row">
{/* Gutter left (column 1) is implicit via grid placement */}


{/* Image: columns 2-6 */}
<motion.figure
className="project-media"
variants={slide(direction)}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.4 }}
style={{ gridColumn: "2 / 7" }}
>
<div className="media-frame">
<img src={p.image} alt={`${p.title} preview`} loading="lazy" />
</div>
</motion.figure>


{/* Description: columns 6-11 */}
<motion.div
className="project-body"
variants={slide(direction)}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.4 }}
style={{ gridColumn: "6 / 12" }}
>
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
</motion.div>


{/* Gutter right (column 12) is implicit via grid placement */}
</article>
);
})}
</div>
</div>
</section>
);
}