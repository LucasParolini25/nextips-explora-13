export interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];  // Array opcional de URLs de imágenes
  category: string;
  subcategory?: string;
  whatsappLink?: string;
  price?: string;
  features?: string;
  location?: string;
  amenities?: string;
  fullDescription?: string;
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
      subcategory: 'Circuitos',
      price: 'Desde $15.000',
      whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
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
      title: 'Hotel Boutique Bariloche',
      description: 'Elegancia Patagónica con Vistas al Nahuel Huapi',
      image: '/images/hospedajes/hotel-boutique/main.webp',
      gallery: [
        '/images/hospedajes/hotel-boutique/main.webp',
        '/images/hospedajes/hotel-boutique/room.webp',
        '/images/hospedajes/hotel-boutique/room2.webp',
        '/images/hospedajes/hotel-boutique/view.webp',
        '/images/hospedajes/hotel-boutique/lobby.webp'
      ],
      category: 'Hospedajes',
      subcategory: 'Hoteles',
      price: 'A consultar',
      features: '\n• Habitaciones con vista al lago\n• Departamentos amplios para familias\n• Full House (exclusividad para grupos)',
      location: 'Los Cerezos 5407, San Carlos de Bariloche',
      whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
    },
    {
      id: '5',
      title: 'Cabañas Pura Vida',
      description: 'Descanso y comodidad cerca del lago y la ciudad',
      image: '/images/hospedajes/cabanas-pura-vida/main.webp',
      gallery: [
        '/images/hospedajes/cabanas-pura-vida/main.webp',
        '/images/hospedajes/cabanas-pura-vida/interior.webp',
        '/images/hospedajes/cabanas-pura-vida/exterior.webp',
        '/images/hospedajes/cabanas-pura-vida/garden.webp'
      ],
      category: 'Hospedajes',
      subcategory: 'Cabañas',
      price: 'A consultar',
      amenities: 'Cabañas familiares con 2 habitaciones, Estilo dúplex con espacio verde',
      location: 'Cabildo 150, R8400 San Carlos de Bariloche',
      fullDescription: 'Viví la experiencia de Bariloche desde una cabaña cálida y cómoda, con parrilla y cochera propia. A metros del Lago Nahuel Huapi y con fácil acceso al centro, Cabañas Pura Visa es perfecta para familias, parejas o viajeros que buscan tranquilidad sin alejarse de todo.',
      whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20me%20interesan%20las%20Cabañas%20Pura%20Vida'
    }
  ],
  'alquiler-autos': [
    {
      id: '3',
      title: 'Fiat Cronos',
      description: 'Sedán compacto ideal para la ciudad y viajes, con excelente consumo de combustible y amplio baúl.',
      image: '/images/autos/fiat-cronos.webp',
      gallery: [
        '/images/autos/fiat-cronos.webp',
        '/images/autos/fiat-cronos-2.webp',
        '/images/autos/fiat-cronos-3.webp',
        '/images/autos/fiat-cronos-4.webp'
      ],
      category: 'Alquiler de autos',
      subcategory: 'Sedán',
      price: 'A consultar',
      features: '\n• Aire acondicionado\n• Dirección asistida\n• ABS\n• Airbags\n• Radio con Bluetooth\n• Cierre centralizado',
      location: 'Canelo 390 y Aeropuerto Internacional de Bariloche',
      whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20alquiler%20de%20Fiat%20Cronos'
    },
    {
      id: '6',
      title: 'Peugeot 208',
      description: 'Hatchback moderno y dinámico, perfecto para moverse en la ciudad con estilo y comodidad.',
      image: '/images/autos/peugeot-208.webp',
      gallery: [
        '/images/autos/peugeot-208.webp',
        '/images/autos/peugeot-208-2.webp',
        '/images/autos/peugeot-208-3.webp',
        '/images/autos/peugeot-208-4.webp'
      ],
      category: 'Alquiler de autos',
      subcategory: 'Hatchback',
      price: 'A consultar',
      features: '\n• Aire acondicionado\n• Dirección asistida\n• ABS\n• Airbags\n• Radio con Bluetooth\n• Cierre centralizado',
      location: 'Canelo 390 y Aeropuerto Internacional de Bariloche',
      whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20alquiler%20de%20Peugeot%20208'
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
  'hospedajes': 'Encuentra el alojamiento perfecto para tu estadía en Bariloche, desde hoteles y cabañas hasta hosteles.',
  'alquiler-autos': 'Compara y elige el vehículo ideal para moverte con libertad durante tu visita a la Patagonia.',
};

const CATEGORY_IMAGES: Record<string, string> = {
  'excursiones': 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
  'hospedajes': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'alquiler-autos': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
};

export const getCategoryTitle = (categoryId: string): string => {
  return CATEGORY_TITLES[categoryId] || 'Categoría';
};

export const getCategoryDescription = (categoryId: string): string => {
  return CATEGORY_DESCRIPTIONS[categoryId] || '';
};

export const getCategoryImage = (categoryId: string): string => {
  return CATEGORY_IMAGES[categoryId] || '';
};

export const getTipsByCategory = (categoryId: string): Tip[] => {
  return TIPS_DATA[categoryId] || [];
};
