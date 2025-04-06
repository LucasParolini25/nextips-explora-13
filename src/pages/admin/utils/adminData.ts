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
    subcategories: ['Circuitos', 'Montaña', 'Navegación', 'Trekking'],
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
    subcategories: ['Hoteles', 'Cabañas', 'Hostels', 'Apartamentos'],
    tips: [
      {
        id: '2',
        title: 'Hotel Vista Lago',
        description: 'Ubicado a orillas del Nahuel Huapi con habitaciones de lujo y spa con vista al lago.',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
        category: 'Hospedajes',
        subcategory: 'Hoteles',
        whatsappLink: 'https://wa.me/5492944674325?text=Hola%2C%20vi%20tu%20web%20y%20estoy%20interesado%20en%20saber%20más'
      },
      {
        id: '5',
        title: 'Cabañas del Bosque',
        description: 'Alojamiento rústico y acogedor rodeado de bosques nativos y arroyos cristalinos.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        category: 'Hospedajes',
        subcategory: 'Cabañas',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20Cabañas%20del%20Bosque'
      },
      {
        id: '9',
        title: 'Hostel Patagonia',
        description: 'Alojamiento económico con ambiente internacional y excelente ubicación en el centro.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
        category: 'Hospedajes',
        subcategory: 'Hostels',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20Hostel%20Patagonia'
      },
      {
        id: '10',
        title: 'Apart Hotel Cordillera',
        description: 'Departamentos totalmente equipados con servicio de hotel y excelentes vistas.',
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        category: 'Hospedajes',
        subcategory: 'Apartamentos',
        whatsappLink: 'https://wa.me/5492944674325?text=Consulta%20sobre%20Apart%20Hotel%20Cordillera'
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
