# ig7-barbearia-portfolio
Sistema web completo de gestão e agendamento para barbearia, desenvolvido com React, TypeScript e Supabase.


# IG7 Barbearia

Sistema web de gestão e agendamento desenvolvido para uma barbearia real.

O projeto foi criado para centralizar o agendamento de clientes, agenda dos
profissionais, controle financeiro, pacotes, estoque, vendas e administração
da equipe.

> O código e a infraestrutura de produção permanecem privados por segurança
> e privacidade do cliente. Este repositório apresenta o projeto para fins de
> portfólio.

## Principais funcionalidades

- Agendamento público mobile-first
- Agenda individual por barbeiro
- Controle de horários, pausas e exceções
- Gestão de clientes e histórico
- Cancelamento por link seguro
- Pacotes com utilização semanal
- Controle financeiro
- Despesas e contas a receber
- Produtos, estoque e vendas
- Dashboard administrativo
- Relatórios
- Gestão de serviços
- Gestão de equipe e permissões
- Convite de funcionários por e-mail
- Pix com QR Code e confirmação manual
- Notificações PWA / Web Push
- Adição de agendamentos ao calendário
- Galeria de trabalhos dos barbeiros

## Tecnologias

- React
- TypeScript
- Supabase / Lovable Cloud
- PostgreSQL
- Row Level Security (RLS)
- PWA / Web Push
- Git / GitHub

## Segurança

O sistema foi desenvolvido considerando autorização no backend e não apenas
controle visual no frontend.

Entre as medidas utilizadas estão:

- autenticação de funcionários;
- permissões por usuário;
- Row Level Security;
- validações server-side;
- links de cancelamento com tokens seguros;
- proteção contra pagamentos duplicados;
- proteção de arquivos privados;
- separação entre dados públicos e administrativos.

## Perfis do sistema

### Cliente

O cliente consegue escolher profissional, serviços, data e horário sem
precisar criar uma conta.

### Barbeiro

O profissional acompanha a própria agenda e pode registrar o recebimento dos
próprios atendimentos.

### Administrador

O administrador possui controle sobre agenda, equipe, serviços, clientes,
financeiro, pacotes, produtos e relatórios.

## Screenshots

### Agendamento

<!-- screenshot -->

### Agenda

<!-- screenshot -->

### Dashboard

<!-- screenshot -->

### Financeiro

<!-- screenshot -->

## Sobre o projeto

Projeto desenvolvido para um cliente real como parte do meu portfólio de
desenvolvimento de sistemas.

Durante o desenvolvimento trabalhei tanto na experiência do usuário quanto
em regras de negócio, modelagem de dados, autenticação, autorização,
segurança e integrações.
