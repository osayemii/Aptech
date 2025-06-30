USE AdventureWorks2022

----LocalVariable
--DECLARE @EmployeeCount INT;
--SET @EmployeeCount = (SELECT COUNT(*) FROM AdventureWorks2022.HumanResources.Employee);
--SELECT @EmployeeCount AS TotalEmployees;
--GO

--DECLARE @NIN INT;
--SET @NIN = 295847284
--SELECT * FROM AdventureWorks2022.HumanResources.Employee
--WHERE NationalIDNumber = @NIN

----globalVariable
--SELECT
--@@SERVERNAME AS ServerName,
--@@LANGUAGE AS Language,
--@@MAX_CONNECTIONS AS MaxConnect,
--@@DATEFIRST AS CurrentDate,
--@@LOCK_TIMEOUT AS Lock
--;

GO
--Simple Expression
SELECT SalesOrderID,
TotalDue * 1.15 AS TotalWithTax
FROM Sales.SalesOrderHeader;

GO
--Complex Expression
SELECT
YEAR(OrderDate) *1000 +
MONTH(OrderDate)*100 +
DAY(OrderDate)
AS CustomerDateCode
FROM AdventureWorks2022.Sales.SalesOrderHeader;