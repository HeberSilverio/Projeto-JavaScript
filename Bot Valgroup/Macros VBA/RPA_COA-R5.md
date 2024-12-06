

D:\Automation Anywhere\$SystemVariablesPackage:UserName$\COA - R05\Temp\Processados\



$Parametros{"Raiz_Local"}$Temp\
$Parametros{PastaTemp}$Processados\
$Parametros{PastaProcessados}$


$Parametros{PastaProcessados}$$nomeLaudo$.pdf

/c start "" python app.py --cliente "$cliente$" --nota_fiscal "$notaFiscal$ / $numeroPedido$" --data_emissao "$dataEmissao$" --input_dir "$Parametros{PastaTemp}$Entrada" --output_dir "$Parametros{PastaTemp}$Processados"