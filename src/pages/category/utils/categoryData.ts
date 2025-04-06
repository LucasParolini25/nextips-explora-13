export interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  whatsappLink?: string;
  price?: string;
  features?: string;
  location?: string;
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
      title: 'Fiat Cronos',
      description: 'Sedán compacto ideal para la ciudad y viajes, con excelente consumo de combustible y amplio baúl.',
      image: '/images/autos/fiat-cronos.webp',
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
      category: 'Alquiler de autos',
      subcategory: 'Hatchback',
      price: 'A consultar',
      features: '\n• Pantalla táctil multimedia\n• Android Auto/Apple CarPlay\n• Sensores de estacionamiento\n• Control de velocidad crucero\n• Aire acondicionado\n• Dirección asistida\n• ABS y ESP\n• 6 Airbags',
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
  'hospedajes': 'Encuentra el alojamiento perfecto para tu estadía en Bariloche, desde hoteles de lujo hasta cabañas acogedoras.',
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
