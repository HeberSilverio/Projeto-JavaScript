Sub Auto_Open()

Planilha3.Cells(1, 53) = Format(Now, "hh:mm:ss")

If Planilha3.Cells(1, 55) < 14 Then

    If Planilha3.Cells(1, 51) = "sexta-feira" Then
    Planilha3.Cells(1, 45) = Planilha3.Cells(1, 45) + 7
    ActiveWorkbook.Save
    Else
    Planilha3.Cells(1, 45) = Planilha3.Cells(1, 45)
    End If
    
End If

ActiveWorkbook.RefreshAll

End Sub