'use client'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const photos = [
  {
    id: 1,
    title: "Peasant Woman and the River",
    thumbnail: "/photography/thumbnails/PeasantWomanandtheRiver.jpg",
    full: "/photography/full/PeasantWomanandtheRiver.jpg",
    description: "The piece titled \"Peasant Woman and the River\" is a reflection of the daily lives of the Nanjian villagers, who rely heavily on cash crop production, such as mango and sugarcane. The photograph captures a woman tending to a young mango tree, a crucial component of the village's livelihood. The river in the background symbolizes the life-giving force that sustains the land, providing irrigation for the farms and a bountiful supply of fish for the people of Nanjian. The image speaks to the vital role played by both the peasant women and the river in nurturing this community and ensuring its continued existence.",
    date: "2019",
  },
  {
    id: 2,
    title: "Baiyan & His Wuxia Dream",
    thumbnail: "/photography/thumbnails/BaiyanHisWuxiaDream.jpg",
    full: "/photography/full/BaiyanHisWuxiaDream.jpg",
    description: "This photograph portrays the daily life of an 8-year-old boy named Baiyan (白焱), who is being raised solely by his grandmother. Baiyan's mother left home due to domestic violence and has not returned, while his father works in the town and is seldom home. Despite his difficult circumstances, Baiyan is seen in the photograph practicing throwing his fluorescent martial art \"knife,\" dreaming of one day becoming a master of Wuxia. The image captures the resilience and determination of the young boy, who finds solace and hope in his dreams and aspirations, despite the challenges he faces in his daily life.",
    date: "2019",
  },
  {
    id: 3,
    title: "Broken Loom",
    thumbnail: "/photography/thumbnails/BrokenLoom(sized_down).jpg",
    full: "/photography/full/BrokenLoom(sized_down).jpg",
    description: "\"Broken Loom\" also captures the impact of modernization on traditional practices. The image features a composite picture where the light from the city is flickering through the cobwebbed window into a decrepit loom room in a villager's home. This juxtaposition highlights the challenge that modernization poses to traditional looming techniques. The photograph raises important questions about the future of Nanjian's people and their cultural practices. Where are they heading? Who will take care of this precious culture during a time of rapid replacement? These questions are crucial to consider as we move forward and seek to preserve the cultural heritage of Nanjian and its people.",
    date: "2019",
  },
  {
    id: 4,
    title: "Suture",
    thumbnail: "/photography/thumbnails/Suture.jpg",
    full: "/photography/full/Suture.jpg",
    description: "In addition to their agricultural work, the women of Nanjian also engage in the traditional craft of embroidery. My photograph titled \"Suture\" captures this aspect of village life, where the grannies of the village can be seen working on their traditional embroidery. The image also features a composite picture where skyscrapers are sutured to the homes of the Nanjian people. In the face of rapid urbanization and modernization, many traditional skills and practices are being forgotten. However, the women in the photograph are seen to be suturing the gap between the neglected traditions and the quickly modernized aesthetic despite the rampant invasion of urbanization. The image speaks to the importance of preserving the cultural heritage of Nanjian and its people, even in the face of rapid change and modernization.",
    date: "2019",
  }
];

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  
  const zoomLevels = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
  
  const getCurrentZoomIndex = () => {
    return zoomLevels.findIndex(zoom => zoom >= scale) || 0;
  };

  const currentIndex = selectedImage ? photos.findIndex(photo => photo.full === selectedImage) : -1;

  const nextImage = () => {
    if (currentIndex < photos.length - 1) {
      setSelectedImage(photos[currentIndex + 1].full);
      setScale(1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(photos[currentIndex - 1].full);
      setScale(1);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (!selectedImage) return;
    
    e.preventDefault();
    const currentIndex = getCurrentZoomIndex();
    
    if (e.deltaY < 0 && currentIndex < zoomLevels.length - 1) {
      setScale(zoomLevels[currentIndex + 1]);
    } else if (e.deltaY > 0 && currentIndex > 0) {
      setScale(zoomLevels[currentIndex - 1]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;
    
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    
    const currentIndex = getCurrentZoomIndex();
    if (e.key === '+' || e.key === '=' && currentIndex < zoomLevels.length - 1) {
      setScale(zoomLevels[currentIndex + 1]);
    }
    if (e.key === '-' && currentIndex > 0) {
      setScale(zoomLevels[currentIndex - 1]);
    }
    if (e.key === 'Escape') setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [selectedImage]);

  const updateDescriptionBox = (img: HTMLImageElement) => {
    const descriptionBox = document.getElementById('description-box');
    if (descriptionBox) {
      if (!descriptionBox.style.width) {
        const width = img.naturalWidth;
        const maxWidth = window.innerWidth * 0.8;
        const finalWidth = Math.min(width, maxWidth);
        
        console.log('Setting initial description box width:', {
          naturalWidth: width,
          finalWidth,
          timestamp: new Date().getTime()
        });
        
        descriptionBox.style.width = `${finalWidth}px`;
        descriptionBox.style.left = `${(window.innerWidth - finalWidth) / 2}px`;
      }
    }
  };

  useEffect(() => {
    if (selectedImage) {
      const descriptionBox = document.getElementById('description-box');
      if (descriptionBox) {
        descriptionBox.style.width = '';
        descriptionBox.style.left = '';
      }
    }
  }, [selectedImage]);

  useEffect(() => {
    console.log('Selected image changed:', {
      selectedImage,
      scale,
      timestamp: new Date().getTime()
    });
    
    if (selectedImage) {
      const img = document.querySelector('.fullsize-image') as HTMLImageElement;
      console.log('Found image element:', {
        isComplete: img?.complete,
        naturalWidth: img?.naturalWidth,
        currentWidth: img?.getBoundingClientRect().width,
        scale,
        computedStyle: img ? window.getComputedStyle(img).transform : null,
        timestamp: new Date().getTime()
      });
      
      if (img && img.complete) {
        updateDescriptionBox(img);
      }
    }
  }, [selectedImage, scale]);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {photos.map((photo) => (
            <motion.div 
              key={photo.id} 
              className="relative aspect-[4/3] bg-black/5 dark:bg-white/5 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(photo.full)}
            >
              <Image
                src={photo.thumbnail}
                alt={photo.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-light">{photo.title}</h3>
                  <p className="text-sm opacity-80">{photo.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <Image
                src={selectedImage}
                alt="Full size"
                fill
                className="object-contain transition-transform duration-200 fullsize-image"
                style={{ transform: `scale(${scale})` }}
                quality={100}
                priority
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  updateDescriptionBox(img);
                }}
              />
              <div 
                id="description-box" 
                className="absolute bottom-0 backdrop-blur-sm bg-black/40"
              >
                <p className="text-sm text-white/90 leading-relaxed p-8">
                  {photos.find(photo => photo.full === selectedImage)?.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 