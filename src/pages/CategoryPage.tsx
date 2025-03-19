import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TipCard from '@/components/ui/TipCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
}

// Datos de ejemplo para las diferentes categorías
const TIPS_DATA: Record<string, Tip[]> = {
  'excursiones': [
    {
      id: '1',
      title: 'Circuito Chico',
      description: 'Recorrido panorámico de 60 km que bordea lagos y miradores con vistas increíbles.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      category: 'Excursiones',
      subcategory: 'Circuitos'
    },
    {
      id: '4',
      title: 'Cerro Catedral',
      description: 'El centro de esquí más grande de Sudamérica, con pistas para todos los niveles.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      category: 'Excursiones',
      subcategory: 'Montaña'
    },
    {
      id: '7',
      title: 'Isla Victoria y Bosque de Arrayanes',
      description: 'Navegación por el Nahuel Huapi para conocer la isla y su famoso bosque centenario.',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      category: 'Excursiones',
      subcategory: 'Navegación'
    },
    {
      id: '8',
      title: 'Cerro Tronador',
      description: 'Excursión de día completo al imponente cerro con vistas al Glaciar Negro.',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
      category: 'Excursiones',
      subcategory: 'Montaña'
    }
  ],
  'hospedajes': [
    {
      id: '2',
      title: 'Hotel Vista Lago',
      description: 'Ubicado a orillas del Nahuel Huapi con habitaciones de lujo y spa con vista al lago.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      category: 'Hospedajes',
      subcategory: 'Hoteles'
    },
    {
      id: '5',
      title: 'Cabañas del Bosque',
      description: 'Alojamiento rústico y acogedor rodeado de bosques nativos y arroyos cristalinos.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      category: 'Hospedajes',
      subcategory: 'Cabañas'
    },
    {
      id: '9',
      title: 'Hostel Patagonia',
      description: 'Alojamiento económico con ambiente internacional y excelente ubicación en el centro.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      category: 'Hospedajes',
      subcategory: 'Hostels'
    },
    {
      id: '10',
      title: 'Apart Hotel Cordillera',
      description: 'Departamentos totalmente equipados con servicio de hotel y excelentes vistas.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      category: 'Hospedajes',
      subcategory: 'Apartamentos'
    }
  ],
  'alquiler-autos': [
    {
      id: '3',
      title: 'SUV Todo Terreno',
      description: 'Vehículos 4x4 ideales para recorrer caminos de montaña con seguridad y comodidad.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      category: 'Alquiler de autos',
      subcategory: 'SUV'
    },
    {
      id: '6',
      title: 'Económico Urbano',
      description: 'Autos compactos para moverse en la ciudad con el mejor precio y menor consumo.',
      image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
      category: 'Alquiler de autos',
      subcategory: 'Compactos'
    },
    {
      id: '11',
      title: 'Van Familiar',
      description: 'Vehículos espaciosos para grupos y familias, con capacidad desde 7 hasta 12 personas.',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
      category: 'Alquiler de autos',
      subcategory: 'Vans'
    },
    {
      id: '12',
      title: 'Camioneta 4x4',
      description: 'Pick-ups de doble tracción para los terrenos más difíciles y aventuras extremas.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      category: 'Alquiler de autos',
      subcategory: 'Camionetas'
    }
  ]
};

const CATEGORY_TITLES: Record<string, string> = {
  'excursiones': 'Excursiones',
  'hospedajes': 'Hospedajes',
  'alquiler-autos': 'Alquiler de Autos',
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'excursiones': 'Descubre las mejores actividades y circuitos para explorar la belleza natural de Bariloche.',
  'hospedajes': 'Encuentra el alojamiento perfecto para tu estadía en Bariloche, desde hoteles de lujo hasta cabañas acogedoras.',
  'alquiler-autos': 'Compara y elige el vehículo ideal para moverte con libertad durante tu visita a la Patagonia.',
};

const CATEGORY_IMAGES: Record<string, string> = {
  'excursiones': 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
  'hospedajes': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'alquiler-autos': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
};

const CategoryPage = () => {
  const { categoryId = '' } = useParams<{ categoryId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryTitle = CATEGORY_TITLES[categoryId] || 'Categoría';
  const categoryDescription = CATEGORY_DESCRIPTIONS[categoryId] || '';
  const categoryImage = CATEGORY_IMAGES[categoryId] || '';
  
  // Obtener los tips para esta categoría
  const tips = TIPS_DATA[categoryId] || [];
  
  // Obtener subcategorías únicas para esta categoría
  const subcategories = [...new Set(tips.map(tip => tip.subcategory))].filter(Boolean) as string[];
  
  // Filtrar tips según búsqueda y subcategoría
  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubcategory = !selectedSubcategory || tip.subcategory === selectedSubcategory;
    
    return matchesSearch && matchesSubcategory;
  });
  
  // Resetear la página al principio cuando cambia la categoría
  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchTerm('');
    setSelectedSubcategory(null);
  }, [categoryId]);
  
  // Verificar si hay filtros activos
  const hasActiveFilters = searchTerm || selectedSubcategory;
  
  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSubcategory(null);
  };
  
  return (
    <div className="min-h-screen bg-nextips-dark text-white">
      <Navbar />
      
      {/* Hero de la categoría */}
      <section className="relative pt-20 h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={categoryImage}
            alt={categoryTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nextips-dark/70 via-nextips-dark/70 to-nextips-dark"></div>
        </div>
        
        <div className="page-container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              {categoryTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              {categoryDescription}
            </p>
            
            {/* Barra de búsqueda */}
            <div className="relative animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={`Buscar en ${categoryTitle.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-nextips-darkBlue/60 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nextips-aqua/50"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contenido principal */}
      <section className="py-16">
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filtros para pantallas grandes */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-6 sticky top-24 border border-white/10">
                <h3 className="text-lg font-semibold mb-4 text-nextips-aqua">Filtros</h3>
                
                {subcategories.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Subcategorías</h4>
                    <div className="space-y-2">
                      {subcategories.map(subcategory => (
                        <div key={subcategory} className="flex items-center">
                          <button
                            onClick={() => setSelectedSubcategory(selectedSubcategory === subcategory ? null : subcategory)}
                            className={`flex items-center w-full p-2 rounded-md transition-colors ${
                              selectedSubcategory === subcategory
                                ? 'bg-nextips-aqua/20 text-nextips-aqua'
                                : 'text-gray-300 hover:bg-white/5'
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full mr-2 ${
                              selectedSubcategory === subcategory
                                ? 'bg-nextips-aqua'
                                : 'bg-gray-500'
                            }`}></span>
                            {subcategory}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-nextips-yellow hover:text-nextips-aqua flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>
            
            {/* Filtros para móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center mb-4 px-4 py-2 rounded-lg bg-nextips-darkBlue/30 border border-white/10 text-white"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
                {hasActiveFilters && (
                  <span className="ml-2 bg-nextips-aqua text-nextips-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
              
              {isFilterOpen && (
                <div className="bg-nextips-darkBlue/90 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/10 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-nextips-aqua">Filtros</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {subcategories.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Subcategorías</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {subcategories.map(subcategory => (
                          <button
                            key={subcategory}
                            onClick={() => {
                              setSelectedSubcategory(selectedSubcategory === subcategory ? null : subcategory);
                            }}
                            className={`p-2 rounded-md text-center text-sm transition-colors ${
                              selectedSubcategory === subcategory
                                ? 'bg-nextips-aqua/20 text-nextips-aqua border border-nextips-aqua/50'
                                : 'bg-white/5 text-gray-300 border border-white/10'
                            }`}
                          >
                            {subcategory}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-nextips-yellow hover:text-nextips-aqua flex items-center"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Limpiar filtros
                      </button>
                    )}
                    
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-sm bg-nextips-aqua text-nextips-dark px-4 py-2 rounded-md"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Lista de tips */}
            <div className="flex-1">
              {filteredTips.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTips.map((tip, index) => (
                    <TipCard
                      key={tip.id}
                      id={tip.id}
                      title={tip.title}
                      description={tip.description}
                      image={tip.image}
                      category={tip.subcategory || tip.category}
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-400 mb-4">No se encontraron resultados</p>
                  <button
                    onClick={clearFilters}
                    className="text-nextips-aqua hover:text-nextips-yellow"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
