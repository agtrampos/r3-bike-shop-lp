import { MessageCircle, Wrench, Package, Users, Star, MapPin, Phone, ShoppingCart, ArrowRight, Calendar } from "lucide-react";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";

export default function Home() {
  const whatsappNumber = "5511939065111";
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de mais informacoes sobre os servicos de manutencao e venda de bicicletas da R3 Bike Shop."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white text-foreground">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R3</span>
            </div>
            <span className="font-montserrat font-bold text-lg text-foreground hidden sm:inline">
              R3 Bike Shop
            </span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Manutencao e Venda de Bikes com Qualidade e Confianca
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Atendimento rapido, pecas originais e suporte especializado na Zona Norte de Sao Paulo.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Tudo o que sua bike precisa em um so lugar: revisao, manutencao e acessorios com preco justo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:shadow-lg transition-shadow"
                >
                  <MessageCircle size={20} />
                  Solicitar Orcamento
                </a>
                <a
                  href="tel:+5511939065111"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone size={20} />
                  Ligar Agora
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/images/hero-bike-shop.jpg"
                alt="R3 Bike Shop - Oficina profissional de bicicletas"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Atendimento Local</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+</div>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+</div>
              <p className="text-sm text-muted-foreground">Servico Profissional</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Suporte WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Nossos Servicos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com foco em seguranca, desempenho e durabilidade da sua bike. Atendemos Lauzane Paulista e toda Zona Norte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                Manutencao e Revisao
              </h3>
              <p className="text-muted-foreground">
                Revisao completa, regulagem de cambio, freios, corrente e todos os componentes da sua bicicleta.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Package className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                Troca e Ajuste de Pecas
              </h3>
              <p className="text-muted-foreground">
                Substituicao de pneus, camaras, correntes, freios e outros componentes com pecas originais.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                Venda de Bicicletas
              </h3>
              <p className="text-muted-foreground">
                Bicicletas de qualidade com preco justo. Modelos para iniciantes, passeio e esporte.
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Star className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                Suporte Especializado
              </h3>
              <p className="text-muted-foreground">
                Atendimento para ciclistas iniciantes e experientes. Dicas e orientacoes profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary-foreground mb-12 text-center">
            Por Que Escolher a R3 Bike Shop?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">+</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-secondary-foreground mb-2">
                    Atendimento Direto e Sem Enrolacao
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Falamos direto com voce pelo WhatsApp. Orcamento rapido e sem compromisso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">+</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-secondary-foreground mb-2">
                    Servico Especializado
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Equipe experiente e apaixonada por bikes. Cada servico e feito com cuidado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">+</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-secondary-foreground mb-2">
                    Transparencia nos Precos
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Sem surpresas. Voce sabe exatamente quanto vai pagar antes de comecar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">+</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-secondary-foreground mb-2">
                    Foco em Resultado e Satisfacao
                  </h3>
                  <p className="text-secondary-foreground/80">
                    Sua bike sai perfeita. Se nao ficar satisfeito, a gente resolve.
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/images/maintenance-service.jpg"
              alt="Manutencao profissional de bicicleta"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4 text-left">
                Bikes e Acessorios
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Confira alguns itens disponiveis em nossa loja. Fazemos entregas na regiao!
              </p>
            </div>
            <a href={whatsappLink} className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver catalogo completo <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="aspect-square bg-muted relative">
                <img src="/images/hero-bike-shop.jpg" alt="Bicicleta Mountain Bike" className="object-cover w-full h-full" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Destaque</span>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">Mountain Bike Aro 29</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Ideal para trilhas e uso urbano. Quadro em aluminio, freio a disco e 21 marchas.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">R$ 1.890,00</span>
                  <a href={whatsappLink} className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingCart size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="aspect-square bg-muted relative">
                <img src="/images/bike-accessories.jpg" alt="Capacete Profissional" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">Kit Acessorios Premium</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Capacete, lanternas LED e suporte de caramanhola. Seguranca completa para voce.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">R$ 249,00</span>
                  <a href={whatsappLink} className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingCart size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="aspect-square bg-muted relative">
                <img src="/images/maintenance-service.jpg" alt="Kit de Limpeza" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">Revisao Geral</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">Limpeza completa, lubrificacao e regulagem total. Sua bike nova de novo.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">R$ 150,00</span>
                  <a href={whatsappLink} className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Calendar size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
            O Que Nossos Clientes Dizem
          </h2>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg md:text-xl mb-6 italic">
              "Levei minha bike para revisao e ficou perfeita. Atendimento rapido e honesto. Recomendo!"
            </p>
            <p className="font-montserrat font-bold text-base">
              Cliente Local - Sao Paulo/SP
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
            Localizacao e Atendimento
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex gap-4 mb-6">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                      Endereco
                    </h3>
                    <p className="text-muted-foreground">
                      Rua Conselheiro Moreira de Barros, 3809<br />
                      Lauzane Paulista - Sao Paulo/SP
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+5511939065111" className="hover:text-primary transition-colors">
                        (11) 9 3906-5111
                      </a>
                      <br />
                      <a href="tel:+5511987131015" className="hover:text-primary transition-colors">
                        (11) 9 8713-1015
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors"
                    >
                      Clique para conversar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/images/customer-satisfaction.jpg"
              alt="Satisfacao do cliente na R3 Bike Shop"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary-foreground mb-6">
            Precisa de Orcamento Rapido?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Clique no botao abaixo e fale direto com a equipe pelo WhatsApp. Resposta rapida e sem compromisso.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:shadow-lg transition-shadow"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">R3 Bike Shop</h3>
              <p className="text-background/80 text-sm">
                Manutencao e venda de bicicletas com qualidade, confianca e atendimento rapido na Zona Norte de Sao Paulo.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="tel:+5511939065111" className="hover:text-background transition-colors">
                    (11) 9 3906-5111
                  </a>
                </li>
                <li>
                  <a href="mailto:ramersonninga@yahoo.com.br" className="hover:text-background transition-colors">
                    ramersonninga@yahoo.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Localizacao</h3>
              <p className="text-background/80 text-sm">
                Rua Conselheiro Moreira de Barros, 3809<br />
                Lauzane Paulista - Sao Paulo/SP
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>
              2026 R3 Bike Shop. Todos os direitos reservados. | Manutencao de bicicletas em Sao Paulo
            </p>
          </div>
        </div>
      </footer>

      {/* Botao Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
          Falar com a Oficina
        </span>
      </a>
    </div>
  );
}
