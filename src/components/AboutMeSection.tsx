const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'SQL', 'R'] },
    { category: 'Data Analysis', items: ['Pandas', 'NumPy', 'Excel', 'Tableau', 'Power BI'] },
    { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'PyTorch'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Jupyter', 'VS Code'] },
    { category: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly', 'D3.js'] },
];

const AboutMeSection = () => {
    return (
        <section id="about" className="px-4 md:px-8 lg:px-16 py-12">
            {/* Section Header */}
            <div className="section-header rounded-lg mb-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
            </div>

            <div className="brutalist-card max-w-4xl mx-auto">
                {/* Bio */}
                <div className="mb-8">
                    <p className="text-lg leading-relaxed mb-4">
                        I’m a Computer Science graduate with a strong interest in data analysis and problem-solving.
                    </p>
                    <p className="text-lg leading-relaxed">

                        I enjoy working with data end to end — from cleaning and exploration to visualization and insights. Through hands-on projects, I’ve worked with real datasets using Python, SQL, and visualization tools to answer practical questions.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I’m currently focused on strengthening my fundamentals, building meaningful projects, and growing as a data analyst through continuous learning and experimentation.
                    </p>
                </div>

                {/* Skills Grid */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">My Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.map((skillGroup) => (
                            <div
                                key={skillGroup.category}
                                className="bg-background border-2 border-foreground rounded-lg p-4"
                                style={{ boxShadow: '3px 3px 0 hsl(var(--foreground))' }}
                            >
                                <h4 className="font-bold text-primary mb-3">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="info-badge text-sm rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
