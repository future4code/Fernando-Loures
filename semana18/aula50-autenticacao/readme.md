# Exercícios

#### 1 a) IDs na forma de String.

Utiliza-se Ids na forma Base64 (usando os caracteres a - z , A - Z , 0 - 9 , - , e _ ). Isso permite que os IDS tenham 6 bits de informação por caractere. O YouTube, por exemplo, usa IDs de vídeo de 11 caracteres, o que significa que eles podem gerar 2^( 6 * 11) ou mais de 7 * 10 19 IDs.Isso é "o suficiente para cada ser humano no planeta Terra carregar um vídeo a cada minuto por cerca de 18.000 anos ". O Base64 também é fácil de trabalhar, porque 64 é uma potência de 2, o que significa que cada caractere representa um número exato de bits. Usamos hexadecimal (base 16) pelo mesmo motivo.

Sobre a natureza não sequencial dos IDs: significa que eles não precisam de um contador sincronizado entre todos os servidores que atribuem códigos aos vídeos. Eles podem apenas gerar um número aleatório, verificar se ele já está em uso e partir daí. Eles podem até atribuir a cada servidor um bloco de IDs para escolher e eliminar a verificação de duplicação.

Outro motivo para os IDs não sequenciais é que é o que faz com que os vídeos "não listados" funcionem. Estes são vídeos que não aparecem nos resultados de pesquisa ou como sugestões, mas que são acessíveis se você tiver o link. Se você estiver usando a contagem sequencial, basta ir a um vídeo, aumentar o ID em um e a ideia de vídeos não listados está quebrada.

IDs não sequenciais também ajudam a ocultar informações de concorrentes, como a quantidade total de vídeos ou o número de vídeos enviados por período de tempo.


#### 2 a) 

O código da figura faz conexão com o banco de dados mysql e depois insere valores na tabela userTableName.

#### 3 a)

process.env.JWT_KEY as string, transforma o token gerado em string assim que é gerado.
