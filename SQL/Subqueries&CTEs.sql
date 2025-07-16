USE AdventureWorks2022;

--Subqueries
SELECT FirstName
FROM Person.Person
WHERE BusinessEntityID = (SELECT BusinessEntityID FROM HumanResources.Employee WHERE NationalIDNumber = '295847284');
GO
--CTEs (Named Subqueries)
WITH SimpleCTE AS (
	SELECT ProductID, Name
	FROM Production.Product
)

SELECT ProductID FROM SimpleCTE
WHERE ProductID = 3;
--SELECT * FROM SimpleCTE
--WHERE ProductID >= 1;
GO
