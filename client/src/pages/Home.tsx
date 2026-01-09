import { MessageCircle, Wrench, Package, Users, Star, MapPin, Phone, ShoppingCart, ArrowRight, Instagram, ChevronRight, ChevronLeft, Facebook, Youtube, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
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
  const facadeUrl = "/uploads/destaquer3bike.PNG"; // Foto de Destaque Oficial

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

  const storeImages = [
    "https://lh3.googleusercontent.com/p/AF1QipO5XjLHq_wTWdBJ8Ych5Pcu3V2_D0YJKkfwIv7T=w408-h240-k-no-pi-10-ya300-ro0-fo100",
    "https://lh3.googleusercontent.com/geougc/AF1QipPjT8mG_maVACSOR6KbMYsnjaG2jNFsGMxDbvnK=h305-no",
    "https://lh3.googleusercontent.com/geougc/AF1QipNRS31fUnGUtciWPHSm3RADDoDW4nsLXV_-3C6I=h305-no",
    "https://lh3.googleusercontent.com/geougc/AF1QipMissoeOZAxaxnojqtqXQjoc7VgikxWhWHbK77p=h305-no",
    "https://lh3.googleusercontent.com/geougc/AF1QipOFnWmT9SIs3UewYxkyWjFKah9oDbv_eEQIie2S=h305-no",
    "https://lh3.googleusercontent.com/geougc/AF1QipO-9AW5jUmfG29K9Wnxn2fApukvjvou35yHKKvJ=h305-no"
  ];

  const partnerBrands = [
    { name: "Shimano", logo: "/logos/shimano.png" },
    { name: "SRAM", logo: "/logos/sram.png" },
    { name: "RockShox", logo: "/logos/rockshox.png" },
    { name: "Caloi", logo: "/logos/caloi.png" },
    { name: "TSW", logo: "/logos/tsw.png" },
    { name: "First", logo: "/logos/first.png" }
  ];

  const googleReviews = [
    { text: "Loja top, atendimento excelente e produtos de alta qualidade. Super recomendo.", author: "Google User" },
    { text: "Lugar aconchegante e acolhedor, profissionais de ponta com muita experiência.", author: "Google User" },
    { text: "Qualidade, variedade e preço acessível para todos os gostos.", author: "Google User" }
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
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoUrl} alt="R3 Bike Shop Logo" className="h-12 w-auto" />
            <span className="font-montserrat font-bold text-xl text-black hidden sm:inline uppercase tracking-tight">
              R3 Bike Shop
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F97316] transition-colors">
              <Instagram size={24} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F97316] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#EA580C] transition-colors shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 border-b border-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-[#F97316]/10 text-[#F97316] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                Oficina Especializada na Zona Norte
              </span>
              <h1 className="font-montserrat font-black text-4xl md:text-6xl text-black mb-6 leading-tight uppercase italic">
                A Melhor Oficina <br />
                <span className="text-[#F97316]">Para Sua Bike</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tudo o que sua bike precisa em um só lugar: <strong>revisão, manutenção e acessórios</strong> com preço justo e atendimento profissional. Atendemos Lauzane Paulista e toda Zona Norte de São Paulo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#F97316] transition-all shadow-xl hover:-translate-y-1 uppercase italic"
                >
                  <MessageCircle size={20} />
                  Solicitar Orçamento
                </a>
                <a
                  href="tel:+5511939065111"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-black hover:text-white transition-all uppercase italic"
                >
                  <Phone size={20} />
                  Ligar Agora
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/5 rounded-full blur-3xl -z-10"></div>
              <img
                src={facadeUrl}
                alt="R3 Bike Shop Oficina Profissional"
                className="w-full h-[500px] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F97316] p-3 rounded-xl">
                    <Star className="text-white" size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-black text-2xl leading-none">100%</p>
                    <p className="text-xs text-gray-500 uppercase font-bold">Qualidade R3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F97316]/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Atendimento Local</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">+500</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Clientes Satisfeitos</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">10+</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Anos de Experiência</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Suporte WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-24 bg-white" id="sobre">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-8 uppercase italic">
              Quem <span className="text-[#F97316]">Somos</span>
            </h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                A <strong>R3 Bike Shop</strong> nasceu da paixão pelo ciclismo e do compromisso com a excelência técnica. Somos especializados em <strong>venda e manutenção de bicicletas</strong> de todos os tipos.
              </p>
              <p>
                Nossa oficina é equipada com ferramentas de precisão e nossa equipe é treinada para lidar com desde ajustes simples até revisões complexas de performance.
              </p>
              <p className="font-bold text-black italic">
                "Não apenas consertamos bikes, nós cuidamos da sua segurança e prazer em pedalar."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Reais com Imagens */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Nossos <span className="text-[#F97316]">Serviços</span></h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Trabalho profissional com peças originais e garantia de satisfação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Venda */}
            <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/5] shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.40-1-e1761917054642.jpeg" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
                alt="Venda de Bicicletas"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <Wrench className="text-[#F97316] mb-4" size={32} />
                <h3 className="text-white font-montserrat font-black text-2xl uppercase italic tracking-wider">Venda de Bikes</h3>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Modelos novos e seminovos com garantia.</p>
              </div>
            </div>

            {/* Revisão */}
            <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/5] shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.55.39-e1761917118885.jpeg" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
                alt="Revisão Completa"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <Star className="text-[#F97316] mb-4" size={32} />
                <h3 className="text-white font-montserrat font-black text-2xl uppercase italic tracking-wider">Revisão Completa</h3>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Sua bike nova de novo em todos os detalhes.</p>
              </div>
            </div>

            {/* Manutenção */}
            <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/5] shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.56.08-e1761916935198.jpeg" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
                alt="Conserto e Manutenção"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <Package className="text-[#F97316] mb-4" size={32} />
                <h3 className="text-white font-montserrat font-black text-2xl uppercase italic tracking-wider">Conserto e Peças</h3>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Troca de componentes e reparos rápidos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Entregas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Nossas <span className="text-[#F97316]">Entregas</span></h2>
            <p className="text-gray-600 text-xl">Transparência e satisfação em cada entrega realizada.</p>
          </div>

          <div className="relative max-w-5xl mx-auto group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white">
              {deliveryImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <img src={img} alt={`Entrega R3 Bike Shop ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F97316] hover:text-white p-4 rounded-full shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F97316] hover:text-white p-4 rounded-full shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {deliveryImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-[#F97316] w-12' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização e Mapa Corrigido */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-8 uppercase italic">Onde <span className="text-[#F97316]">Estamos</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic">Endereço</h4>
                    <p className="text-gray-600 text-lg mt-1 leading-tight">Rua Conselheiro Moreira de Barros, 3809<br />Complemento casa 03 – Lauzane Paulista – São Paulo/SP<br />CEP: 02430-002</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic">Contatos</h4>
                    <p className="text-gray-600 text-lg mt-1 leading-tight">(11) 9 3906-5111<br />ramersonninga@yahoo.com.br</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <Star size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic">Dados Fiscais</h4>
                    <p className="text-gray-600 text-lg mt-1">CNPJ: <strong>54.875.734/0001-43</strong></p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="https://maps.app.goo.gl/uXmR3mB1XmB1XmB1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F97316] font-black text-lg hover:underline uppercase italic"
                >
                  Abrir no Google Maps <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7128!2d-46.6385!3d-23.4735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7367b938f4f%3A0x8e5f8f5d0b9b5f5f!2sR3%20Bike%20Shop!5e0!3m2!1spt-BR!2sbr!4v1704834567890!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Dúvidas <span className="text-[#F97316]">Frequentes</span></h2>
            <p className="text-gray-600 text-xl italic">Tudo o que você precisa saber sobre nossos serviços.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Onde vocês atendem?", a: "Nossa loja física está no Lauzane Paulista (Rua Conselheiro Moreira de Barros, 3809), mas atendemos toda a Zona Norte com nosso serviço de Busca e Leva." },
              { q: "As bicicletas têm garantia?", a: "Sim! Todas as bikes novas possuem garantia de fábrica. Nossos serviços de oficina também contam com garantia de execução." },
              { q: "Quais as formas de pagamento?", a: "Aceitamos cartões de crédito (em até 12x), PIX e dinheiro. Oferecemos condições especiais para revisões completas." },
              { q: "Fazem busca e leva da bicicleta?", a: "Com certeza! Esse é um dos nossos diferenciais. Coletamos sua bike na sua casa ou trabalho na Zona Norte e devolvemos pronta." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50">
                <AccordionTrigger className="text-left font-black text-xl py-6 hover:no-underline hover:text-[#F97316] transition-colors uppercase italic">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Marcas Parceiras Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-black mb-12 uppercase italic">Trabalhamos com as <span className="text-[#F97316]">Melhores Marcas</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partnerBrands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.className = "font-black text-2xl text-gray-400 uppercase italic tracking-tighter";
                      span.textContent = brand.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Loja por Dentro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Nossa Loja <span className="text-[#F97316]">por Dentro</span></h2>
          <p className="text-gray-600 text-xl italic mb-12">Um espaço completo para cuidar da sua paixão.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:row-span-2">
              <img src={facadeUrl} alt="Fachada R3 Bike Shop" className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white" />
            </div>
            {storeImages.map((img, index) => (
              <img key={index} src={img} alt={`Interior R3 Bike Shop ${index + 1}`} className="w-full h-64 object-cover rounded-2xl shadow-lg border-2 border-white hover:scale-105 transition-transform" />
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações do Google Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-4 uppercase italic">Avaliação dos <span className="text-[#F97316]">Clientes</span></h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8" />
              <div className="text-2xl font-black">5,0 ★ <span className="text-gray-400 font-normal text-lg">no Google</span></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.map((review, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#F97316]/50 transition-colors">
                <p className="text-xl italic mb-6 text-gray-300 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center font-black">G</div>
                  <div>
                    <p className="font-black uppercase italic text-sm">{review.author}</p>
                    <div className="flex text-[#F97316] gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Nota 5,0 no Google • 315 avaliações</p>
            <a 
              href="https://www.google.com/maps/place/R3+Bike+Shop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-black hover:bg-[#F97316] hover:text-white transition-all uppercase italic shadow-2xl"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
              Ver Todas no Google
            </a>
          </div>
        </div>
      </section>

      {/* Footer Melhorado */}
      <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <img src={logoUrl} alt="R3 Bike Shop Logo" className="h-16 w-auto" />
                <span className="font-montserrat font-bold text-2xl text-white uppercase tracking-tight italic">
                  R3 <span className="text-[#F97316]">Bike</span>
                </span>
              </a>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed italic">
                Sua oficina especializada e loja de bicicletas na Zona Norte de São Paulo. Paixão por pedal em cada detalhe.
              </p>
              <div className="flex gap-4">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Instagram className="text-white group-hover:scale-110" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Facebook className="text-white group-hover:scale-110" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Youtube className="text-white group-hover:scale-110" size={22} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider text-[#F97316]">Links Úteis</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-lg">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-lg">Quem Somos</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors text-lg">Serviços</a></li>
                <li><a href="#localizacao" className="text-gray-400 hover:text-white transition-colors text-lg">Localização</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider text-[#F97316]">Institucional</h4>
              <ul className="space-y-4">
                <li><Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors text-lg cursor-pointer">Política de Privacidade</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-lg cursor-pointer">Política de Cookies</Link></li>
                <li><Link href="/aviso-legal" className="text-gray-400 hover:text-white transition-colors text-lg cursor-pointer">Aviso Legal</Link></li>
                <li><Link href="/termos-de-servico" className="text-gray-400 hover:text-white transition-colors text-lg cursor-pointer">Termos de Serviço</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-black text-xl mb-8 uppercase italic tracking-wider text-[#F97316]">Contato</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-400 group">
                  <MapPin size={22} className="text-[#F97316] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Rua Conselheiro Moreira de Barros, 3809<br />Lauzane Paulista, SP - CEP: 02430-002</span>
                </li>
                <li className="flex items-center gap-4 text-gray-400 group">
                  <Mail size={22} className="text-[#F97316] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">ramersonninga@yahoo.com.br</span>
                </li>
                <li className="flex items-center gap-4 text-gray-400 group">
                  <Phone size={22} className="text-[#F97316] group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-bold">(11) 93906-5111</span>
                </li>
                <li className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">
                    CNPJ: 54.875.734/0001-43
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest text-center md:text-left">
              © {new Date().getFullYear()} R3 BIKE SHOP - TODOS OS DIREITOS RESERVADOS
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase">
              <span>Desenvolvido por</span>
              <a 
                href="https://agenciatrampos.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white hover:text-[#F97316] transition-colors group"
              >
                <img 
                  src="https://agenciatrampos.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fagencia-trampos-logo.png&w=32&q=75" 
                  alt="Agência Trampos Logo" 
                  className="w-5 h-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
                <span>Agência Trampos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Google Review Button */}
        <a 
          href="https://www.google.com/maps/place/R3+Bike+Shop" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-32 right-8 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-[9999] border border-gray-100 group"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-7 h-7" />
          <div className="flex flex-col">
            <span className="text-[13px] font-black text-black leading-none uppercase italic">5,0 ★ no Google</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">315 avaliações</span>
          </div>
          <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
            <Star size={14} className="text-[#F97316] group-hover:text-white" fill="currentColor" />
          </div>
        </a>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group flex items-center gap-3"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase italic whitespace-nowrap">Falar com Especialista</span>
      </a>
    </div>
  );
}
