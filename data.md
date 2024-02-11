

```sql
INSERT INTO "MemoryInformation" (description) VALUES
  ('自分のスピード@key1%アップ、恐怖耐性アップ/"力タイプ"、"技タイプ"、"知タイプ"が装備した時、自分のクリティカル率@key2%アップ/"信タイプ"、"破タイプ"が装備した時、自分のディフェンス@key3%アップ');

INSERT INTO "MemoryLevelsInformation" (level, skill, "memoryInformationId") VALUES
  (1, '{"key1": 20, "key2": 20, "key3": 20}', 1);

INSERT INTO "MemoryTags" (tag, "memoryInformationId") VALUES
  ('singleBuffSpeedUp', 1);

```



