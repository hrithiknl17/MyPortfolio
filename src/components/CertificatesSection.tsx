interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

const certificates: Certificate[] = [
  {
    title: 'AWS Cloud Technical Essential',
    issuer: 'Amazon Web Services and offered by Coursera',
    date: 'Sep 2025',
    credentialLink: 'https://www.coursera.org/account/accomplishments/verify/WZLEEE1TKL2V',
  },
  {
    title: 'Bounty hunt 101',
    issuer: 'DevTown',
    date: 'Jan 2026',
    credentialLink: 'https://www.cert.devtown.in/verify/Z1DdSE3',
  },
  {
    title: 'Big Data 101',
    issuer: 'IBM and issued',
    date: 'Nov 2025',
    credentialLink: 'https://courses.cognitiveclass.ai/certificates/d174cf679434419caa6ae762ff4c5137',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="px-4 md:px-8 lg:px-16 py-8">
      {/* Section Header */}
      <div className="section-header mb-8">
        <h2 className="text-2xl font-bold">Certificates</h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <article key={cert.title} className="brutalist-card flex flex-col gap-4">
            {/* Certificate Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-secondary border-[3px] border-foreground rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <span className="info-badge text-sm w-fit">{cert.date}</span>
            </div>

            {/* Action Button */}
            {cert.credentialLink && (
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-btn btn-data mt-auto"
              >
                View Credential
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
