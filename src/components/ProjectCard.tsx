import { useState } from 'react';
import PixelModal from './PixelModal';

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  docsLink?: string;
  codeLink?: string;
  siteLink?: string;
}

const ProjectCard = ({
  title,
  image,
  tags,
  docsLink,
  codeLink,
  siteLink,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSiteClick = (e: React.MouseEvent) => {
    if (siteLink === '#') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <article className="brutalist-card flex flex-col gap-6 max-w-[450px]">
        {/* Project Image */}
        <div className="overflow-hidden rounded-[10px] border-[3px] border-foreground">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="info-badge text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold leading-tight">
            {title}
          </h3>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {docsLink && (
              <a
                href={docsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-btn btn-data flex-1"
              >
                Docs
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-btn btn-code flex-1"
              >
                Code
              </a>
            )}
            {siteLink && (
              <a
                href={siteLink}
                target={siteLink === '#' ? undefined : "_blank"}
                rel={siteLink === '#' ? undefined : "noopener noreferrer"}
                onClick={handleSiteClick}
                className="brutalist-btn btn-site flex-1"
              >
                Site
              </a>
            )}
          </div>
        </div>
      </article>

      <PixelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Project Maintenance"
      />
    </>
  );
};

export default ProjectCard;
