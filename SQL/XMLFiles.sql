USE AdventureWorks2022;

SELECT BusinessEntityID, JobTitle
FROM HumanResources.Employee
FOR XML PATH('Employee');