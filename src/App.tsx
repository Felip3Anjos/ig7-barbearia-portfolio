import { useState } from "react";
import { appointments, money, services } from "./data";

type View = "home"|"booking"|"dashboard"|"agenda"|"finance";

export default function App(){
  const [view,setView]=useState<View>("home");
  const [barber,setBarber]=useState("Igor");
  const [service,setService]=useState(0);
  const [slot,setSlot]=useState("09:30");
  const [done,setDone]=useState(false);

  const nav=(v:View,l:string)=><button className={view===v?"nav active":"nav"} onClick={()=>{setView(v);setDone(false)}}>{l}</button>;

  return <div>
    <header>
      <button className="brand" onClick={()=>setView("home")}>IG7</button>
      <nav>{nav("home","Home")}{nav("booking","Agendamento")}{nav("dashboard","Dashboard")}{nav("agenda","Agenda")}{nav("finance","Financeiro")}</nav>
      <span className="demo">Demo pública</span>
    </header>

    {view==="home" && <main className="hero">
      <section>
        <span className="eyebrow">PORTFÓLIO • DADOS FICTÍCIOS</span>
        <h1>Agendamento simples. Gestão completa.</h1>
        <p>Versão pública e sanitizada de um sistema real desenvolvido para a IG7 Barbearia.</p>
        <div className="actions"><button className="primary" onClick={()=>setView("booking")}>Simular agendamento</button><button onClick={()=>setView("dashboard")}>Ver painel</button></div>
      </section>
      <aside className="phone"><small>Próximo cliente</small><strong>14:30</strong><b>Gabriel Souza</b><span>Cabelo + Sobrancelha • Igor</span></aside>
    </main>}

    {view==="booking" && <main className="page">
      <span className="eyebrow">AGENDAMENTO MOBILE-FIRST</span>
      <h1>Simule um agendamento</h1>
      {done ? <section className="success"><div>✓</div><h2>Horário confirmado!</h2><p>Nenhum dado real foi enviado.</p><button className="primary" onClick={()=>setDone(false)}>Nova simulação</button></section>
      : <div className="booking">
        <section className="card">
          <h2>1. Barbeiro</h2>
          <div className="choices">{["Igor","Marcus","Eduardo"].map(x=><button className={barber===x?"selected":""} onClick={()=>setBarber(x)}>{x}</button>)}</div>
          <h2>2. Serviço</h2>
          <div className="choices">{services.map((s,i)=><button className={service===i?"selected":""} onClick={()=>setService(i)}><b>{s[0]}</b><span>{money(s[1])} • {s[2]}</span></button>)}</div>
          <h2>3. Horário</h2>
          <div className="slots">{["08:00","08:30","09:00","09:30","10:00","14:00"].map(x=><button className={slot===x?"selected":""} onClick={()=>setSlot(x)}>{x}</button>)}</div>
        </section>
        <aside className="card summary"><span className="eyebrow">RESUMO</span><h2>Seu horário</h2><p><span>Barbeiro</span><b>{barber}</b></p><p><span>Serviço</span><b>{services[service][0]}</b></p><p><span>Horário</span><b>{slot}</b></p><p><span>Total</span><b>{money(services[service][1])}</b></p><button className="primary full" onClick={()=>setDone(true)}>Confirmar simulação</button></aside>
      </div>}
    </main>}

    {view==="dashboard" && <main className="page">
      <span className="eyebrow">PAINEL ADMINISTRATIVO • MOCK</span><h1>Dashboard</h1>
      <div className="metrics"><article><span>Recebido</span><b>{money(845)}</b></article><article><span>Despesas</span><b>{money(240)}</b></article><article><span>Lucro</span><b>{money(605)}</b></article><article><span>A receber</span><b>{money(180)}</b></article></div>
      <section className="card"><h2>Agenda de hoje</h2>{appointments.map(a=><div className="row"><strong>{a.time}</strong><div><b>{a.client}</b><span>{a.barber} • {a.service}</span></div><em>{a.status}</em></div>)}</section>
    </main>}

    {view==="agenda" && <main className="page">
      <span className="eyebrow">AGENDA INDIVIDUAL</span><h1>Agenda</h1>
      <div className="columns">{["Igor","Marcus","Eduardo"].map(name=><section className="card"><h2>{name}</h2>{appointments.filter(a=>a.barber===name).map(a=><article className="appt"><b>{a.time}</b><h3>{a.client}</h3><p>{a.service}</p></article>)}</section>)}</div>
    </main>}

    {view==="finance" && <main className="page">
      <span className="eyebrow">FINANCEIRO • MOCK</span><h1>Financeiro</h1>
      <div className="metrics"><article><span>Receita</span><b>{money(845)}</b></article><article><span>Despesas</span><b>{money(240)}</b></article><article><span>Lucro</span><b>{money(605)}</b></article><article><span>A receber</span><b>{money(180)}</b></article></div>
      <section className="card"><h2>Movimentações demonstrativas</h2><div className="row"><strong>Pix</strong><div><b>João Silva</b><span>Cabelo</span></div><em>{money(45)}</em></div><div className="row"><strong>Despesa</strong><div><b>Produtos / insumos</b><span>Exemplo fictício</span></div><em>- {money(240)}</em></div></section>
    </main>}

    <footer>IG7 Portfolio • versão sanitizada • sem conexão com produção</footer>
  </div>
}
