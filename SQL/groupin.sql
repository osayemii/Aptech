USE AdventureWorks2022;

SELECT BusinessEntityID, JobTitle
FROM HumanResources.Employee
FOR XML PATH('Employee');

GO

SELECT UnitPrice, COUNT(*) AS SalesCount, AVG(UnitPrice) AS SalaryAverage
FROM Sales.SalesOrderDetail
GROUP BY SalesOrderID
HAVING COUNT(*) >5;