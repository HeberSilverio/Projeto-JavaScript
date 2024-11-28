PERGUNTA 6
A questão pede uma abordagem para otimizar e proteger o código JavaScript, ocultando nomes de variáveis e funções e dificultando a engenharia reversa, ao mesmo tempo que reduz o tamanho do código.
Vamos analisar as opções:
Opção A: Code Obfuscation and Encryption
Obfuscation (ofuscação) altera o código para torná-lo menos legível, enquanto que encryption (criptografia) protegeria o código, mas exigiria desencriptação em tempo de execução, o que adiciona complexidade desnecessária para este cenário.
Opção B: Code Obfuscation and Minification
Ofuscação esconde a lógica e os nomes originais, enquanto minificação reduz o tamanho do código ao remover espaços, comentários, e encurtar variáveis. Juntas, essas técnicas cumprem os objetivos de segurança e otimização solicitados.
Opção C: Code Minification
Apenas a minificação reduz o tamanho do código, mas não protege suficientemente contra engenharia reversa, pois os nomes de variáveis ainda podem ser interpretados.
Opção D: Code Obfuscation
A ofuscação protege o código, mas não necessariamente o otimiza em tamanho, deixando de lado o objetivo de redução de código.
Opção E: Code Encryption
Criptografar o código não é a prática mais comum para JavaScript em frontend, pois isso exigiria desencriptação, o que poderia comprometer a performance.
Resposta correta: Opção B: Code Obfuscation and Minification, pois essa combinação atende tanto à segurança quanto à otimização do código, de acordo com o que foi solicitado na questão.