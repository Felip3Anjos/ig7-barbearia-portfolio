# Arquitetura — visão de portfólio

A aplicação real separa a área pública da área autenticada.

## Área pública
- catálogo de barbeiros e serviços;
- consulta de disponibilidade;
- criação de agendamento;
- gerenciamento/cancelamento por token específico.

## Área autenticada
- dashboard;
- agenda;
- clientes;
- pacotes;
- financeiro;
- vendas/estoque;
- serviços;
- equipe;
- configurações.

## Princípios
- mobile-first;
- snapshots de valores históricos;
- receita somente quando recebida;
- autorização também no backend;
- operações críticas idempotentes;
- arquivos privados com URLs temporárias.
