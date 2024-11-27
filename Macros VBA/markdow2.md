Sub ApagarLinhasVisiveisFiltroLineByLine()
    Dim ws As Worksheet
    Dim rng As Range
    Dim rngFiltrado As Range
    Dim cel As Range
    Dim area As Range

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

        ' Verifique se há células mescladas no intervalo
        If Not rngFiltrado Is Nothing Then
            For Each area In rngFiltrado.Areas
                If area.MergeCells Then
                    MsgBox "Células mescladas detectadas! Desfaça a mesclagem antes de continuar.", vbExclamation
                    Exit Sub
                End If
            Next area

            ' Verifique se há células visíveis
            If Not rngFiltrado Is Nothing Then
                ' Itere pelas áreas visíveis para apagar linha por linha com tratamento de erros
                On Error Resume Next
                For Each cel In rngFiltrado.Areas
                    If Not cel Is Nothing Then
                        If cel.Rows.Count > 0 Then
                            cel.EntireRow.Delete
                            If Err.Number <> 0 Then
                                MsgBox "Erro ao excluir a linha: " & Err.Description, vbCritical
                                Err.Clear
                            End If
                        Else
                            MsgBox "Nenhuma linha válida para excluir nesta área visível.", vbInformation
                        End If
                    End If
                Next cel
                On Error GoTo 0

                ' Remover o filtro da planilha após a exclusão
                ws.AutoFilterMode = False

                ' Mensagem opcional para indicar conclusão
                ' MsgBox "As linhas visíveis foram excluídas com sucesso!"
            Else
                ' Mensagem opcional para quando não houver linhas visíveis
                MsgBox "Não há linhas visíveis para excluir.", vbInformation
            End If
        Else
            MsgBox "Não há células visíveis no intervalo filtrado.", vbInformation
        End If
    Else
        ' Mensagem opcional para quando não houver filtro aplicado
        MsgBox "Não há filtros aplicados na planilha.", vbExclamation
    End If
End Sub