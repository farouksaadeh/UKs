--1. Liste aller Produkte mit Produktkategorien
--Hinweis: Zeigen Sie auch die Kategorien an, die keine Produkte haben.
SELECT
 c.category,
 count(p.name)
FROM
 category c
LEFT JOIN product p ON p.fk_category_id = c.id
GROUP BY
 c.category
;

--2. Liste aller Produktkategorien und Anzahl darin enthaltener Produkte. Zeigen Sie alle Kategorien an und verwenden Sie COUNT().
SELECT
 c.firstname,
 c.lastname,
 count(o.id)
FROM
 order_entry o
RIGHT JOIN customer c ON o.fk_customer_id = c.id
GROUP BY
 c.id
;

--3. Liste der Namen aller Kunden und Anzahl Bestellungen aller Kunden.
SELECT
 c.category
FROM
 category c
LEFT JOIN product p ON p.fk_category_id = c.id
WHERE
 p.fk_category_id IS NULL
;


--4. Liste der Produktkategorien, die keine Produkte enthalten
SELECT
 c.category,
 count(p.name)
FROM
 category c
LEFT JOIN product p ON p.fk_category_id = c.id
GROUP BY§
 c.id
HAVING
 count(p.name) = 0
;

--5. Liste der Produkte, die noch nie bestellt wurden
SELECT
 p.name,
 p.price
FROM
 product p
LEFT JOIN product_order_entry po ON po.fk_product_id = p.id
WHERE
 po.fk_order_entry_id IS NULL
;
