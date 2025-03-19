
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Instagram, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error';
    message?: string;
  }>({
    status: 'idle'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting' });
    
    // Simular envío del formulario
    setTimeout(() => {
      setFormStatus({
        status: 'success',
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({ status: 'idle' });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-nextips-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="page-container">
          <div className="text-center mx-auto max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contáctanos
            </h1>
            <p className="text-gray-300">
              ¿Tienes alguna pregunta sobre nuestros tips o necesitas ayuda para planificar tu viaje a Bariloche? 
              Estamos aquí para ayudarte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <div className="bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 order-2 lg:order-1">
              <h2 className="text-xl font-semibold text-nextips-aqua mb-6">
                Envíanos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-nextips-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-nextips-aqua/50"
                      disabled={formStatus.status === 'submitting'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-nextips-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-nextips-aqua/50"
                      disabled={formStatus.status === 'submitting'}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-200 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-nextips-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-nextips-aqua/50"
                    disabled={formStatus.status === 'submitting'}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Excursiones">Consulta sobre excursiones</option>
                    <option value="Hospedajes">Consulta sobre hospedajes</option>
                    <option value="Alquiler de autos">Consulta sobre alquiler de autos</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-200 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-nextips-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-nextips-aqua/50 resize-none"
                    disabled={formStatus.status === 'submitting'}
                  ></textarea>
                </div>
                
                {formStatus.status === 'success' && (
                  <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg text-green-200 flex items-start">
                    <div className="mr-3 mt-0.5">
                      <Send className="h-5 w-5" />
                    </div>
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                {formStatus.status === 'error' && (
                  <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg text-red-200 flex items-start">
                    <div className="mr-3 mt-0.5">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <p>{formStatus.message}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-nextips-yellow hover:bg-yellow-400 text-nextips-dark font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  disabled={formStatus.status === 'submitting'}
                >
                  {formStatus.status === 'submitting' ? (
                    <>
                      <svg className="animate-spin mr-2 h-5 w-5 text-nextips-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Información de contacto */}
            <div className="order-1 lg:order-2">
              <div className="bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
                <h2 className="text-xl font-semibold text-nextips-aqua mb-6">
                  Información de contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-nextips-aqua/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-nextips-aqua" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Dirección</h3>
                      <p className="text-gray-300">Mitre 123, San Carlos de Bariloche, Río Negro, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nextips-aqua/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-nextips-aqua" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Email</h3>
                      <p className="text-gray-300">info@nextips.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nextips-aqua/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-nextips-aqua" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Teléfono</h3>
                      <p className="text-gray-300">+54 294 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nextips-aqua/20 p-3 rounded-full mr-4">
                      <Instagram className="h-6 w-6 text-nextips-aqua" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">Instagram</h3>
                      <p className="text-gray-300">@nextipsbariloche</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Horarios */}
              <div className="bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h2 className="text-xl font-semibold text-nextips-aqua mb-6">
                  Horarios de atención
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-300">Lunes a Viernes</span>
                    <span className="font-medium text-white">9:00 - 18:00</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-300">Sábados</span>
                    <span className="font-medium text-white">10:00 - 15:00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-300">Domingos y Feriados</span>
                    <span className="font-medium text-white">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="mt-16 bg-nextips-darkBlue/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-nextips-aqua mb-6 text-center">
              Nuestra ubicación
            </h2>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              {/* Aquí iría un iframe con Google Maps real */}
              <div className="w-full h-full bg-nextips-dark flex items-center justify-center">
                <span className="text-gray-400">
                  [Aquí se mostraría un mapa interactivo de la ubicación]
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
