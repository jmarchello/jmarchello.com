---
title: PostgreSQL JSON Datatypes
draft: true
---

## Introduction

I was once on a team building a large system of microservices. The project had been started using the NoSQL database MongoDB. As the project grew it became readily apearent that we had made the wrong choice. Our data was mostly relational with small chunks that were unstructured. As we considered going to our tried and true choice of PostreSQL, we wondered what to do about our unstructured data. This is when we discovered the power of PostgreSQL's JSONB datatype.

## The JSON and JSONB Types

PostgreSQL has several datatypes used to specify what kinds of data can be stored in a given database column. You are likely familiar with some of the more common of these, such as `integer`, `varchar`, `text`, etc. In version 9.4, PostgreSQL added support for two new datatypes, `JSON` and `JSONB`. Here's what they look like:

**JSON**

```sql
SELECT '{"Fruits": ["apple", "banana", "orange"]}'::JSON;
```

**JSONB**

```sql
SELECT '{"Fruits": ["apple", "banana", "orange"]}'::JSONB;
```

These types are special in that they basically unlock the ability to use PostgreSQL as a hybrid database, part relational and part NoSQL. In a JSON or JSONB column you can store unstructured JSON data without any sort of schema. It's like having a minuature NoSLQ database nested in any given database record. For example here is a record from a datase table holding movies:

| title     | year_made | genre  | credits                                       |
| --------- | --------- | ------ | --------------------------------------------- |
| Star Wars | 1977      | Sci-Fi | {"Cast": {...}, "Production Team": [..], ...} |

This record can be inserted with the following script...

```sql
INSERT INTO movies (title, year_made, genre, credits)
VALUES ('Star Wars', '1977', 'Sci-Fi', '{"Cast": {...}, "Production Team": [..], ...}'::JSONB);
```

In this record the `credits` column is JSONB. You may have done something similar in past by simply sticking JSON in a `text` column. While this aproach works, there are some serious advantages to using JSONB instead. First, you can query based on specific data fields within JSON, and second if you're using the `JSONB` type you can create indexes on that data as well (more on that later).

- In version 9.4 Postgres added the `JSON` and `JSONB` types
- Columns of this type store JSON data similar to how Mongodb and other NoSQL databases work
- JSON vs JSONB
- JSON stores 'as is' (slightly faster writes, slower in general)
- JSONB stores data in a binary format (slightly slower writes, faster in every other way. Can be indexed)
- Prefer JSONB in most cases

## Creating JSON/JSONB Columns

## Querying JSON/JSONB

- Operators
- jsonpath

## Indexing JSONB Data

## When To Use JSON/JSONB

## Conclusion

PostgreSQL with JSONB columns gave us the best of both worlds, a relational database with little bits of "NoSQL" sprinkled in. As the project grew this proved to be a great choice and we since have used JSONB on other projects.
