[Gmail] 
   ↓
[IF “contains TransactionType?”]
 ┌→ True ──> [Function: parse tabela] ──┐
 │                                      ↓
 └→ False → [Function: parse Result] ─> [Merge] 
                                         ↓
                                      [IF Application?]
                               ┌→ True → [Sheets Append Erros] → [Vetorial]
                               ↓
                               └→ False → [Sheets Update OK]
