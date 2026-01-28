const techItems = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'Java', icon: '☕' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Excel', icon: '📊' },
  { name: 'Matplotlib', icon: '📈' },
];

const TechCarousel = () => {
  return (
    <div className="border-t-2 border-b-2 border-foreground bg-background py-4 overflow-hidden">
      <div className="carousel-track">
        {/* Double the items for seamless loop */}
        {[...techItems, ...techItems].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
