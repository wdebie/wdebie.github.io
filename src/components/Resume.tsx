export function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
        <div className="bg-card text-card-foreground rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
          <p className="mb-6 text-base md:text-lg">
            Download my resume to see my full educational background, work experience, and technical skills.
          </p>
          <a
            href="/CV_DeBieWillem.pdf"
            download
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-base md:text-lg font-semibold shadow-md hover:shadow-lg"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}