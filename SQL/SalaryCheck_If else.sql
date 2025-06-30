USE AdventureWorks2022;
DECLARE @EmployeeID INT = 1;
DECLARE @IsSalaried BIT;

SELECT @IsSalaried = SalariedFlag FROM HumanResources.Employee
WHERE BusinessEntityID= @EmployeeID;

IF @IsSalaried =1
	PRINT 'The Employee Is Paid Monthly';
ELSE IF @IsSalaried = 0
	PRINT 'The Employee is Paid Hourly';