JBS-59202186
JBS-59201892


06/12/2024 10:12:04 [Processo_CriacaoPedidos_Mbot] - Processamento PEDIDO (5/9)
06/12/2024 10:12:04 [Dados_Entrada_Mbot] - Inicio - SubEtapa (1/4) Entrada dos dados do pedido
06/12/2024 10:12:04 [Dados_Entrada_Mbot] - Entrada: [Pedido: JBS-59202186] [Empresa: JBS] [ProcessoId: 2456]
06/12/2024 10:12:04 [Dados_Entrada_Mbot] - Dados Processo -> [Comprador: 52818504 - JBS - Eliane Batista dos Santos] [Empresa: JBS] [Status_Pedido: Reprogramado/Alterado] [Identificação: JBS-59202186] [Data_Envio: 05/12/2024 15:25] [Data_Leitura: 06/12/2024 8:53] [Data_Resposta: ] [Emergencial: Não] [Recepção: Sem recebimento] [URL_Pedido: https://me.com.br/ConfirmacaoPedido.asp?Pedido=52818504] [Nome_ArquivoPDF: JBS-59202186 - 05-12-2024 15h25m.pdf] [ME_Pedido: JBS-59202186] [ME_Codigo_Pedido: 52818504] [ME_ValorTotal: 24.468,92903] [ME_Fornecedor_Nome: VALGROUP MG INDUSTRIA DE EMBALAGENS FLEXIVEIS LTDA Cod.] [ME_Fornecedor_Codigo: 07183852000615] [ME_Fornecedor_Endereco: ROD PRESIDENTE DUTRA - GALPAO1 A - PARQUE MONDESIR - Lorena - SP - 12605-530 - BR] [ME_Entrega_RazaoSocial: JBS S.A. - São Miguel do Guaporé] [ME_Entrega_CNPJ: 02.916.265/0180-26] [ME_Entrega_IE: 000.00003-4] [ME_Entrega_Endereco: ROD RODOVIA RO 010, 90, KM 05 LT SÃO MIGUEL, SAO MIGUEL DO GUAPORE - RO, 76932000] [ME_Faturamento_RazaoSocial: JBS S.A. - São Miguel do Guaporé] [ME_Faturamento_CNPJ: 02.916.265/0180-26] [ME_Faturamento_IE: 000.00003-4] [ME_Faturamento_Endereco: ROD RODOVIA RO 010, 90, KM 05 LT SÃO MIGUEL, SAO MIGUEL DO GUAPORE - RO, 76932000] [ME_Pedido_Titulo: ] [ME_Pedido_ValorFrete: 0,00000] [ME_Pedido_TipoFrete: ] [ME_Pedido_Empresa: JBS (JBS)] [ME_Pedido_OrgCompras: JBS_OC (JBS_OC)] [ME_Pedido_Filial: SMG - JBS S.A. - São Miguel do Guaporé (446)] [ME_Condicao_Pgto: 180] [ME_EmailCliente: eliane.santos@friboi.com.br] [Usuario_Login: JBS_LORENA] [ME_Cidade_Cliente: SAO MIGUEL DO GUAPORE]
06/12/2024 10:12:04 [Dados_Entrada_Mbot] - Fim - SubEtapa (1/4) Entrada dos dados do pedido
06/12/2024 10:12:04 [Processo_Checklist_Mbot] - Inicio - SubEtapa (2/4) Aplicação das validações sob os dados do pedido
06/12/2024 10:12:04 [Checklist_PeriodoEntrega_Mbot] - >>>Validação do Período de entrega
06/12/2024 10:12:04 [Checklist_PeriodoEntrega_Mbot] - Quantidade de itens para ser validado -> 1
06/12/2024 10:12:06 [Checklist_PeriodoEntrega_Mbot] - Validando o período de entrega para o item (JBS-91270) [Data_Envio: 05/12/2024] [Data_Entrega: 11/12/2024] -> monthsDiff = 0    [Período máximo: 6]
06/12/2024 10:12:07 [Checklist_PeriodoEntrega_Mbot] - >>>Validação do Período de entrega
06/12/2024 10:12:07 [Checklist_ClienteBP_Mbot] - >>>Validação do Cliente BP
06/12/2024 10:12:07 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:12:16 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Processar parceiro de negócios)
06/12/2024 10:12:19 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:12:19 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:12:21 [Checklist_ClienteBP_Mbot] - Busca pelo CNPJ de Faturamento -> 02916265018026
06/12/2024 10:12:27 [Checklist_ClienteBP_Mbot] - Código PN recuperado: 658
06/12/2024 10:12:30 [Checklist_ClienteBP_Mbot] - Tela de Vendas e Distribuição estava carregada, alterando para Dados Gerais
06/12/2024 10:12:31 [Checklist_ClienteBP_Mbot] - Cidade do Cliente: São Miguel do Guaporé
06/12/2024 10:12:31 [Checklist_ClienteBP_Mbot] - >>>Validação do Cliente BP
06/12/2024 10:12:31 [Checklist_SKU_Mbot] - >>>Validação do código SKU
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Validação do SKU entre pedido do cliente (JBS) e base da Valgroup
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Quantidade de itens do pedido (JBS-59202186) -> 1
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - _________________________________
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Código para avaliação -> JBS-91270
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Descrição do item -> 1. - SACO ENC ALTA BARREIRA ESPECIAL 46X85CM LISO [Ver mais]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Material identificado SEM OSSO
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Família do Produto que foi identificado: ALTA BARREIRA
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Dimensão (em mm) -> 460X850MM
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Forma do filme -> SOLDA CURVA
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - ASSP -> 
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Código [JBS-91270] encontrado na base DE x PARA
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - [SKU SAP: PP1026] [Produto: SB15] [Descricao SKU: SACO ENC ALTA BARREIRA ESPECIAL 46X85CM LISO]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Conferencia do produto através dos campos ( [PP1026] )na base da MM03
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Objeto [PP1026] encontrado na base da MM03, realizando conferência dos campos.
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Campo DIMENSÃO Validado [Pedido: 460X850MM] vs [MM03: PELICULA DE PLASTICO SB15 460X850MM]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Campo FAMÍLIA DO PRODUTO Validado [Pedido: SB15] vs [MM03: SB15]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Campo FORMA DO FILME Validado [Pedido: SOLDA CURVA] vs [MM03: SOLDA CURVA]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Campo NOME DO CLIENTE Validado [Pedido: JBS] vs [MM03: ]
06/12/2024 10:12:32 [Checklist_SKU_Mbot] - Item [JBS-91270] [Codigo SKU: PP1026] [Familia: SB15] -> LIBERADO PARA LANÇAMENTO SAP
06/12/2024 10:12:34 [Checklist_SKU_Mbot] - >>>Validação do código SKU
06/12/2024 10:12:34 [Checklist_DepartamentoGrafico_Mbot] - >>>Validação de materiais IMPRESSOS
06/12/2024 10:12:34 [Checklist_DepartamentoGrafico_Mbot] [WARNING] - A empresa (JBS) não está parametrizada para a validação.
06/12/2024 10:12:34 [Checklist_DepartamentoGrafico_Mbot] - >>>Validação de materiais IMPRESSOS
06/12/2024 10:12:34 [Checklist_DataPedido_Mbot] - >>>Validação da Data do Pedido
06/12/2024 10:12:34 [Checklist_DataPedido_Mbot] - Validação do tempo de espera para os produtos do pedido (JBS-59202186) Data de Entrega vs LeadTime (JBS).
06/12/2024 10:12:34 [Checklist_DataPedido_Mbot] - Quantidade de itens do pedido (JBS-59202186) -> 1
06/12/2024 10:12:34 [Checklist_DataPedido_Mbot] - Montante para data de entrega (11/12/2024) -> 16800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (12) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (1) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (2) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (3) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (4) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (5) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (6) = 16000000
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (7) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (8) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (9) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (10) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (11) = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:36 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (12) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (1) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (2) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (3) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (4) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (5) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (6) = 16000000
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (7) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (8) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (9) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (10) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (11) = 0
06/12/2024 10:12:37 [Checklist_DataPedido_Mbot] - Arquivo de saldos encontrado: D:\Automation Anywhere\robo002\Pedidos de Venda\2 - Criação_Pedido\Originais\2024-12-06\Saldos\TabelaRemessas_JBS.csv
06/12/2024 10:12:46 [Checklist_DataPedido_Mbot] [WARNING] - Foi identificado que o Saldo Acumulado é negativo nas datas dentro dos meses do calendário de saldos, as seguintes datas serão desconsideradas na escolha da entrega (02/12/2024;03/12/2024;04/12/2024;05/12/2024;06/12/2024;09/12/2024;10/12/2024;11/12/2024;12/12/2024;13/12/2024;16/12/2024;17/12/2024;18/12/2024;19/12/2024;20/12/2024;23/12/2024;24/12/2024;25/12/2024;26/12/2024;27/12/2024;30/12/2024;31/12/2024)..
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] [WARNING] - Lista de datas desconsideradas por serem feriados - 
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - Saldo acumulados mensais da filial - [MesAno: /01/2025   Saldo Acumulado: 660792];[MesAno: /02/2025   Saldo Acumulado: 660800];[MesAno: /03/2025   Saldo Acumulado: 660786];[MesAno: /04/2025   Saldo Acumulado: 660792];[MesAno: /05/2025   Saldo Acumulado: 660792];[MesAno: /06/2025   Saldo Acumulado: 660786]
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - Datas que comportam a quantidade da remessa para a data de entrega (11/12/2024 - Qtd: 16800) -> 02/01/2025;03/01/2025;06/01/2025;07/01/2025;08/01/2025;09/01/2025;10/01/2025;13/01/2025;14/01/2025;15/01/2025;16/01/2025;17/01/2025;20/01/2025;21/01/2025;22/01/2025;23/01/2025;24/01/2025;27/01/2025;28/01/2025;29/01/2025;30/01/2025;31/01/2025;03/02/2025;04/02/2025;05/02/2025;06/02/2025;07/02/2025;10/02/2025;11/02/2025;12/02/2025;13/02/2025;14/02/2025;17/02/2025;18/02/2025;19/02/2025;20/02/2025;21/02/2025;24/02/2025;25/02/2025;26/02/2025;27/02/2025;28/02/2025;03/03/2025;04/03/2025;05/03/2025;06/03/2025;07/03/2025;10/03/2025;11/03/2025;12/03/2025;13/03/2025;14/03/2025;17/03/2025;18/03/2025;19/03/2025;20/03/2025;21/03/2025;24/03/2025;25/03/2025;26/03/2025;27/03/2025;28/03/2025;31/03/2025;01/04/2025;02/04/2025;03/04/2025;04/04/2025;07/04/2025;08/04/2025;09/04/2025;10/04/2025;11/04/2025;14/04/2025;15/04/2025;16/04/2025;17/04/2025;18/04/2025;21/04/2025;22/04/2025;23/04/2025;24/04/2025;25/04/2025;28/04/2025;29/04/2025;30/04/2025;01/05/2025;02/05/2025;05/05/2025;06/05/2025;07/05/2025;08/05/2025;09/05/2025;12/05/2025;13/05/2025;14/05/2025;15/05/2025;16/05/2025;19/05/2025;20/05/2025;21/05/2025;22/05/2025;23/05/2025;26/05/2025;27/05/2025;28/05/2025;29/05/2025;30/05/2025;02/06/2025;03/06/2025;04/06/2025;05/06/2025;06/06/2025;09/06/2025;10/06/2025;11/06/2025;12/06/2025;13/06/2025;16/06/2025;17/06/2025;18/06/2025;19/06/2025;20/06/2025;23/06/2025;24/06/2025;25/06/2025;26/06/2025;27/06/2025;30/06/2025
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - Datas liberadaspara a remessa (Data: 11/12/2024   e   Quantidade:16800) -> [Data: 02/01/2025   Saldo Acumulado: 727272];[Data: 03/01/2025   Saldo Acumulado: 1454544];[Data: 06/01/2025   Saldo Acumulado: 2181816];[Data: 07/01/2025   Saldo Acumulado: 2909088];[Data: 08/01/2025   Saldo Acumulado: 3636360];[Data: 09/01/2025   Saldo Acumulado: 4363632];[Data: 10/01/2025   Saldo Acumulado: 5090904];[Data: 13/01/2025   Saldo Acumulado: 5818176];[Data: 14/01/2025   Saldo Acumulado: 6545448];[Data: 15/01/2025   Saldo Acumulado: 7272720];[Data: 16/01/2025   Saldo Acumulado: 7999992];[Data: 17/01/2025   Saldo Acumulado: 8727264];[Data: 20/01/2025   Saldo Acumulado: 9454536];[Data: 21/01/2025   Saldo Acumulado: 10181808];[Data: 22/01/2025   Saldo Acumulado: 10909080];[Data: 23/01/2025   Saldo Acumulado: 11636352];[Data: 24/01/2025   Saldo Acumulado: 12363624];[Data: 27/01/2025   Saldo Acumulado: 13090896];[Data: 28/01/2025   Saldo Acumulado: 13818168];[Data: 29/01/2025   Saldo Acumulado: 14545440];[Data: 30/01/2025   Saldo Acumulado: 15272712];[Data: 31/01/2025   Saldo Acumulado: 15999984];[Data: 03/02/2025   Saldo Acumulado: 800000];[Data: 04/02/2025   Saldo Acumulado: 1600000];[Data: 05/02/2025   Saldo Acumulado: 2400000];[Data: 06/02/2025   Saldo Acumulado: 3200000];[Data: 07/02/2025   Saldo Acumulado: 4000000];[Data: 10/02/2025   Saldo Acumulado: 4800000];[Data: 11/02/2025   Saldo Acumulado: 5600000];[Data: 12/02/2025   Saldo Acumulado: 6400000];[Data: 13/02/2025   Saldo Acumulado: 7200000];[Data: 14/02/2025   Saldo Acumulado: 8000000];[Data: 17/02/2025   Saldo Acumulado: 8800000];[Data: 18/02/2025   Saldo Acumulado: 9600000];[Data: 19/02/2025   Saldo Acumulado: 10400000];[Data: 20/02/2025   Saldo Acumulado: 11200000];[Data: 21/02/2025   Saldo Acumulado: 12000000];[Data: 24/02/2025   Saldo Acumulado: 12800000];[Data: 25/02/2025   Saldo Acumulado: 13600000];[Data: 26/02/2025   Saldo Acumulado: 14400000];[Data: 27/02/2025   Saldo Acumulado: 15200000];[Data: 28/02/2025   Saldo Acumulado: 16000000];[Data: 03/03/2025   Saldo Acumulado: 761904];[Data: 04/03/2025   Saldo Acumulado: 1523808];[Data: 05/03/2025   Saldo Acumulado: 2285712];[Data: 06/03/2025   Saldo Acumulado: 3047616];[Data: 07/03/2025   Saldo Acumulado: 3809520];[Data: 10/03/2025   Saldo Acumulado: 4571424];[Data: 11/03/2025   Saldo Acumulado: 5333328];[Data: 12/03/2025   Saldo Acumulado: 6095232];[Data: 13/03/2025   Saldo Acumulado: 6857136];[Data: 14/03/2025   Saldo Acumulado: 7619040];[Data: 17/03/2025   Saldo Acumulado: 8380944];[Data: 18/03/2025   Saldo Acumulado: 9142848];[Data: 19/03/2025   Saldo Acumulado: 9904752];[Data: 20/03/2025   Saldo Acumulado: 10666656];[Data: 21/03/2025   Saldo Acumulado: 11428560];[Data: 24/03/2025   Saldo Acumulado: 12190464];[Data: 25/03/2025   Saldo Acumulado: 12952368];[Data: 26/03/2025   Saldo Acumulado: 13714272];[Data: 27/03/2025   Saldo Acumulado: 14476176];[Data: 28/03/2025   Saldo Acumulado: 15238080];[Data: 31/03/2025   Saldo Acumulado: 15999984];[Data: 01/04/2025   Saldo Acumulado: 727272];[Data: 02/04/2025   Saldo Acumulado: 1454544];[Data: 03/04/2025   Saldo Acumulado: 2181816];[Data: 04/04/2025   Saldo Acumulado: 2909088];[Data: 07/04/2025   Saldo Acumulado: 3636360];[Data: 08/04/2025   Saldo Acumulado: 4363632];[Data: 09/04/2025   Saldo Acumulado: 5090904];[Data: 10/04/2025   Saldo Acumulado: 5818176];[Data: 11/04/2025   Saldo Acumulado: 6545448];[Data: 14/04/2025   Saldo Acumulado: 7272720];[Data: 15/04/2025   Saldo Acumulado: 7999992];[Data: 16/04/2025   Saldo Acumulado: 8727264];[Data: 17/04/2025   Saldo Acumulado: 9454536];[Data: 18/04/2025   Saldo Acumulado: 10181808];[Data: 21/04/2025   Saldo Acumulado: 10909080];[Data: 22/04/2025   Saldo Acumulado: 11636352];[Data: 23/04/2025   Saldo Acumulado: 12363624];[Data: 24/04/2025   Saldo Acumulado: 13090896];[Data: 25/04/2025   Saldo Acumulado: 13818168];[Data: 28/04/2025   Saldo Acumulado: 14545440];[Data: 29/04/2025   Saldo Acumulado: 15272712];[Data: 30/04/2025   Saldo Acumulado: 15999984];[Data: 01/05/2025   Saldo Acumulado: 727272];[Data: 02/05/2025   Saldo Acumulado: 1454544];[Data: 05/05/2025   Saldo Acumulado: 2181816];[Data: 06/05/2025   Saldo Acumulado: 2909088];[Data: 07/05/2025   Saldo Acumulado: 3636360];[Data: 08/05/2025   Saldo Acumulado: 4363632];[Data: 09/05/2025   Saldo Acumulado: 5090904];[Data: 12/05/2025   Saldo Acumulado: 5818176];[Data: 13/05/2025   Saldo Acumulado: 6545448];[Data: 14/05/2025   Saldo Acumulado: 7272720];[Data: 15/05/2025   Saldo Acumulado: 7999992];[Data: 16/05/2025   Saldo Acumulado: 8727264];[Data: 19/05/2025   Saldo Acumulado: 9454536];[Data: 20/05/2025   Saldo Acumulado: 10181808];[Data: 21/05/2025   Saldo Acumulado: 10909080];[Data: 22/05/2025   Saldo Acumulado: 11636352];[Data: 23/05/2025   Saldo Acumulado: 12363624];[Data: 26/05/2025   Saldo Acumulado: 13090896];[Data: 27/05/2025   Saldo Acumulado: 13818168];[Data: 28/05/2025   Saldo Acumulado: 14545440];[Data: 29/05/2025   Saldo Acumulado: 15272712];[Data: 30/05/2025   Saldo Acumulado: 15999984];[Data: 02/06/2025   Saldo Acumulado: 761904];[Data: 03/06/2025   Saldo Acumulado: 1523808];[Data: 04/06/2025   Saldo Acumulado: 2285712];[Data: 05/06/2025   Saldo Acumulado: 3047616];[Data: 06/06/2025   Saldo Acumulado: 3809520];[Data: 09/06/2025   Saldo Acumulado: 4571424];[Data: 10/06/2025   Saldo Acumulado: 5333328];[Data: 11/06/2025   Saldo Acumulado: 6095232];[Data: 12/06/2025   Saldo Acumulado: 6857136];[Data: 13/06/2025   Saldo Acumulado: 7619040];[Data: 16/06/2025   Saldo Acumulado: 8380944];[Data: 17/06/2025   Saldo Acumulado: 9142848];[Data: 18/06/2025   Saldo Acumulado: 9904752];[Data: 19/06/2025   Saldo Acumulado: 10666656];[Data: 20/06/2025   Saldo Acumulado: 11428560];[Data: 23/06/2025   Saldo Acumulado: 12190464];[Data: 24/06/2025   Saldo Acumulado: 12952368];[Data: 25/06/2025   Saldo Acumulado: 13714272];[Data: 26/06/2025   Saldo Acumulado: 14476176];[Data: 27/06/2025   Saldo Acumulado: 15238080];[Data: 30/06/2025   Saldo Acumulado: 15999984]
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------ 1 - Validação do período minimo de lead time
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - Validação Data Entraga do Objeto (PP1026) [FAMILIA: ALTA BARREIRA] [Data Entrega: 02/01/2025  VS  Data Envio: 05/12/2024 15:25] [Diferença: 28] [Período minimo: 20]
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------ 1 - Validação do período minimo de lead time
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  2 - Verifica se a data de entrega cai no [SAB, DOM] -> JBS  ou [SAB,DOM] -> MARFRIG
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - Dia da semana da data de entrega (02/01/2025) -> Quinta
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  2 - Verifica se a data de entrega cai no [SAB, DOM] -> JBS  ou [SAB,DOM] -> MARFRIG
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  3 - Verifica se a data calculada existe na lista de datas liberadas de remessas
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - A data de entrega (02/01/2025) é uma data hábil para o envio da remessa.
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  3 - Verifica se a data calculada existe na lista de datas liberadas de remessas
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  4 - Valida se todas as regras resultaram em TRUE, sem recalculo
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - A data de entrega (02/01/2025) está validada e liberada para lançamento.
06/12/2024 10:12:49 [Checklist_DataPedido_Mbot] - ------------  4 - Valida se todas as regras resultaram em TRUE, sem recalculo
06/12/2024 10:12:52 [Checklist_DataPedido_Mbot] - >>>Validação da Data do Pedido
06/12/2024 10:12:52 [Checklist_Quantidade_Mbot] - >>>Validação da Quantidade
06/12/2024 10:12:52 [Checklist_Quantidade_Mbot] - Validação das quantidades do pedido com a quantidade por caixa, pedido (JBS-59202186) (JBS).
06/12/2024 10:12:52 [Checklist_Quantidade_Mbot] - Quantidade de itens do pedido (JBS-59202186) -> 1
06/12/2024 10:12:52 [Checklist_Quantidade_Mbot] - Objeto PP1026 -> [Código Produto: JBS-91270]  [FAMILIA: ALTA BARREIRA]  [Quantidade por caixa: 300]  [Quantidade da entrega: 16800.000] [Peso por und. produto: ] [Tipo Impressão: ] [Pallets: 0]
06/12/2024 10:12:54 [Checklist_Quantidade_Mbot] - Quantidade de entrega / Quantidade por caixa (56.0000) já é múltplo de 4, não será necessário realizar recalculo.
06/12/2024 10:12:55 [Checklist_Quantidade_Mbot] - >>>Validação da Quantidade
06/12/2024 10:12:55 [Checklist_Estabelecimento_Mbot] - >>>Validação do Estabelecimento
06/12/2024 10:12:55 [Checklist_Estabelecimento_Mbot] - Quantidade de itens para ser validado -> 1
06/12/2024 10:12:55 [Checklist_Estabelecimento_Mbot] - [Estado origem: MG] [Estado desino: RO] [Imposto: 7] -> [Centro: P703]
06/12/2024 10:12:55 [Checklist_Estabelecimento_Mbot] - >>>Validação do Estabelecimento
06/12/2024 10:12:55 [Checklist_Transportadora_Mbot] - >>>Validação da Transportadora
06/12/2024 10:12:55 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:13:03 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Processar parceiro de negócios)
06/12/2024 10:13:07 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:13:07 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:13:10 [Checklist_Transportadora_Mbot] - Código do cliente = 658
06/12/2024 10:13:13 [Checklist_Transportadora_Mbot] - Selecionando a tela de Vendas e Distribuição
06/12/2024 10:13:16 [Checklist_Transportadora_Mbot] - ABA [Ordens] -> [Grupo de clientes: 01] [Escritório de vendas: P2] [Equipe de vendas: 25]
06/12/2024 10:13:19 [Checklist_Transportadora_Mbot] - ABA [Expedição] -> [Centro fornecedor: P703] [Condição de expedição: Y3] [Fornecimento incompleto: 10,0] [Fornecimento excessivo: 10,0]
06/12/2024 10:13:24 [Checklist_Transportadora_Mbot] - ABA [Documento de faturamento] -> [Versão Inconterms: ] [Incoterms: FOB] [Local Incoterms 1: site] [Local Incoterms 2: ] [Condição de pagamento: C312] [Esquema de garantia: ]
06/12/2024 10:13:26 [Checklist_Transportadora_Mbot] - ABA [Funções do parceiro] -> Tabela extraída com sucesso
06/12/2024 10:13:26 [Checklist_Transportadora_Mbot] - >>>Validação da Transportadora
06/12/2024 10:13:26 [Processo_Checklist_Mbot] - Fim - SubEtapa (2/4) Aplicação das validações sob os dados do pedido
06/12/2024 10:13:26 [SAP_VA01_Criar_OrdemVenda_Mbot] - Inicio - SubEtapa (3/4) Criação da Ordem da Venda na VA01
06/12/2024 10:13:26 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Criar pedidos do cliente)
06/12/2024 10:13:35 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Criar pedidos do cliente)
06/12/2024 10:13:38 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:13:38 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Criar pedidos do cliente)
06/12/2024 10:13:38 [SAP_VA01_Criar_OrdemVenda_Mbot] - Realizando a entrada do pedido na VA01 [Tipo de Ordem: ZOR] [Org de vendas: FMG2] [Canal de distribuição: 10] [Setor de atividade: 00] [Escritório de vendas: P2] [Equipe de vendas: 25]
06/12/2024 10:13:41 [SAP_VA01_Criar_OrdemVenda_Mbot] - Tela de Criação de Ordem carregada com SUCESSO
06/12/2024 10:13:41 [SAP_VA01_Criar_OrdemVenda_Mbot] - DomXPath dos campos do cabeçalho: //div//table[contains(@class,'Field')]//input[@type='text' and contains(translate(@title, 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜÉÈÊÀÁÂÒÓÔÙÚÛÇÅÏÕÑŒÇÃÕ', 'abcdefghijklmnopqrstuvwxyzäöüéèêàáâòóôùúûçåïõñœçãõ'),'##Campo##')]
06/12/2024 10:13:44 [SAP_VA01_Criar_OrdemVenda_Mbot] - Campos preenchidos -> [Emissor da Ordem: 658]  [Recebedor da Mercadoria: 658]  [Ref.Cliente: JBS-59202186]  [DtRef Cliente: 05122024]
06/12/2024 10:13:48 [SAP_VA01_Criar_OrdemVenda_Mbot] - Cabeçalho preenchido com SUCESSO
06/12/2024 10:13:50 [SAP_VA01_Criar_OrdemVenda_Mbot] - Tela de Detalhes do Cabeçalho foi aberta com SUCESSO
06/12/2024 10:13:52 [SAP_VA01_Criar_OrdemVenda_Mbot] [WARNING] - A condição de expedição preenchida automaticamente pelas informações do BP, na aba de Expedição, [RedespNac./Fracionad] não faz parte das condições parametridadas. Gerando alerta.
06/12/2024 10:13:55 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Incoterms: FOB]
06/12/2024 10:13:55 [SAP_VA01_Criar_OrdemVenda_Mbot] [WARNING] - [ALERTA]O Local incoterms 1 carregado pelo SAP [655], na aba Documento de faturamento, difere do obtido no BP [site].
06/12/2024 10:13:55 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Código Condições pgto.: C312]
06/12/2024 10:13:55 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Condições pgto.: 180]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: emissor da ordem -> VALIDADA]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor da fatura -> VALIDADA]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: pagador -> VALIDADA]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor mercadoria -> VALIDADA]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: tr. redespacho -> VALIDADA]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: emissor da ordem -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor da fatura -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: pagador -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor mercadoria -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:14:01 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: tr. redespacho -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:14:05 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Textos -> [Dados NFe e Inf Complementares: PEDIDO DO CLIENTE JBS SAO MIGUEL DO GUAPORE // OC 59202186 // REDESPACHO POR CONTA DO DESTINATÁRIO - FOB]
06/12/2024 10:14:15 [SAP_VA01_Criar_OrdemVenda_Mbot] - PopUp de INFORMAÇÃO apareceu 
06/12/2024 10:14:33 [SAP_VA01_Criar_OrdemVenda_Mbot] - Preenchimento aba de VENDA -> [Centro: P703] [Condição de pagamento: C312] [Incoterms: FOB] [Data solicitada da remessa: 02/01/2025]  [Data fixação de preço: 06.12.2024]
06/12/2024 10:14:44 [SAP_VA01_Criar_OrdemVenda_Mbot] - -----------------------------------
06/12/2024 10:14:44 [SAP_VA01_Criar_OrdemVenda_Mbot] - Linhas visíveis da tabela: 13
06/12/2024 10:14:44 [SAP_VA01_Criar_OrdemVenda_Mbot] - Preenchimento Item (1/1) -> [Material: PP1026]  [Quantidade: 16800,000]  [Data: 02012025]
06/12/2024 10:14:55 [SAP_VA01_Criar_OrdemVenda_Mbot] - Linha (1/1) -> SUCESSO
06/12/2024 10:14:58 [SAP_VA01_Criar_OrdemVenda_Mbot] - Valores automáticos validados: [Preço líquido: 1.291,22]  [Por: 1.000]  [UM: PEÇ]
06/12/2024 10:14:58 [SAP_VA01_Criar_OrdemVenda_Mbot] - -----------------------------------
06/12/2024 10:15:10 [SAP_VA01_Criar_OrdemVenda_Mbot] - OV CRIADA -> Ordem Padrão 206523 foi gravado.
06/12/2024 10:15:10 [SAP_VA01_Criar_OrdemVenda_Mbot] - Fim - SubEtapa (3/4) Criação da Ordem da Venda na VA01
06/12/2024 10:15:10 [Arquivos_Atualizacao_Status_Mbot] - Inicio - SubEtapa (4/4) Atualização do status do processamento da transação no arquivo de controle de processamento
06/12/2024 10:15:10 [SQL_Atualizacao_Processo_Mbot] - Inicio - Atualização do status do processo
06/12/2024 10:15:10 [SQL_Atualizacao_Processo_Mbot] - Atualização do ProcessoId (2456) para estado de SUCESSO.
06/12/2024 10:15:11 [SQL_Atualizacao_Processo_Mbot] - Fim - Atualização do status do processo
06/12/2024 10:15:11 [Arquivos_Atualizacao_Status_Mbot] - Linha para de atualização do processo -> 133
06/12/2024 10:15:11 [Arquivos_Atualizacao_Status_Mbot] - Preenchimento dos dados refeente ao PROCESSO
06/12/2024 10:15:11 [Arquivos_Atualizacao_Status_Mbot] - [Status: SUCESSO (!!ALERTA!!)] [Observação: [[[ALERTA]A condição de expedição preenchida automaticamente pelas informações do BP, na aba de Expedição, [RedespNac./Fracionad] não faz parte das condições parametridadas.];[[ALERTA]O Local incoterms 1 carregado pelo SAP [655], na aba Documento de faturamento, difere do obtido no BP [site].]]]
06/12/2024 10:15:12 [Arquivos_Atualizacao_Status_Mbot] - Preenchimento dos dados refeente aos ITENS linhs -> 627
06/12/2024 10:15:12 [Arquivos_Atualizacao_Status_Mbot] - [Pedido: JBS-59202186] [Data Entrega: 11/12/2024] [Codigo: JBS-91270]
06/12/2024 10:15:12 [Arquivos_Atualizacao_Status_Mbot] - Fim - SubEtapa (4/4) Atualização do status do processamento da transação no arquivo de controle de processamento









06/12/2024 10:15:12 [Processo_CriacaoPedidos_Mbot] - Processamento PEDIDO (6/9)
06/12/2024 10:15:12 [Dados_Entrada_Mbot] - Inicio - SubEtapa (1/4) Entrada dos dados do pedido
06/12/2024 10:15:12 [Dados_Entrada_Mbot] - Entrada: [Pedido: JBS-59201892] [Empresa: JBS] [ProcessoId: 2457]
06/12/2024 10:15:12 [Dados_Entrada_Mbot] - Dados Processo -> [Comprador: 52818361 - JBS - Eliane Batista dos Santos] [Empresa: JBS] [Status_Pedido: Reprogramado/Alterado] [Identificação: JBS-59201892] [Data_Envio: 05/12/2024 15:19] [Data_Leitura: 06/12/2024 8:56] [Data_Resposta: ] [Emergencial: Não] [Recepção: Sem recebimento] [URL_Pedido: https://me.com.br/ConfirmacaoPedido.asp?Pedido=52818361] [Nome_ArquivoPDF: JBS-59201892 - 05-12-2024 15h19m.pdf] [ME_Pedido: JBS-59201892] [ME_Codigo_Pedido: 52818361] [ME_ValorTotal: 12.234,46452] [ME_Fornecedor_Nome: VALGROUP MG INDUSTRIA DE EMBALAGENS FLEXIVEIS LTDA Cod.] [ME_Fornecedor_Codigo: 07183852000615] [ME_Fornecedor_Endereco: ROD PRESIDENTE DUTRA - GALPAO1 A - PARQUE MONDESIR - Lorena - SP - 12605-530 - BR] [ME_Entrega_RazaoSocial: JBS S.A. - São Miguel do Guaporé] [ME_Entrega_CNPJ: 02.916.265/0180-26] [ME_Entrega_IE: 000.00003-4] [ME_Entrega_Endereco: ROD RODOVIA RO 010, 90, KM 05 LT SÃO MIGUEL, SAO MIGUEL DO GUAPORE - RO, 76932000] [ME_Faturamento_RazaoSocial: JBS S.A. - São Miguel do Guaporé] [ME_Faturamento_CNPJ: 02.916.265/0180-26] [ME_Faturamento_IE: 000.00003-4] [ME_Faturamento_Endereco: ROD RODOVIA RO 010, 90, KM 05 LT SÃO MIGUEL, SAO MIGUEL DO GUAPORE - RO, 76932000] [ME_Pedido_Titulo: ] [ME_Pedido_ValorFrete: 0,00000] [ME_Pedido_TipoFrete: ] [ME_Pedido_Empresa: JBS (JBS)] [ME_Pedido_OrgCompras: JBS_OC (JBS_OC)] [ME_Pedido_Filial: SMG - JBS S.A. - São Miguel do Guaporé (446)] [ME_Condicao_Pgto: 180] [ME_EmailCliente: eliane.santos@friboi.com.br] [Usuario_Login: JBS_LORENA] [ME_Cidade_Cliente: SAO MIGUEL DO GUAPORE]
06/12/2024 10:15:12 [Dados_Entrada_Mbot] - Fim - SubEtapa (1/4) Entrada dos dados do pedido
06/12/2024 10:15:12 [Processo_Checklist_Mbot] - Inicio - SubEtapa (2/4) Aplicação das validações sob os dados do pedido
06/12/2024 10:15:12 [Checklist_PeriodoEntrega_Mbot] - >>>Validação do Período de entrega
06/12/2024 10:15:12 [Checklist_PeriodoEntrega_Mbot] - Quantidade de itens para ser validado -> 1
06/12/2024 10:15:14 [Checklist_PeriodoEntrega_Mbot] - Validando o período de entrega para o item (JBS-91270) [Data_Envio: 05/12/2024] [Data_Entrega: 19/12/2024] -> monthsDiff = 0    [Período máximo: 6]
06/12/2024 10:15:15 [Checklist_PeriodoEntrega_Mbot] - >>>Validação do Período de entrega
06/12/2024 10:15:15 [Checklist_ClienteBP_Mbot] - >>>Validação do Cliente BP
06/12/2024 10:15:15 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:15:24 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Processar parceiro de negócios)
06/12/2024 10:15:27 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:15:27 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:15:28 [Checklist_ClienteBP_Mbot] - Busca pelo CNPJ de Faturamento -> 02916265018026
06/12/2024 10:15:35 [Checklist_ClienteBP_Mbot] - Código PN recuperado: 658
06/12/2024 10:15:37 [Checklist_ClienteBP_Mbot] - Tela de Vendas e Distribuição estava carregada, alterando para Dados Gerais
06/12/2024 10:15:39 [Checklist_ClienteBP_Mbot] - Cidade do Cliente: São Miguel do Guaporé
06/12/2024 10:15:39 [Checklist_ClienteBP_Mbot] - >>>Validação do Cliente BP
06/12/2024 10:15:39 [Checklist_SKU_Mbot] - >>>Validação do código SKU
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Validação do SKU entre pedido do cliente (JBS) e base da Valgroup
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Quantidade de itens do pedido (JBS-59201892) -> 1
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - _________________________________
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Código para avaliação -> JBS-91270
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Descrição do item -> 1. - SACO ENC ALTA BARREIRA ESPECIAL 46X85CM LISO [Ver mais]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Material identificado SEM OSSO
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Família do Produto que foi identificado: ALTA BARREIRA
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Dimensão (em mm) -> 460X850MM
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Forma do filme -> SOLDA CURVA
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - ASSP -> 
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Código [JBS-91270] encontrado na base DE x PARA
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - [SKU SAP: PP1026] [Produto: SB15] [Descricao SKU: SACO ENC ALTA BARREIRA ESPECIAL 46X85CM LISO]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Conferencia do produto através dos campos ( [PP1026] )na base da MM03
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Objeto [PP1026] encontrado na base da MM03, realizando conferência dos campos.
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Campo DIMENSÃO Validado [Pedido: 460X850MM] vs [MM03: PELICULA DE PLASTICO SB15 460X850MM]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Campo FAMÍLIA DO PRODUTO Validado [Pedido: SB15] vs [MM03: SB15]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Campo FORMA DO FILME Validado [Pedido: SOLDA CURVA] vs [MM03: SOLDA CURVA]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Campo NOME DO CLIENTE Validado [Pedido: JBS] vs [MM03: ]
06/12/2024 10:15:40 [Checklist_SKU_Mbot] - Item [JBS-91270] [Codigo SKU: PP1026] [Familia: SB15] -> LIBERADO PARA LANÇAMENTO SAP
06/12/2024 10:15:42 [Checklist_SKU_Mbot] - >>>Validação do código SKU
06/12/2024 10:15:42 [Checklist_DepartamentoGrafico_Mbot] - >>>Validação de materiais IMPRESSOS
06/12/2024 10:15:42 [Checklist_DepartamentoGrafico_Mbot] [WARNING] - A empresa (JBS) não está parametrizada para a validação.
06/12/2024 10:15:42 [Checklist_DepartamentoGrafico_Mbot] - >>>Validação de materiais IMPRESSOS
06/12/2024 10:15:42 [Checklist_DataPedido_Mbot] - >>>Validação da Data do Pedido
06/12/2024 10:15:42 [Checklist_DataPedido_Mbot] - Validação do tempo de espera para os produtos do pedido (JBS-59201892) Data de Entrega vs LeadTime (JBS).
06/12/2024 10:15:42 [Checklist_DataPedido_Mbot] - Quantidade de itens do pedido (JBS-59201892) -> 1
06/12/2024 10:15:42 [Checklist_DataPedido_Mbot] - Montante para data de entrega (19/12/2024) -> 8400
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (12) = 0
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (1) = 16000000
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (2) = 16000000
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:44 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (3) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (4) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (5) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (6) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (7) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (8) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (9) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (10) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (11) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (12) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (1) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (2) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (3) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (4) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (5) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (16000000) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 660800
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (6) = 16000000
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (7) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (8) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (9) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (10) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para a empresa (JBS) é de (0) e a porcentagem deste limite destinado ao cliente (658) é de 4.13%.
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal calculado para filial = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Limite mensal para o mês (11) = 0
06/12/2024 10:15:45 [Checklist_DataPedido_Mbot] - Arquivo de saldos encontrado: D:\Automation Anywhere\robo002\Pedidos de Venda\2 - Criação_Pedido\Originais\2024-12-06\Saldos\TabelaRemessas_JBS.csv
06/12/2024 10:15:50 [Checklist_DataPedido_Mbot] [WARNING] - Foi identificado que o Saldo Acumulado é negativo nas datas dentro dos meses do calendário de saldos, as seguintes datas serão desconsideradas na escolha da entrega (02/12/2024;03/12/2024;04/12/2024;05/12/2024;06/12/2024;09/12/2024;10/12/2024;11/12/2024;12/12/2024;13/12/2024;16/12/2024;17/12/2024;18/12/2024;19/12/2024;20/12/2024;23/12/2024;24/12/2024;25/12/2024;26/12/2024;27/12/2024;30/12/2024;31/12/2024)..
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] [WARNING] - Lista de datas desconsideradas por serem feriados - 
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - Saldo acumulados mensais da filial - [MesAno: /01/2025   Saldo Acumulado: 643992];[MesAno: /02/2025   Saldo Acumulado: 660800];[MesAno: /03/2025   Saldo Acumulado: 660786];[MesAno: /04/2025   Saldo Acumulado: 660792];[MesAno: /05/2025   Saldo Acumulado: 660792];[MesAno: /06/2025   Saldo Acumulado: 660786]
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - Datas que comportam a quantidade da remessa para a data de entrega (19/12/2024 - Qtd: 8400) -> 02/01/2025;03/01/2025;06/01/2025;07/01/2025;08/01/2025;09/01/2025;10/01/2025;13/01/2025;14/01/2025;15/01/2025;16/01/2025;17/01/2025;20/01/2025;21/01/2025;22/01/2025;23/01/2025;24/01/2025;27/01/2025;28/01/2025;29/01/2025;30/01/2025;31/01/2025;03/02/2025;04/02/2025;05/02/2025;06/02/2025;07/02/2025;10/02/2025;11/02/2025;12/02/2025;13/02/2025;14/02/2025;17/02/2025;18/02/2025;19/02/2025;20/02/2025;21/02/2025;24/02/2025;25/02/2025;26/02/2025;27/02/2025;28/02/2025;03/03/2025;04/03/2025;05/03/2025;06/03/2025;07/03/2025;10/03/2025;11/03/2025;12/03/2025;13/03/2025;14/03/2025;17/03/2025;18/03/2025;19/03/2025;20/03/2025;21/03/2025;24/03/2025;25/03/2025;26/03/2025;27/03/2025;28/03/2025;31/03/2025;01/04/2025;02/04/2025;03/04/2025;04/04/2025;07/04/2025;08/04/2025;09/04/2025;10/04/2025;11/04/2025;14/04/2025;15/04/2025;16/04/2025;17/04/2025;18/04/2025;21/04/2025;22/04/2025;23/04/2025;24/04/2025;25/04/2025;28/04/2025;29/04/2025;30/04/2025;01/05/2025;02/05/2025;05/05/2025;06/05/2025;07/05/2025;08/05/2025;09/05/2025;12/05/2025;13/05/2025;14/05/2025;15/05/2025;16/05/2025;19/05/2025;20/05/2025;21/05/2025;22/05/2025;23/05/2025;26/05/2025;27/05/2025;28/05/2025;29/05/2025;30/05/2025;02/06/2025;03/06/2025;04/06/2025;05/06/2025;06/06/2025;09/06/2025;10/06/2025;11/06/2025;12/06/2025;13/06/2025;16/06/2025;17/06/2025;18/06/2025;19/06/2025;20/06/2025;23/06/2025;24/06/2025;25/06/2025;26/06/2025;27/06/2025;30/06/2025
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - Datas liberadaspara a remessa (Data: 19/12/2024   e   Quantidade:8400) -> [Data: 02/01/2025   Saldo Acumulado: 727272];[Data: 03/01/2025   Saldo Acumulado: 1454544];[Data: 06/01/2025   Saldo Acumulado: 2181816];[Data: 07/01/2025   Saldo Acumulado: 2909088];[Data: 08/01/2025   Saldo Acumulado: 3636360];[Data: 09/01/2025   Saldo Acumulado: 4363632];[Data: 10/01/2025   Saldo Acumulado: 5090904];[Data: 13/01/2025   Saldo Acumulado: 5818176];[Data: 14/01/2025   Saldo Acumulado: 6545448];[Data: 15/01/2025   Saldo Acumulado: 7272720];[Data: 16/01/2025   Saldo Acumulado: 7999992];[Data: 17/01/2025   Saldo Acumulado: 8727264];[Data: 20/01/2025   Saldo Acumulado: 9454536];[Data: 21/01/2025   Saldo Acumulado: 10181808];[Data: 22/01/2025   Saldo Acumulado: 10909080];[Data: 23/01/2025   Saldo Acumulado: 11636352];[Data: 24/01/2025   Saldo Acumulado: 12363624];[Data: 27/01/2025   Saldo Acumulado: 13090896];[Data: 28/01/2025   Saldo Acumulado: 13818168];[Data: 29/01/2025   Saldo Acumulado: 14545440];[Data: 30/01/2025   Saldo Acumulado: 15272712];[Data: 31/01/2025   Saldo Acumulado: 15999984];[Data: 03/02/2025   Saldo Acumulado: 800000];[Data: 04/02/2025   Saldo Acumulado: 1600000];[Data: 05/02/2025   Saldo Acumulado: 2400000];[Data: 06/02/2025   Saldo Acumulado: 3200000];[Data: 07/02/2025   Saldo Acumulado: 4000000];[Data: 10/02/2025   Saldo Acumulado: 4800000];[Data: 11/02/2025   Saldo Acumulado: 5600000];[Data: 12/02/2025   Saldo Acumulado: 6400000];[Data: 13/02/2025   Saldo Acumulado: 7200000];[Data: 14/02/2025   Saldo Acumulado: 8000000];[Data: 17/02/2025   Saldo Acumulado: 8800000];[Data: 18/02/2025   Saldo Acumulado: 9600000];[Data: 19/02/2025   Saldo Acumulado: 10400000];[Data: 20/02/2025   Saldo Acumulado: 11200000];[Data: 21/02/2025   Saldo Acumulado: 12000000];[Data: 24/02/2025   Saldo Acumulado: 12800000];[Data: 25/02/2025   Saldo Acumulado: 13600000];[Data: 26/02/2025   Saldo Acumulado: 14400000];[Data: 27/02/2025   Saldo Acumulado: 15200000];[Data: 28/02/2025   Saldo Acumulado: 16000000];[Data: 03/03/2025   Saldo Acumulado: 761904];[Data: 04/03/2025   Saldo Acumulado: 1523808];[Data: 05/03/2025   Saldo Acumulado: 2285712];[Data: 06/03/2025   Saldo Acumulado: 3047616];[Data: 07/03/2025   Saldo Acumulado: 3809520];[Data: 10/03/2025   Saldo Acumulado: 4571424];[Data: 11/03/2025   Saldo Acumulado: 5333328];[Data: 12/03/2025   Saldo Acumulado: 6095232];[Data: 13/03/2025   Saldo Acumulado: 6857136];[Data: 14/03/2025   Saldo Acumulado: 7619040];[Data: 17/03/2025   Saldo Acumulado: 8380944];[Data: 18/03/2025   Saldo Acumulado: 9142848];[Data: 19/03/2025   Saldo Acumulado: 9904752];[Data: 20/03/2025   Saldo Acumulado: 10666656];[Data: 21/03/2025   Saldo Acumulado: 11428560];[Data: 24/03/2025   Saldo Acumulado: 12190464];[Data: 25/03/2025   Saldo Acumulado: 12952368];[Data: 26/03/2025   Saldo Acumulado: 13714272];[Data: 27/03/2025   Saldo Acumulado: 14476176];[Data: 28/03/2025   Saldo Acumulado: 15238080];[Data: 31/03/2025   Saldo Acumulado: 15999984];[Data: 01/04/2025   Saldo Acumulado: 727272];[Data: 02/04/2025   Saldo Acumulado: 1454544];[Data: 03/04/2025   Saldo Acumulado: 2181816];[Data: 04/04/2025   Saldo Acumulado: 2909088];[Data: 07/04/2025   Saldo Acumulado: 3636360];[Data: 08/04/2025   Saldo Acumulado: 4363632];[Data: 09/04/2025   Saldo Acumulado: 5090904];[Data: 10/04/2025   Saldo Acumulado: 5818176];[Data: 11/04/2025   Saldo Acumulado: 6545448];[Data: 14/04/2025   Saldo Acumulado: 7272720];[Data: 15/04/2025   Saldo Acumulado: 7999992];[Data: 16/04/2025   Saldo Acumulado: 8727264];[Data: 17/04/2025   Saldo Acumulado: 9454536];[Data: 18/04/2025   Saldo Acumulado: 10181808];[Data: 21/04/2025   Saldo Acumulado: 10909080];[Data: 22/04/2025   Saldo Acumulado: 11636352];[Data: 23/04/2025   Saldo Acumulado: 12363624];[Data: 24/04/2025   Saldo Acumulado: 13090896];[Data: 25/04/2025   Saldo Acumulado: 13818168];[Data: 28/04/2025   Saldo Acumulado: 14545440];[Data: 29/04/2025   Saldo Acumulado: 15272712];[Data: 30/04/2025   Saldo Acumulado: 15999984];[Data: 01/05/2025   Saldo Acumulado: 727272];[Data: 02/05/2025   Saldo Acumulado: 1454544];[Data: 05/05/2025   Saldo Acumulado: 2181816];[Data: 06/05/2025   Saldo Acumulado: 2909088];[Data: 07/05/2025   Saldo Acumulado: 3636360];[Data: 08/05/2025   Saldo Acumulado: 4363632];[Data: 09/05/2025   Saldo Acumulado: 5090904];[Data: 12/05/2025   Saldo Acumulado: 5818176];[Data: 13/05/2025   Saldo Acumulado: 6545448];[Data: 14/05/2025   Saldo Acumulado: 7272720];[Data: 15/05/2025   Saldo Acumulado: 7999992];[Data: 16/05/2025   Saldo Acumulado: 8727264];[Data: 19/05/2025   Saldo Acumulado: 9454536];[Data: 20/05/2025   Saldo Acumulado: 10181808];[Data: 21/05/2025   Saldo Acumulado: 10909080];[Data: 22/05/2025   Saldo Acumulado: 11636352];[Data: 23/05/2025   Saldo Acumulado: 12363624];[Data: 26/05/2025   Saldo Acumulado: 13090896];[Data: 27/05/2025   Saldo Acumulado: 13818168];[Data: 28/05/2025   Saldo Acumulado: 14545440];[Data: 29/05/2025   Saldo Acumulado: 15272712];[Data: 30/05/2025   Saldo Acumulado: 15999984];[Data: 02/06/2025   Saldo Acumulado: 761904];[Data: 03/06/2025   Saldo Acumulado: 1523808];[Data: 04/06/2025   Saldo Acumulado: 2285712];[Data: 05/06/2025   Saldo Acumulado: 3047616];[Data: 06/06/2025   Saldo Acumulado: 3809520];[Data: 09/06/2025   Saldo Acumulado: 4571424];[Data: 10/06/2025   Saldo Acumulado: 5333328];[Data: 11/06/2025   Saldo Acumulado: 6095232];[Data: 12/06/2025   Saldo Acumulado: 6857136];[Data: 13/06/2025   Saldo Acumulado: 7619040];[Data: 16/06/2025   Saldo Acumulado: 8380944];[Data: 17/06/2025   Saldo Acumulado: 9142848];[Data: 18/06/2025   Saldo Acumulado: 9904752];[Data: 19/06/2025   Saldo Acumulado: 10666656];[Data: 20/06/2025   Saldo Acumulado: 11428560];[Data: 23/06/2025   Saldo Acumulado: 12190464];[Data: 24/06/2025   Saldo Acumulado: 12952368];[Data: 25/06/2025   Saldo Acumulado: 13714272];[Data: 26/06/2025   Saldo Acumulado: 14476176];[Data: 27/06/2025   Saldo Acumulado: 15238080];[Data: 30/06/2025   Saldo Acumulado: 15999984]
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------ 1 - Validação do período minimo de lead time
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - Validação Data Entraga do Objeto (PP1026) [FAMILIA: ALTA BARREIRA] [Data Entrega: 02/01/2025  VS  Data Envio: 05/12/2024 15:19] [Diferença: 28] [Período minimo: 20]
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------ 1 - Validação do período minimo de lead time
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  2 - Verifica se a data de entrega cai no [SAB, DOM] -> JBS  ou [SAB,DOM] -> MARFRIG
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - Dia da semana da data de entrega (02/01/2025) -> Quinta
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  2 - Verifica se a data de entrega cai no [SAB, DOM] -> JBS  ou [SAB,DOM] -> MARFRIG
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  3 - Verifica se a data calculada existe na lista de datas liberadas de remessas
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - A data de entrega (02/01/2025) é uma data hábil para o envio da remessa.
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  3 - Verifica se a data calculada existe na lista de datas liberadas de remessas
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  4 - Valida se todas as regras resultaram em TRUE, sem recalculo
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - A data de entrega (02/01/2025) está validada e liberada para lançamento.
06/12/2024 10:15:53 [Checklist_DataPedido_Mbot] - ------------  4 - Valida se todas as regras resultaram em TRUE, sem recalculo
06/12/2024 10:15:55 [Checklist_DataPedido_Mbot] - >>>Validação da Data do Pedido
06/12/2024 10:15:55 [Checklist_Quantidade_Mbot] - >>>Validação da Quantidade
06/12/2024 10:15:55 [Checklist_Quantidade_Mbot] - Validação das quantidades do pedido com a quantidade por caixa, pedido (JBS-59201892) (JBS).
06/12/2024 10:15:55 [Checklist_Quantidade_Mbot] - Quantidade de itens do pedido (JBS-59201892) -> 1
06/12/2024 10:15:55 [Checklist_Quantidade_Mbot] - Objeto PP1026 -> [Código Produto: JBS-91270]  [FAMILIA: ALTA BARREIRA]  [Quantidade por caixa: 300]  [Quantidade da entrega: 8400.000] [Peso por und. produto: ] [Tipo Impressão: ] [Pallets: 0]
06/12/2024 10:15:58 [Checklist_Quantidade_Mbot] - Quantidade de entrega / Quantidade por caixa (28.0000) já é múltplo de 4, não será necessário realizar recalculo.
06/12/2024 10:15:59 [Checklist_Quantidade_Mbot] - >>>Validação da Quantidade
06/12/2024 10:15:59 [Checklist_Estabelecimento_Mbot] - >>>Validação do Estabelecimento
06/12/2024 10:15:59 [Checklist_Estabelecimento_Mbot] - Quantidade de itens para ser validado -> 1
06/12/2024 10:15:59 [Checklist_Estabelecimento_Mbot] - [Estado origem: MG] [Estado desino: RO] [Imposto: 7] -> [Centro: P703]
06/12/2024 10:15:59 [Checklist_Estabelecimento_Mbot] - >>>Validação do Estabelecimento
06/12/2024 10:15:59 [Checklist_Transportadora_Mbot] - >>>Validação da Transportadora
06/12/2024 10:15:59 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:16:08 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Processar parceiro de negócios)
06/12/2024 10:16:11 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:16:11 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Processar parceiro de negócios)
06/12/2024 10:16:15 [Checklist_Transportadora_Mbot] - Código do cliente = 658
06/12/2024 10:16:17 [Checklist_Transportadora_Mbot] - Selecionando a tela de Vendas e Distribuição
06/12/2024 10:16:21 [Checklist_Transportadora_Mbot] - ABA [Ordens] -> [Grupo de clientes: 01] [Escritório de vendas: P2] [Equipe de vendas: 25]
06/12/2024 10:16:24 [Checklist_Transportadora_Mbot] - ABA [Expedição] -> [Centro fornecedor: P703] [Condição de expedição: Y3] [Fornecimento incompleto: 10,0] [Fornecimento excessivo: 10,0]
06/12/2024 10:16:29 [Checklist_Transportadora_Mbot] - ABA [Documento de faturamento] -> [Versão Inconterms: ] [Incoterms: FOB] [Local Incoterms 1: site] [Local Incoterms 2: ] [Condição de pagamento: C312] [Esquema de garantia: ]
06/12/2024 10:16:31 [Checklist_Transportadora_Mbot] - ABA [Funções do parceiro] -> Tabela extraída com sucesso
06/12/2024 10:16:31 [Checklist_Transportadora_Mbot] - >>>Validação da Transportadora
06/12/2024 10:16:31 [Processo_Checklist_Mbot] - Fim - SubEtapa (2/4) Aplicação das validações sob os dados do pedido
06/12/2024 10:16:31 [SAP_VA01_Criar_OrdemVenda_Mbot] - Inicio - SubEtapa (3/4) Criação da Ordem da Venda na VA01
06/12/2024 10:16:31 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Criar pedidos do cliente)
06/12/2024 10:16:40 [SAP_Web_Busca_Transacao_Mbot] - Abrindo a transação (Criar pedidos do cliente)
06/12/2024 10:16:44 [SAP_Web_Busca_Transacao_Mbot] - Tela da transação carregada.
06/12/2024 10:16:44 [SAP_Web_Busca_Transacao_Mbot] - Busca pela transação (Criar pedidos do cliente)
06/12/2024 10:16:44 [SAP_VA01_Criar_OrdemVenda_Mbot] - Realizando a entrada do pedido na VA01 [Tipo de Ordem: ZOR] [Org de vendas: FMG2] [Canal de distribuição: 10] [Setor de atividade: 00] [Escritório de vendas: P2] [Equipe de vendas: 25]
06/12/2024 10:16:47 [SAP_VA01_Criar_OrdemVenda_Mbot] - Tela de Criação de Ordem carregada com SUCESSO
06/12/2024 10:16:47 [SAP_VA01_Criar_OrdemVenda_Mbot] - DomXPath dos campos do cabeçalho: //div//table[contains(@class,'Field')]//input[@type='text' and contains(translate(@title, 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜÉÈÊÀÁÂÒÓÔÙÚÛÇÅÏÕÑŒÇÃÕ', 'abcdefghijklmnopqrstuvwxyzäöüéèêàáâòóôùúûçåïõñœçãõ'),'##Campo##')]
06/12/2024 10:16:49 [SAP_VA01_Criar_OrdemVenda_Mbot] - Campos preenchidos -> [Emissor da Ordem: 658]  [Recebedor da Mercadoria: 658]  [Ref.Cliente: JBS-59201892]  [DtRef Cliente: 05122024]
06/12/2024 10:16:54 [SAP_VA01_Criar_OrdemVenda_Mbot] - Cabeçalho preenchido com SUCESSO
06/12/2024 10:16:56 [SAP_VA01_Criar_OrdemVenda_Mbot] - Tela de Detalhes do Cabeçalho foi aberta com SUCESSO
06/12/2024 10:16:57 [SAP_VA01_Criar_OrdemVenda_Mbot] [WARNING] - A condição de expedição preenchida automaticamente pelas informações do BP, na aba de Expedição, [RedespNac./Fracionad] não faz parte das condições parametridadas. Gerando alerta.
06/12/2024 10:17:00 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Incoterms: FOB]
06/12/2024 10:17:00 [SAP_VA01_Criar_OrdemVenda_Mbot] [WARNING] - [ALERTA]O Local incoterms 1 carregado pelo SAP [655], na aba Documento de faturamento, difere do obtido no BP [site].
06/12/2024 10:17:00 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Código Condições pgto.: C312]
06/12/2024 10:17:00 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Documento de faturamento -> [Condições pgto.: 180]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: emissor da ordem -> VALIDADA]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor da fatura -> VALIDADA]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: pagador -> VALIDADA]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor mercadoria -> VALIDADA]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: tr. redespacho -> VALIDADA]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: emissor da ordem -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor da fatura -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: pagador -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: recebedor mercadoria -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:17:06 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Parceiro -> [Função: tr. redespacho -> VALIDADA ENTRE BP e VA01]
06/12/2024 10:17:10 [SAP_VA01_Criar_OrdemVenda_Mbot] - ABA Textos -> [Dados NFe e Inf Complementares: PEDIDO DO CLIENTE JBS SAO MIGUEL DO GUAPORE // OC 59201892 // REDESPACHO POR CONTA DO DESTINATÁRIO - FOB]
06/12/2024 10:17:20 [SAP_VA01_Criar_OrdemVenda_Mbot] - PopUp de INFORMAÇÃO apareceu 
06/12/2024 10:17:38 [SAP_VA01_Criar_OrdemVenda_Mbot] - Preenchimento aba de VENDA -> [Centro: P703] [Condição de pagamento: C312] [Incoterms: FOB] [Data solicitada da remessa: 02/01/2025]  [Data fixação de preço: 06.12.2024]
06/12/2024 10:17:49 [SAP_VA01_Criar_OrdemVenda_Mbot] - -----------------------------------
06/12/2024 10:17:49 [SAP_VA01_Criar_OrdemVenda_Mbot] - Linhas visíveis da tabela: 13
06/12/2024 10:17:49 [SAP_VA01_Criar_OrdemVenda_Mbot] - Preenchimento Item (1/1) -> [Material: PP1026]  [Quantidade: 8400,000]  [Data: 02012025]
06/12/2024 10:18:00 [SAP_VA01_Criar_OrdemVenda_Mbot] - Linha (1/1) -> SUCESSO
06/12/2024 10:18:04 [SAP_VA01_Criar_OrdemVenda_Mbot] - Valores automáticos validados: [Preço líquido: 1.291,22]  [Por: 1.000]  [UM: PEÇ]
06/12/2024 10:18:04 [SAP_VA01_Criar_OrdemVenda_Mbot] - -----------------------------------
06/12/2024 10:18:16 [SAP_VA01_Criar_OrdemVenda_Mbot] - OV CRIADA -> Ordem Padrão 206524 foi gravado.
06/12/2024 10:18:16 [SAP_VA01_Criar_OrdemVenda_Mbot] - Fim - SubEtapa (3/4) Criação da Ordem da Venda na VA01
06/12/2024 10:18:16 [Arquivos_Atualizacao_Status_Mbot] - Inicio - SubEtapa (4/4) Atualização do status do processamento da transação no arquivo de controle de processamento
06/12/2024 10:18:16 [SQL_Atualizacao_Processo_Mbot] - Inicio - Atualização do status do processo
06/12/2024 10:18:16 [SQL_Atualizacao_Processo_Mbot] - Atualização do ProcessoId (2457) para estado de SUCESSO.
06/12/2024 10:18:17 [SQL_Atualizacao_Processo_Mbot] - Fim - Atualização do status do processo
06/12/2024 10:18:17 [Arquivos_Atualizacao_Status_Mbot] - Linha para de atualização do processo -> 134
06/12/2024 10:18:17 [Arquivos_Atualizacao_Status_Mbot] - Preenchimento dos dados refeente ao PROCESSO
06/12/2024 10:18:17 [Arquivos_Atualizacao_Status_Mbot] - [Status: SUCESSO (!!ALERTA!!)] [Observação: [[[ALERTA]A condição de expedição preenchida automaticamente pelas informações do BP, na aba de Expedição, [RedespNac./Fracionad] não faz parte das condições parametridadas.];[[ALERTA]O Local incoterms 1 carregado pelo SAP [655], na aba Documento de faturamento, difere do obtido no BP [site].]]]
06/12/2024 10:18:18 [Arquivos_Atualizacao_Status_Mbot] - Preenchimento dos dados refeente aos ITENS linhs -> 628
06/12/2024 10:18:18 [Arquivos_Atualizacao_Status_Mbot] - [Pedido: JBS-59201892] [Data Entrega: 19/12/2024] [Codigo: JBS-91270]
06/12/2024 10:18:18 [Arquivos_Atualizacao_Status_Mbot] - Fim - SubEtapa (4/4) Atualização do status do processamento da transação no arquivo de controle de processamento
06/12/2024 10:18:18 [Processo_CriacaoPedidos_Mbot] - *******************************
