

```sql
INSERT INTO "MemoryInformation" (name, description) VALUES
  ('Global 2nd Anniv.!', '自分のスピード@key1%アップ、恐怖耐性アップ/"力タイプ"、"技タイプ"、"知タイプ"が装備した時、自分のクリティカル率@key2%アップ/"信タイプ"、"破タイプ"が装備した時、自分のディフェンス@key3%アップ');

INSERT INTO "MemoryLevelsInformation" (level, skill, "memoryInformationId") VALUES
  (1, '{"key1": 20, "key2": 20, "key3": 20}', 2);

INSERT INTO "MemoryTags" (tag, "memoryInformationId") VALUES
  ('singleBuffSpeedUp', 2);

```


## 全削除

```sql
delete from "MemoryTags"
delete from "MemoryLevelsInformation"
delete from "MemoryInformation"
```

