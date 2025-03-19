
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Share2, Instagram, MapPin, ExternalLink } from 'lucide-react';

// Mock data de todos los tips
const ALL_TIPS = [
  {
    id: '1',
    title: 'Circuito Chico',
    description: 'Recorrido panorámico de 60 km que bordea lagos y miradores con vistas increíbles.',
    fullDescription: 'El Circuito Chico es uno de los recorridos más populares y emblemáticos de Bariloche. Este paseo de aproximadamente 60 kilómetros te permitirá disfrutar de algunos de los paisajes más bellos de la región en poco tiempo. Durante el recorrido podrás apreciar los lagos Nahuel Huapi y Perito Moreno, el Cerro Campanario, el Hotel Llao Llao y la Capilla San Eduardo. El circuito puede realizarse en auto particular, bicicleta o mediante excursiones organizadas que incluyen paradas en los puntos más destacados.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      'https://images.unsplash.com/photo-1458668383970-8ddd3927deed'
    ],
    category: 'Excursiones',
    subcategory: 'Circuitos',
    price: 'Desde $15.000',
    duration: '4 horas',
    location: 'Salida desde el Centro Cívico',
    whatsappLink: 'https://wa.me/5492944123456?text=Hola%2C%20me%20interesa%20el%20Circuito%20Chico'
  },
  {
    id: '2',
    title: 'Hotel Vista Lago',
    description: 'Ubicado a orillas del Nahuel Huapi con habitaciones de lujo y spa con vista al lago.',
    fullDescription: 'El Hotel Vista Lago es un alojamiento de categoría superior ubicado en una posición privilegiada a orillas del lago Nahuel Huapi. Todas sus habitaciones ofrecen impresionantes vistas al lago y a la cordillera. El hotel cuenta con spa completo, piscina climatizada, restaurante gourmet especializado en gastronomía patagónica y servicio de concierge para ayudarte a organizar todas tus actividades durante la estadía. Su ubicación permite fácil acceso tanto al centro de la ciudad como a las principales atracciones naturales.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    gallery: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9'
    ],
    category: 'Hospedajes',
    subcategory: 'Hoteles',
    price: 'Desde $45.000 por noche',
    amenities: 'WiFi, Desayuno, Spa, Piscina climatizada',
    location: 'Av. Bustillo km 8',
    whatsappLink: 'https://wa.me/5492944123456?text=Hola%2C%20me%20interesa%20reservar%20en%20Hotel%20Vista%20Lago'
  },
  {
    id: '3',
    title: 'SUV Todo Terreno',
    description: 'Vehículos 4x4 ideales para recorrer caminos de montaña con seguridad y comodidad.',
    fullDescription: 'Nuestros SUVs Todo Terreno son la mejor opción para recorrer los caminos de Bariloche con total seguridad y confort. Contamos con una flota de vehículos 4x4 de primeras marcas, totalmente equipados para la conducción en montaña y condiciones invernales. Todos incluyen sistemas de tracción integral, control de estabilidad, neumáticos todo terreno y equipamiento completo de seguridad. Perfectos para visitar destinos como el Cerro Tronador, Villa Traful o la Ruta de los Siete Lagos, donde los caminos de ripio requieren vehículos con buena altura.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    gallery: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3'
    ],
    category: 'Alquiler de autos',
    subcategory: 'SUV',
    price: 'Desde $35.000 por día',
    features: 'Tracción 4x4, GPS, Asistencia 24hs',
    location: 'Av. Bustillo km 1',
    whatsappLink: 'https://wa.me/5492944123456?text=Hola%2C%20me%20interesa%20alquilar%20un%20SUV%20Todo%20Terreno'
  },
  // ... puedes agregar el resto de los tips aquí
];

const TipDetail = () => {
  const { tipId } = useParams<{ tipId: string }>();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Buscar el tip por ID
  const tip = ALL_TIPS.find(t => t.id === tipId);
  
  useEffect(() => {
    // Resetear la página al principio
    window.scrollTo(0, 0);
    
    if (tip) {
      setMainImage(tip.image);
      setIsLoaded(false);
    } else {
      // Si no se encuentra el tip, redirigir a la página de inicio
      navigate('/');
    }
  }, [tipId, navigate, tip]);
  
  if (!tip) {
    return null; // O un componente de carga
  }
  
  const handleImageClick = (image: string, index: number) => {
    setMainImage(image);
    setIsLoaded(false);
    setSelectedImageIndex(index);
  };
  
  const shareOnWhatsApp = () => {
    if (tip.whatsappLink) {
      window.open(tip.whatsappLink, '_blank');
    } else {
      const text = `¡Mira este tip sobre ${tip.title} en Bariloche! ${window.location.origin}/tip/${tip.id}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };
  
  const shareOnInstagram = () => {
    // Como Instagram no permite compartir directamente, abrimos la app
    window.open('https://www.instagram.com/', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-nextips-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="page-container">
          {/* Botón Volver */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-300 hover:text-nextips-aqua transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Galería de imágenes */}
            <div className="lg:col-span-2">
              {/* Imagen principal */}
              <div className="rounded-xl overflow-hidden aspect-video relative mb-4">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-nextips-darkBlue/50 animate-pulse" />
                )}
                <img
                  src={mainImage}
                  alt={tip.title}
                  className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
              
              {/* Miniaturas */}
              {tip.gallery && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  <div 
                    className={`relative rounded-lg overflow-hidden h-20 w-32 shrink-0 cursor-pointer transition-all duration-300 ${selectedImageIndex === -1 ? 'ring-2 ring-nextips-aqua' : 'opacity-70 hover:opacity-100'}`}
                    onClick={() => handleImageClick(tip.image, -1)}
                  >
                    <img 
                      src={tip.image} 
                      alt={`${tip.title} - Principal`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {tip.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative rounded-lg overflow-hidden h-20 w-32 shrink-0 cursor-pointer transition-all duration-300 ${selectedImageIndex === index ? 'ring-2 ring-nextips-aqua' : 'opacity-70 hover:opacity-100'}`}
                      onClick={() => handleImageClick(image, index)}
                    >
                      <img 
                        src={image} 
                        alt={`${tip.title} - ${index + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Información del tip */}
            <div className="bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded bg-nextips-aqua/90 text-white text-sm mb-3">
                  {tip.subcategory || tip.category}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{tip.title}</h1>
                <p className="text-gray-300">{tip.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {tip.price && (
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300">Precio:</span>
                    <span className="font-medium text-white">{tip.price}</span>
                  </div>
                )}
                
                {tip.duration && (
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300">Duración:</span>
                    <span className="font-medium text-white">{tip.duration}</span>
                  </div>
                )}
                
                {tip.amenities && (
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300">Servicios:</span>
                    <span className="font-medium text-white">{tip.amenities}</span>
                  </div>
                )}
                
                {tip.features && (
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300">Características:</span>
                    <span className="font-medium text-white">{tip.features}</span>
                  </div>
                )}
                
                {tip.location && (
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-300">Ubicación:</span>
                    <div className="flex items-center font-medium text-white">
                      <MapPin className="h-4 w-4 mr-1 text-nextips-aqua" />
                      {tip.location}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-col space-y-3">
                <button
                  onClick={shareOnWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Consultar por WhatsApp
                </button>
                
                <button
                  onClick={shareOnInstagram}
                  className="w-full bg-nextips-dark border border-white/20 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-pink-600/20 hover:border-pink-500/40"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Compartir en Instagram
                </button>
              </div>
            </div>
          </div>
          
          {/* Descripción completa */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Sobre {tip.title}</h2>
            <div className="bg-nextips-darkBlue/20 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <p className="text-gray-200 leading-relaxed">{tip.fullDescription}</p>
              
              {tip.whatsappLink && (
                <div className="mt-8 flex justify-center">
                  <a
                    href={tip.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-nextips-aqua hover:bg-nextips-lightAqua text-nextips-dark font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Solicitar más información
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TipDetail;
