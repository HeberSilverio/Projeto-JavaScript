Sub ApagarLinhasVisiveisFiltroLineByLine()
    Dim ws As Worksheet
    Dim rng As Range
    Dim rngFiltrado As Range
    Dim cel As Range

    ' Defina a planilha ativa
    Set ws = ActiveSheet

    ' Verifique se há autofiltro aplicado
    If ws.AutoFilterMode Then
        ' Defina o intervalo filtrado (ignorando a linha de cabeçalho)
        Set rng = ws.AutoFilter.Range.Offset(1).Resize(ws.AutoFilter.Range.Rows.Count - 1)

        On Error Resume Next ' Evitar erro se não houver células visíveis

        ' Defina o intervalo visível
        Set rngFiltrado = rng.SpecialCells(xlCellTypeVisible)

        On Error GoTo 0 ' Voltar ao tratamento de erro padrão

        ' Verifique se há células visíveis
        If Not rngFiltrado Is Nothing Then
            ' Itere pelas áreas visíveis para apagar linha por linha
            For Each cel In rngFiltrado.Areas
                cel.EntireRow.Delete
            Next cel

            ' Remover o filtro da planilha
            ws.AutoFilterMode = False

            ' Mensagem opcional (comentar caso não queira mensagens no RPA)
            ' MsgBox "As linhas visíveis foram excluídas."
        Else
            ' Mensagem opcional para quando não houver linhas visíveis
            ' MsgBox "Não há linhas visíveis para excluir."
        End If
    Else
        ' Mensagem opcional para quando não houver filtro aplicado
        ' MsgBox "Não há filtros aplicados na planilha."
    End If
End Sub