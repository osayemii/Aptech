--CREATE TABLE OrderDetails (
--	OrderID INT,
--	ProductID INT,
--	ProductName VARCHAR(100),
--	Quantity INT
--);

--INSERT INTO OrderDetails VALUES
--(1, 001, 'Perfume', 12),
--(2, 002, 'Lotion', 4);

--UPDATE OrderDetails SET ProductID = 100 WHERE ProductName = 'Lotion';

DELETE FROM OrderDetails WHERE ProductName = 'Perfume';