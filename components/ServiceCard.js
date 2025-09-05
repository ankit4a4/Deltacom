import { memo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const ServiceCard = memo(({ service, index }) => {
  const IconComponent = service.icon;

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-96 lg:h-[28rem] rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-border duration-300 will-change-transform">
        
        {/* Optimized Background Image */}
        <div className="relative h-full w-full">
          <Image
            src={service.backgroundImage}
            alt={`${service.title} background`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 3} // Prioritize first 3 images
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Single Optimized Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`}></div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between px-4 py-3 text-white">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              {service.subtitle}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                {service.title}
              </h3>
              <p className="text-white/90 text-xs leading-relaxed drop-shadow-md">
                {service.description}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href={`${service.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 text-[#e4ebf1] font-medium hover:bg-white/20 transition-colors duration-300 text-sm"
            >
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
