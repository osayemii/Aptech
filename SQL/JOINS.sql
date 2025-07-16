USE AdventureWorks2022;

--Joins

--Inner Joins
SELECT P.FirstName, s.SalesOrderID
FROM Person.Person p
INNER JOIN Sales.SalesOrderHeader s ON p.BusinessEntityID = s.CustomerID;

GO
--Left (Outer) Joins
SELECT P.FirstName, s.SalesOrderID
FROM Person.Person p
LEFT JOIN Sales.SalesOrderHeader s ON p.BusinessEntityID = s.CustomerID;

GO
--Right Joins
SELECT P.FirstName, s.SalesOrderID
FROM Person.Person p
RIGHT JOIN Sales.SalesOrderHeader s ON p.BusinessEntityID = s.CustomerID;

GO
--Full Joins
SELECT P.FirstName, s.SalesOrderID
FROM Person.Person p
FULL JOIN Sales.SalesOrderHeader s ON p.BusinessEntityID = s.CustomerID;

GO
--Cross Joins
SELECT P.Name, c.Name
FROM Production.Product p
CROSS JOIN Production.ProductCategory c;