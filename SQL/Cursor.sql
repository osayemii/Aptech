USE AdventureWorks2022;

DECLARE @TotalDue MONEY;
SELECT @TotalDue = TotalDue FROM Sales.SalesOrderHeader
WHERE SalesOrderID = 43659;

SELECT @TotalDue AS OrderTotal;
GO

DECLARE @OrderCount INT;
SELECT @OrderCount = COUNT(*) FROM Sales.SalesOrderHeader
WHERE CustomerID = 29500;
--SELECT @OrderCount AS Status;
IF @OrderCount > 0
	SELECT 'Customer has orders' AS Status;
ELSE
	SELECT 'No orders found' AS Status;
GO

--VARIABLE AND DECLARATION
DECLARE @ProductID INT, @Name NVARCHAR(50);

--CURSOR DECLARATION
DECLARE product_cursor
CURSOR FOR
SELECT ProductID, Name FROM
Production.Product;

--OPEN CURSOR
OPEN product_cursor;

FETCH NEXT FROM
product_cursor INTO
@ProductID, @Name
WHILE @@FETCH_STATUS = 0
BEGIN
	PRINT CAST(@ProductID AS VARCHAR) + ': ' + @Name;
	FETCH NEXT FROM
	product_cursor INTO
	@ProductId, @Name;
END;
CLOSE product_cursor;
DEALLOCATE product_cursor;