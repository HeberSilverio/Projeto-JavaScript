Sub PREPARAR_REMESSA()
    
    'EXCLUIR PIF PAF
    ActiveSheet.Range("$A$1:$AS$1000").AutoFilter Field:=21, Criteria1:=Array( _
    "PIF PAF"), Operator:=xlFilterValues
    Rows("1:1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'EXCLUIR FAT PARCIAL
    ActiveSheet.Range("$A$1:$AQ$10000").AutoFilter Field:=43, Criteria1:= _
    "ENCERRAR"
    Rows("1:1").Select
    'Range("AD1").Activate
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'EXCLUIR REM PARCIAL
    ActiveSheet.Range("$A$1:$AR$10000").AutoFilter Field:=44, Criteria1:= _
    "ENCERRAR"
    Rows("1:1").Select
    'Range("AD1").Activate
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'FILTRAR CLIENTES CORPORATIVOS
    ActiveSheet.Range("$A$1:$AS$10000").AutoFilter Field:=21, Criteria1:=Array( _
    "BRF", "COCA-COLA FEMSA", "PIF PAF"), Operator:=xlFilterValues
    
    'FILTRAR DATA (ATÉ 2 SEXTAS A FRENTE)
    Columns("M:M").Select
    ActiveSheet.Range("$A$1:$AS$1048576").AutoFilter Field:=13, Criteria1:= _
                                                     ">" & Format(Planilha3.Range("AS1").Value, "mm/dd/yyyy"), Operator:=xlAnd, Criteria2:= _
                                                     "<=" & Format(Planilha3.Range("AT1").Value, "mm/dd/yyyy")
    
    'EXCLUIR CLIENTES CORPORATIVOS DE ACORDO COM O FILTRO DAS DATAS
    Rows("1:1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'EXCLUIR AMBEV P902
    'Columns("R:R").Select
    'ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=18, Criteria1:="P902"
    'ActiveSheet.Range("$A$1:$AO$1048576").AutoFilter Field:=21, Criteria1:="AMBEV"
    ' Rows("1:1").Select
    'Range(Selection, Selection.End(xlDown)).Select
    'Rows("2:1048576").Select
    'Selection.Delete Shift:=xlUp
    'ActiveSheet.ShowAllData
    
    'EXCLUIR DISTRIB. NAC. P902
    'Columns("R:R").Select
    'ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=18, Criteria1:="P902"
    'ActiveSheet.Range("$A$1:$AO$1048576").AutoFilter Field:=36, Criteria1:= _
     '                                                "Distrib. Nacional"
    'ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=41, Criteria1:=Array( _
     '                                                "005", "EMB", "ET03"), Operator:= _
     '                                                xlFilterValues
    'Rows("1:1").Select
    'Range(Selection, Selection.End(xlDown)).Select
    'Rows("2:1048576").Select
    'Selection.Delete Shift:=xlUp
    'ActiveSheet.ShowAllData
    
    'EXCLUIR CLIENTES ABREV P902
    Columns("R:R").Select
    ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=18, Criteria1:="P902"
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=19, Criteria1:= _
                                                  "9190155"
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=19, Criteria1:="=172" _
                                                  , Operator:=xlOr, Criteria2:="=9190155"
    Rows("1:1").Select
    Rows("1:1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:1048576").Select
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    
    'EXCLUIR CLIENTES ABREV P401 (SHI)
    Columns("R:R").Select
    ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=18, Criteria1:="P401"
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=20, Criteria1:=Array( _
                                                  "INDAIÁ BA", "INDAIA BELEM", "Indaia Horiz", "INDAIÁ PB", "INDAIA PE 2"), Operator:= _
                                                  xlFilterValues
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=25, Criteria1:="SHI"
    Rows("1:1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'EXCLUIR CLIENTES ABREV P902 (SHI)
    Columns("R:R").Select
    ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=18, Criteria1:="P902"
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=20, Criteria1:="MANAUS REF."
    ActiveSheet.Range("$A$1:$AR$1000").AutoFilter Field:=25, Criteria1:="SHI"
    Rows("1:1").Select
    Range(Selection, Selection.End(xlDown)).Select
    Rows("2:10000").Select
    Application.CutCopyMode = False        'EXCLUIR LINHA
    Selection.Delete Shift:=xlUp
    ActiveSheet.ShowAllData
    Range("A2").Select
    
    'ORDENAR OV/SEQ (PUXAR A SEQ MENOR)
    Range("B2").Select
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("B1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR PESO SALDO (MENOR PARA MAIOR)
    Range("AL2").Select
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("AL1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR POR DT IMPLANTAÇÃO
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("AD1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR POR DT EMBARQUE
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("K1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR POR CÓD. MATERIAL
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("Z1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR POR PLANTA
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("R1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'ORDENAR POR DEPÓSITO
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Add2 Key _
                                        :=Range("AO1"), SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:= _
                                        xlSortNormal
    With ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    'PREPARAR AMOSTRAS
    ActiveSheet.Range("$A$1:$AN$1048576").AutoFilter Field:=16, Criteria1:=Array( _
    "ZAMO"), Operator:=xlFilterValues
    
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O").Select
    Range("O1").Activate
    ActiveWindow.SmallScroll ToRight:=15
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O,P:P,R:R,U:U,Z:Z").Select
    Range("Z1").Activate
    ActiveWindow.SmallScroll ToRight:=9
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O,P:P,R:R,U:U,Z:Z,AC:AC,AH:AH").Select
    Range("AH1").Activate
    Selection.Copy
    Sheets("Planilha4").Select
    Range("A1").Select
    ActiveSheet.Paste
    Range("N2").Select
    
    'PREPARAR PEDIDOS
    Sheets("PREPARAR BASE").Select
    Application.CutCopyMode = False
    Rows("2:2").Select
    Range(Selection, Selection.End(xlDown)).Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.Delete Shift:=xlUp
    ActiveWindow.SmallScroll Down:=-12
    ActiveWorkbook.Worksheets("PREPARAR BASE").AutoFilter.Sort.SortFields.Clear
    ActiveSheet.ShowAllData
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O").Select
    Range("O1").Activate
    ActiveWindow.SmallScroll ToRight:=15
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O,P:P,R:R,U:U").Select
    Range("U1").Activate
    ActiveWindow.SmallScroll ToRight:=2
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O,P:P,R:R,U:U,Z:Z").Select
    Range("Z1").Activate
    ActiveWindow.SmallScroll ToRight:=6
    Range("A:A,B:B,C:C,K:K,M:M,N:N,O:O,P:P,R:R,U:U,Z:Z,AC:AC,AH:AH,AO:AO").Select
    Range("AO1").Activate
    Selection.Copy
    Sheets("Planilha2").Select
    Range("A1").Select
    ActiveSheet.Paste
    Range("O2").Select
    Sheets("Planilha4").Select
    
    MsgBox "Acabou, vá para planilha 4"
    
End Sub

