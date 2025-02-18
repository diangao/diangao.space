'use client'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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

const zoomLevels = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const currentIndex = selectedImage 
    ? photos.findIndex(photo => photo.full === selectedImage)
    : -1;

  const getCurrentZoomIndex = () => zoomLevels.indexOf(scale);

  // 使用 useCallback 来记忆化缩放处理函数
  const handleZoom = useCallback((zoomIn: boolean) => {
    if (isTransitioning) return;
    
    setScale(prev => {
      const currentIndex = zoomLevels.indexOf(prev);
      const newIndex = zoomIn ? 
        Math.min(currentIndex + 1, zoomLevels.length - 1) : 
        Math.max(currentIndex - 1, 0);
      return zoomLevels[newIndex];
    });
  }, [isTransitioning]);

  // 图片切换函数
  const switchImage = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setScale(1);
    
    requestAnimationFrame(() => {
      setSelectedImage(photos[newIndex].full);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    });
  }, []);

  // 滚轮事件处理
  useEffect(() => {
    // 明确定义 WheelEvent 处理函数类型
    const handleWheel = (e: WheelEvent) => {
      if (!selectedImage || isTransitioning) return;
      e.preventDefault();
      handleZoom(e.deltaY < 0);
    };

    const modalElement = document.querySelector('.modal-overlay');
    if (modalElement) {
      // 使用类型断言来处理事件监听器
      (modalElement as HTMLElement).addEventListener('wheel', handleWheel as unknown as EventListener, {
        passive: false
      });
      
      return () => {
        (modalElement as HTMLElement).removeEventListener('wheel', handleWheel as unknown as EventListener);
      };
    }
  }, [selectedImage, isTransitioning, handleZoom]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage || isTransitioning) return;
      
      if (e.key === 'ArrowRight' && currentIndex < photos.length - 1) {
        switchImage(currentIndex + 1);
      }
      else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        switchImage(currentIndex - 1);
      }
      else if (e.key === '+' || e.key === '=') {
        handleZoom(true);
      }
      else if (e.key === '-') {
        handleZoom(false);
      }
      else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, isTransitioning, handleZoom, switchImage]);

  useEffect(() => {
    if (selectedImage) {
      window.scrollTo(0, 0);
    }
  }, [selectedImage]);

  // 修改选择图片的处理
  const handleImageSelect = (imageUrl: string) => {
    setScrollPosition(window.scrollY); // 存储当前滚动位置
    setSelectedImage(imageUrl);
  };

  // 修改关闭图片的处理
  const handleCloseImage = () => {
    setSelectedImage(null);
    // 在下一个事件循环中恢复滚动位置
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

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
              className="relative aspect-[4/3] bg-[#d4d5bf]/20 backdrop-blur-[1px] group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageSelect(photo.full)}
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
                  <h3 className="text-lg font-normal tracking-tight">{photo.title}</h3>
                  <p className="text-sm font-light opacity-80 mt-1">{photo.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 items-center justify-center modal-overlay hidden md:flex"
                onClick={handleCloseImage}
              >
                <div 
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    key={`${selectedImage}-${scale}`}
                    src={selectedImage}
                    alt="Full size"
                    fill
                    sizes="100vw"
                    className="object-contain transition-transform duration-500 ease-out fullsize-image"
                    style={{ transform: `scale(${scale})` }}
                    quality={100}
                    priority
                    onClick={handleCloseImage}
                  />
                  <div 
                    id="description-box" 
                    className="absolute bottom-0 w-full backdrop-blur-sm bg-black/40"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-sm text-white/90 leading-relaxed p-8">
                      {photos.find(photo => photo.full === selectedImage)?.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#94956F] dark:bg-black z-50 overflow-y-auto md:hidden"
                onClick={handleCloseImage}
              >
                <div 
                  className="min-h-screen pt-14"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div 
                    className="relative aspect-[4/3] w-full"
                    onClick={handleCloseImage}
                  >
                    <Image
                      src={selectedImage}
                      alt="Full size"
                      fill
                      sizes="100vw"
                      className="object-contain"
                      quality={100}
                      priority
                    />
                  </div>

                  <div 
                    className="px-4 py-6"
                    onClick={handleCloseImage}
                  >
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-xl font-normal tracking-tight text-white">
                        {photos.find(photo => photo.full === selectedImage)?.title}
                      </h2>
                      <p className="mt-3 text-base font-light leading-relaxed text-white/80">
                        {photos.find(photo => photo.full === selectedImage)?.description}
                      </p>
                      <p className="mt-4 text-sm font-light text-white/60">
                        {photos.find(photo => photo.full === selectedImage)?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 