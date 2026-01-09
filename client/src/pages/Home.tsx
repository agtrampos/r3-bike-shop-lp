import { MessageCircle, Wrench, Package, Users, Star, MapPin, Phone, ShoppingCart, ArrowRight, Instagram, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const whatsappNumber = "5511939065111";
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de mais informacoes sobre os servicos de manutencao e venda de bicicletas da R3 Bike Shop."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://www.instagram.com/r3bikeshop";
  const logoUrl = "https://official-lp.com.br/wp-content/uploads/2025/10/ChatGPT-Image-30_10_2025-23_05_22-e1761917833516.png";

  const deliveryImages = [
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-2-e1761915662651.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-1-e1761915681146.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-e1761915696692.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-2-e1761915925151.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-1-e1761915952803.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-e1761915976372.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-3-e1761916003786.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-2-e1761916028777.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-e1761916068449.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.52-e1761916085537.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-10.00.09-e1761916105228.jpeg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deliveryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deliveryImages.length) % deliveryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="R3 Bike Shop Logo" className="h-12 w-auto" />
            <span className="font-montserrat font-bold text-xl text-foreground hidden sm:inline">
              R3 Bike Shop & Oficina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero / Quem Somos */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                Zona Norte de São Paulo
              </span>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Quem Somos
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A <strong>R3 Bike Shop</strong> é especializada em <strong>venda e manutenção de bicicletas</strong> na Zona Norte de São Paulo.
                </p>
                <p>
                  Com uma equipe experiente e apaixonada por bikes, oferecemos serviços de revisão completa, regulagem, troca de peças e personalização.
                </p>
                <p>
                  Nosso objetivo é garantir que cada cliente tenha segurança, conforto e desempenho na pedalada, seja no lazer ou no esporte.
                </p>
                <p>
                  Atendemos com transparência e compromisso para que você tenha uma experiência de confiança e qualidade em cada visita.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappLink} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">
                  <MessageCircle size={20} />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.40-1-e1761917054642.jpeg"
                alt="R3 Bike Shop Oficina"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Star className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Qualidade R3</p>
                    <p className="text-sm text-muted-foreground">Especialistas em performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Conheça Nossos Serviços */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Conheça Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Atendemos São Paulo/SP e região, com serviços especializados em venda, manutenção e revisão completa de bicicletas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Venda de Bicicletas */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.40-1-e1761917054642.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Venda de Bicicletas"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Venda de Bicicletas</h3>
              </div>
            </div>

            {/* Revisão Completa */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.39-e1761917118885.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Revisão Completa"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Revisão Completa</h3>
              </div>
            </div>

            {/* Conserto e Manutenção */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.56.08-e1761916935198.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Conserto e Manutenção"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Conserto e Manutenção</h3>
              </div>
            </div>

            {/* Peças e Componentes */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.49-3-e1761916956872.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Peças e Componentes"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Peças e Componentes</h3>
              </div>
            </div>

            {/* Acessórios para Bike */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.49-2-e1761916981362.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Acessórios para Bike"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Acessórios para Bike</h3>
              </div>
            </div>

            {/* Serviço de Busca e Leva */}
            <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/5]">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.49-1-e1761917008308.jpeg" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" 
                alt="Serviço de Busca e Leva"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-montserrat font-bold text-2xl uppercase tracking-wider">Serviço de Busca e Leva</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Entregas */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Entregas e Clientes R3 Bike Shop</h2>
            <p className="text-muted-foreground text-lg">Veja algumas das bicicletas entregues pela R3 Bike Shop em São Paulo.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
              {deliveryImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={img} alt={`Entrega ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {deliveryImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização e Map */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-8">Estamos prontos para te atender</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Endereço</h4>
                    <p className="text-muted-foreground">Rua Conselheiro Moreira de Barros, 3809 – Lauzane Paulista – São Paulo/SP</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Contato</h4>
                    <p className="text-muted-foreground">(11) 9 3906-5111 | (11) 9 8713-1015</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Siga-nos</h4>
                    <p className="text-muted-foreground">@r3bikeshop</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3659.578641178335!2d-46.6366666!3d-23.4755555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6e6e6e6e6e6%3A0x6e6e6e6e6e6e6e6e!2sR.%20Conselheiro%20Moreira%20de%20Barros%2C%203809%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002430-001!5e0!3m2!1spt-BR!2sbr!4v1621234567890!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground text-lg">Tire suas dúvidas rápidas aqui.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Onde vocês atendem?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Nossa loja está localizada na Rua Conselheiro Moreira de Barros, 3809 – Lauzane Paulista – São Paulo/SP.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">As bicicletas têm garantia?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim! Todas as nossas bicicletas novas possuem garantia de fábrica e as revisões feitas em nossa oficina contam com garantia de serviço.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">É possível parcelar o pagamento?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim, parcelamos em até 12x no cartão de crédito. Também aceitamos PIX com desconto especial.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-lg">Vocês oferecem orçamento gratuito?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim! Você pode trazer sua bike até a loja ou solicitar uma prévia de orçamento pelo nosso WhatsApp sem compromisso.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-lg">Vocês fazem busca e leva da bicicleta?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Sim, temos serviço de leva e traz para toda a região da Zona Norte de São Paulo. Consulte taxas e disponibilidade pelo WhatsApp.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6 mb-10">
            <img src={logoUrl} alt="R3 Bike Shop Logo" className="h-20 w-auto" />
            <h3 className="font-montserrat font-bold text-2xl">Pedale, viva, sinta a liberdade.</h3>
            <div className="flex gap-6">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram size={24} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} R3 Bike Shop - Lauzane Paulista, Zona Norte, São Paulo/SP. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}
