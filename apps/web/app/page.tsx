const features = [
  {
    title: 'Immersive Playback',
    description:
      'Adaptive bitrate streaming up to 4K with low-latency player controls, subtitles, and accessibility-first interactions.'
  },
  {
    title: 'Creator Pipeline',
    description:
      'Resumable uploads, automated transcoding, and AI-assisted moderation ensure content is production ready faster.'
  },
  {
    title: 'Interactive Community',
    description:
      'Timestamped chat, reactions, and watch parties keep viewers engaged beyond the primary video experience.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-6 rounded-3xl bg-gradient-to-br from-primary-900/80 via-slate-900 to-slate-950 p-10 shadow-2xl">
        <h2 className="text-4xl font-bold text-primary-100">Stream brilliantly with AuroraStream</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          A modular platform blueprint leveraging Next.js, Go, and NestJS microservices to deliver premium HD video experiences
          with enterprise-grade security, personalization, and collaboration.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            className="rounded-full bg-primary-500 px-6 py-3 font-semibold text-slate-50 transition hover:bg-primary-400"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Explore Web Foundation
          </a>
          <a
            className="rounded-full border border-primary-300/60 px-6 py-3 font-semibold text-primary-200 transition hover:border-primary-200 hover:text-primary-100"
            href="/docs/architecture"
          >
            Architecture Blueprint
          </a>
        </div>
      </section>

      <section id="features" className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-primary-200">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </article>
        ))}
      </section>

      <section id="architecture" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <h3 className="text-2xl font-semibold text-primary-200">Reference Architecture</h3>
        <p className="mt-4 text-sm text-slate-300">
          Services are organized in a Turborepo monorepo. Next.js powers the customer-facing experience, Go microservices handle
          ingestion, transcoding, and metadata APIs, while NestJS enables chat, notifications, and user management. Shared
          contracts live in the <code>packages/</code> directory, and Terraform modules in <code>infrastructure/</code> codify
          Kubernetes environments deployed via GitOps.
        </p>
      </section>

      <section id="team" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <h3 className="text-2xl font-semibold text-primary-200">Team Enablement</h3>
        <p className="mt-4 text-sm text-slate-300">
          Start by installing dependencies with <code>npm install</code> at the repository root, then run <code>npm run dev:web</code>
          to launch the web preview. Each service includes dedicated READMEs with instructions for running locally, linting, and
          testing.
        </p>
      </section>
    </div>
  );
}
