import { Tip } from "../../category/utils/categoryData";

// Estructura para las categorías con subcategorías
export interface Category {
  id: string;
  name: string;
  subcategories?: string[];
  tips: Tip[];
}

// Datos de ejemplo para las diferentes categorías
export const categoryData: Category[] = [
  {
    id: 'excursiones',
    name: 'Excursiones',
    subcategories: ['Circuitos', 'Aventura', 'Gastronomía'],
    tips: [
      {
        id: '1',
        title: 'Circuito Chico',
        description: 'Recorrido panorámico de 60 km que bordea lagos y miradores con vistas increíbles.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        category: 'Excursiones',
        subcategory: 'Circuitos',
        whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
      },
      {
        id: '4',
        title: 'Cerro Catedral',
        description: 'El centro de esquí más grande de Sudamérica, con pistas para todos los niveles.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
        category: 'Excursiones',
        subcategory: 'Montaña',
        whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
      },
      {
        id: '7',
        title: 'Isla Victoria y Bosque de Arrayanes',
        description: 'Navegación por el Nahuel Huapi para conocer la isla y su famoso bosque centenario.',
        image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
        category: 'Excursiones',
        subcategory: 'Navegación',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20Isla%20Victoria'
      },
      {
        id: '8',
        title: 'Cerro Tronador',
        description: 'Excursión de día completo al imponente cerro con vistas al Glaciar Negro.',
        image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
        category: 'Excursiones',
        subcategory: 'Montaña',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20Cerro%20Tronador'
      }
    ]
  },
  {
    id: 'hospedajes',
    name: 'Hospedajes',
    subcategories: ['Hoteles', 'Cabañas', 'Hosteles'],
    tips: [
      {
        id: '2',
        title: 'Hotel Boutique Bariloche',
        description: 'Elegancia Patagónica con Vistas al Nahuel Huapi',
        image: '/images/hospedajes/hotel-boutique/main.webp',
        category: 'Hospedajes',
        subcategory: 'Hoteles',
        features: 'Habitaciones con vista al lago, Departamentos amplios para familias, Full House (exclusividad para grupos)',
        location: 'Los Cerezos 5407, San Carlos de Bariloche',
        price: 'A consultar',
        whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
      },
      {
        id: '5',
        title: 'Cabañas Pura Vida',
        description: 'Descanso y comodidad cerca del lago y la ciudad',
        image: '/images/hospedajes/cabanas-pura-vida/main.webp',
        category: 'Hospedajes',
        subcategory: 'Cabañas',
        price: 'A consultar',
        amenities: 'Cabañas familiares con 2 habitaciones, Estilo dúplex con espacio verde',
        location: 'Cabildo 150, R8400 San Carlos de Bariloche',
        fullDescription: 'Viví la experiencia de Bariloche desde una cabaña cálida y cómoda, con parrilla y cochera propia. A metros del Lago Nahuel Huapi y con fácil acceso al centro, Cabañas Pura Visa es perfecta para familias, parejas o viajeros que buscan tranquilidad sin alejarse de todo.',
        whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20me%20interesan%20las%20Cabañas%20Pura%20Vida'
      }
    ]
  },
  {
    id: 'alquiler-autos',
    name: 'Alquiler de autos',
    subcategories: ['Sedán', 'Hatchback'],
    tips: [
      {
        id: '1',
        title: 'Fiat Cronos',
        description: 'Sedán compacto ideal para la ciudad y viajes, con excelente consumo de combustible y amplio baúl.',
        image: '/images/autos/fiat-cronos.webp',
        category: 'Alquiler de autos',
        subcategory: 'Sedán',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20alquiler%20de%20Fiat%20Cronos'
      },
      {
        id: '2',
        title: 'Peugeot 208',
        description: 'Hatchback moderno y dinámico, perfecto para moverse en la ciudad con estilo y comodidad.',
        image: '/images/autos/peugeot-208.webp',
        category: 'Alquiler de autos',
        subcategory: 'Hatchback',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20alquiler%20de%20Peugeot%20208'
      }
    ]
  }
];
