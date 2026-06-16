import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  Smartphone,
  Printer,
  FolderOpen,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Lock,
  Rocket,
  Star,
  Check,
  Heart,
  ChevronDown,
} from "lucide-react";
import exemplo1 from "@/assets/exemplo-1.jpg";
import exemplo2 from "@/assets/exemplo-2.jpg";
import exemplo3 from "@/assets/exemplo-3.jpg";
import exemplo4 from "@/assets/exemplo-4.jpg";
import exemplo5 from "@/assets/exemplo-5.jpg";
import exemplo6 from "@/assets/exemplo-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+ de 600 Dinâmicas e Atividades Cristã para Crianças" },
      {
        name: "description",
        content:
          "Mais de 600 dinâmicas e atividades cristãs prontas para aplicar em EBD, salinha, cultinho infantil e eventos. Acesso digital vitalício.",
      },
      { property: "og:title", content: "+ de 600 Dinâmicas e Atividades Cristã para Crianças" },
      {
        property: "og:description",
        content:
          "Material completo em PDF com mais de 600 dinâmicas cristãs para o ministério infantil. Oferta especial por R$ 5,50.",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_MAIN = "#oferta";
const CHECKOUT_SECONDARY = "#oferta";

function Index() {
  const today = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar today={today} />
      <Hero />
      <WhatYouGet />
      <Examples />
      <Benefits />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

function TopBar({ today }: { today: string }) {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2.5 text-center text-xs sm:text-sm font-semibold tracking-wide">
      OFERTA VÁLIDA SOMENTE HOJE — {today}
    </div>
  );
}

function Hero() {
  return (
    <section className="px-4 pt-10 pb-6 sm:pt-16 max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm mb-6">
        <Heart className="h-4 w-4 text-primary fill-primary" />
        <span className="text-sm font-medium">Material Exclusivo para Ministério Infantil</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
        + de 600 Dinâmicas e Atividades Cristã para Crianças
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        Atividades bíblicas, criativas e fáceis de aplicar na salinha, EBD, cultinho
        infantil, culto no lar e programações da igreja.
      </p>

      <div className="mt-10 mx-auto max-w-xs">
        <div className="aspect-[9/16] rounded-3xl overflow-hidden border-4 border-card shadow-2xl bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center">
          <div className="text-center px-6">
            <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
            <p className="font-bold text-lg">600+ Dinâmicas Cristãs</p>
            <p className="text-sm text-muted-foreground mt-2">Prontas para aplicar</p>
          </div>
        </div>
      </div>

      <a
        href={CHECKOUT_MAIN}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold text-base sm:text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
      >
        QUERO MEU MATERIAL AGORA
      </a>
    </section>
  );
}

function WhatYouGet() {
  const items = [
    {
      icon: BookOpen,
      title: "Material Completo em PDF",
      bullets: [
        "+600 Dinâmicas Cristãs pensadas para crianças",
        "Separadas por faixa etária, tema bíblico e tipo de encontro",
        "Tudo preparado — é só abrir, ler e aplicar na salinha",
      ],
    },
    {
      icon: Smartphone,
      title: "Acesso Digital Completo e Vitalício",
      bullets: [
        "Receba no celular, tablet ou computador",
        "Acesse quando quiser, sem limite",
        "Praticidade total para o seu dia a dia",
      ],
    },
    {
      icon: Printer,
      title: "Pronto para Imprimir",
      bullets: [
        "Arquivos bem organizados e prontos para impressão",
        "Perfeito para tias da salinha, professoras de EBD e líderes",
        "Excelente qualidade para imprimir",
      ],
    },
  ];

  const categories = [
    "Crianças pequenas",
    "Crianças maiores",
    "Cultinho infantil",
    "Escola Bíblica Dominical",
    "Salinha",
    "Culto no Lar",
    "Datas especiais",
    "Eventos com crianças",
    "Abertura de aula",
    "Quebra-gelo e integração",
  ];

  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
        O que você vai receber
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
            <ul className="space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-card border border-border p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FolderOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold">Organização por Categorias</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-card border border-border p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold">Aplicação Fácil e Rápida</h3>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {["Explicação simples", "Materiais fáceis de encontrar", "Tempo estimado", "Objetivo espiritual da dinâmica"].map(
            (i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                {i}
              </li>
            ),
          )}
        </ul>
        <div className="mt-5 rounded-xl bg-primary/10 p-4 text-sm">
          🔥 <strong>Versão Atualizada 2026:</strong> Conteúdo revisado, ampliado e pensado
          para a realidade do ministério infantil.
        </div>
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-center">
        Veja Alguns Exemplos do Material
      </h2>
      <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto">
        Confira algumas das +600 Dinâmicas prontas que você vai receber para usar nos seus
        encontros.
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[exemplo1, exemplo2, exemplo3, exemplo4, exemplo5, exemplo6].map((src, i) => (
          <div
            key={i}
            className="aspect-[3/4] rounded-2xl border border-border overflow-hidden shadow-sm"
          >
            <img
              src={src}
              alt={`Exemplo de dinâmica cristã ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: "🧒",
      title: "Pensado Especialmente para o Ministério Infantil",
      desc: "Dinâmicas apropriadas, bíblicas e seguras para crianças, usadas em salinhas, EBD, cultinhos e eventos.",
    },
    {
      icon: "⚡",
      title: "Prontas Para Aplicar em Poucos Minutos",
      desc: "Nada difícil, nada confuso. A tia lê, separa os materiais e já pode aplicar.",
    },
    {
      icon: "😊",
      title: "Crianças Mais Atentas, Felizes e Participativas",
      desc: "Ajuda a manter a atenção, estimular a participação e ensinar a Palavra de forma leve.",
    },
    {
      icon: "⏳",
      title: "Economia de Tempo na Preparação",
      desc: "Ideal para tias que trabalham, cuidam da casa e ainda servem com amor na obra do Senhor.",
    },
  ];
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
        Benefícios Exclusivos
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl bg-card border border-border p-6">
            <div className="text-3xl mb-3">{i.icon}</div>
            <h3 className="font-bold text-lg mb-2">{i.title}</h3>
            <p className="text-sm text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bonuses() {
  const bonuses = [
    { title: "Guia de Devocionais Curtos para Crianças", from: "R$ 27,00" },
    { title: "40 Brincadeiras Bíblicas para Salinha e EBD", from: "R$ 37,00" },
    { title: "30 Histórias Bíblicas Prontas para Contar", from: "R$ 29,00" },
    { title: "30 Temas Bíblicos com Versículo e Aplicação", from: "R$ 27,00" },
    { title: "Histórias e Lições dos Personagens da Bíblia", from: "R$ 35,00" },
    { title: "15 Dinâmicas para Datas Comemorativas", from: "R$ 27,00" },
  ];
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black">🎁 Bônus Exclusivos</h2>
        <p className="mt-3 text-muted-foreground">
          VALOR TOTAL DE <strong>R$ 182</strong> — HOJE VOCÊ RECEBE GRÁTIS
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bonuses.map((b) => (
          <div
            key={b.title}
            className="relative rounded-2xl bg-card border border-border p-6 shadow-sm"
          >
            <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              GRÁTIS
            </span>
            <Sparkles className="h-7 w-7 text-primary mb-3" />
            <h3 className="font-bold mb-2">🎁 {b.title}</h3>
            <p className="text-sm text-muted-foreground">
              De <span className="line-through">{b.from}</span> por{" "}
              <strong className="text-primary">ZERO</strong>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center font-bold text-lg">
        TOTAL EM BÔNUS: <span className="text-primary">R$ 182,00</span> — TUDO GRÁTIS HOJE
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="oferta" className="px-4 py-16 max-w-5xl mx-auto scroll-mt-10">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
        Escolha Seu Plano
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Basic / Main Offer */}
        <div className="rounded-3xl bg-card border border-border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Plano Básico</h3>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-primary">R$5,50</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">pagamento único</p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> 100 Dinâmicas Cristãs para Crianças</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Acesso Digital e Vitalício</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5" /> Garantia de 30 dias</li>
          </ul>
          <a
            href={CHECKOUT_MAIN}
            className="mt-8 block text-center rounded-full bg-secondary text-secondary-foreground font-bold py-3 hover:bg-secondary/80 transition"
          >
            QUERO O PLANO BÁSICO
          </a>
        </div>

        {/* Premium / Secondary Offer */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground p-8 shadow-2xl shadow-primary/30">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full">
            ⭐ MAIS POPULAR
          </span>
          <p className="text-xs uppercase tracking-widest opacity-90">
            Ainda dá tempo de levar a melhor opção!
          </p>
          <h3 className="text-2xl font-bold mt-2">Plano Premium</h3>
          <p className="text-sm opacity-90 mt-1">
            97% escolhem essa super oferta
          </p>

          <div className="mt-5">
            <p className="text-sm line-through opacity-80">Valor Total R$ 97,90</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black">R$12,70</span>
            </div>
            <p className="text-sm opacity-90 mt-1">Hoje, pagamento único</p>
          </div>

          <ul className="mt-6 space-y-2.5 text-sm">
            {[
              "+600 Dinâmicas Cristãs para Crianças",
              "Atualizações Mensais & Acesso Vitalício",
              "Garantia de 30 Dias & Suporte no WhatsApp",
              "Brincadeiras e Atividades em Grupo",
              "Histórias e Estudos Bíblicos Infantis",
              "Devocionais Curtinhos",
              "Área de Membros Organizada",
              "Todos os 6 Bônus Exclusivos GRATUITOS",
            ].map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_SECONDARY}
            className="mt-8 block text-center rounded-full bg-background text-primary font-bold py-4 hover:scale-[1.02] transition-transform shadow-lg"
          >
            SIM, QUERO O PLANO PREMIUM
          </a>
          <p className="mt-3 text-center text-xs opacity-90">
            +2.157 líderes e educadoras cristãs já transformaram seus encontros
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Satisfação Garantida</span>
        <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Compra Segura</span>
        <span className="flex items-center gap-2"><Rocket className="h-4 w-4 text-primary" /> Acesso Imediato</span>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <div className="rounded-3xl bg-card border border-border p-8 sm:p-12 text-center">
        <div className="text-5xl mb-4">🛡️</div>
        <h2 className="text-2xl sm:text-3xl font-black">
          RISCO ZERO! SUA SATISFAÇÃO OU SEU DINHEIRO DE VOLTA
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> 30 Dias de Garantia
            </h3>
            <p className="text-sm text-muted-foreground">
              Você tem 30 dias para testar tudo. Se não gostar, devolvemos 100% do seu
              dinheiro.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" /> Compra 100% Segura
            </h3>
            <p className="text-sm text-muted-foreground">
              Seus dados protegidos com criptografia.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" /> Acesso Imediato
            </h3>
            <p className="text-sm text-muted-foreground">
              Pagamento aprovado e acesso liberado na hora.
            </p>
          </div>
        </div>
        <a
          href={CHECKOUT_MAIN}
          className="mt-10 inline-flex rounded-full bg-primary text-primary-foreground px-8 py-4 font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
        >
          SIM, QUERO MINHAS DINÂMICAS CRISTÃS!
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { name: "Tia Sarah", role: "Professora há 5 anos", text: "O material transformou minhas aulas na EBD. As crianças amam as dinâmicas e ficam muito mais atentas." },
    { name: "Pastora Ana Paula", role: "Líder de Ministério Infantil", text: "Melhor investimento que fiz para o meu ministério. Prático, bíblico e muito fácil de usar." },
    { name: "Missionária Cristiane", role: "Líder de Crianças", text: "As dinâmicas são incríveis! Me ajudaram muito a organizar o cultinho da minha igreja." },
    { name: "Irmã Marlene", role: "Educadora Cristã", text: "Material organizado, fácil de entender e perfeito para crianças." },
  ];
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-center">
        O Que Nossas Clientes Dizem
      </h2>
      <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-sm font-medium">4.9/5 — 412 avaliações</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        {t.map((x) => (
          <div key={x.name} className="rounded-2xl bg-card border border-border p-6">
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm italic">"{x.text}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary">
                {x.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{x.name}</p>
                <p className="text-xs text-muted-foreground">{x.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-black">QUEM SOMOS</h2>
      <div className="mt-8 mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
        <Heart className="h-12 w-12 fill-current" />
      </div>
      <h3 className="mt-4 text-xl font-bold">Vozes da Fé</h3>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
        Somos apaixonadas por ver crianças crescendo nos caminhos do Senhor desde cedo.
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        <li>✨ Mais de 12 anos servindo ao ministério infantil cristão</li>
        <li>✨ Milhares de crianças alcançadas por meio de encontros, EBD e salinhas</li>
        <li>✨ Especialistas em ensino bíblico infantil e dinâmicas criativas</li>
      </ul>
      <blockquote className="mt-8 italic text-muted-foreground max-w-2xl mx-auto">
        "Acreditamos que ensinar crianças é plantar sementes eternas. Criamos esse material
        para ajudar cada tia, professora e líder a servir com mais amor, criatividade,
        organização e propósito."
      </blockquote>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Como eu vou receber o material?", a: "Após a confirmação do pagamento, você recebe um e-mail com o acesso imediato à área de membros e aos PDFs." },
    { q: "O material é físico ou digital?", a: "100% digital, pronto para acessar no celular, tablet ou computador, e pronto para imprimir." },
    { q: "As dinâmicas são fáceis de aplicar?", a: "Sim! Cada dinâmica traz explicação simples, materiais necessários, tempo estimado e objetivo espiritual." },
    { q: "Para qual idade o material é indicado?", a: "Conteúdo organizado por faixa etária: crianças pequenas, crianças maiores, e momentos da EBD, salinha e cultinho." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-black text-center">Perguntas Frequentes</h2>
      <p className="text-center text-muted-foreground mt-2">Ainda com dúvidas? A gente te ajuda!</p>
      <div className="mt-8 space-y-3">
        {items.map((it, i) => (
          <button
            key={it.q}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold">{it.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && (
              <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-border mt-10 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Vozes da Fé — Todos os direitos reservados.</p>
      <p className="mt-2">Este produto não oferece nenhuma garantia de resultados e é destinado a fins educativos do ministério infantil cristão.</p>
    </footer>
  );
}
