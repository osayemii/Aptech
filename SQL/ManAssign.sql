USE LaptopShop;

--CREATE TABLE NewPoduct(
--	ProductID INT,
--	ProductDescription VARCHAR(100),
--	CostPrice INT,
--	SalesPrice INT
--);

--INSERT INTO NewPoduct(
--ProductID,
--ProductDescription,
--CostPrice,
--SalesPrice
--) VALUES
--(1, 'Dell vPro Core i9', 20000.00, 2300.00),
--(2, 'MacOS vPro Core i9', 20000.00, 2300.00),
--(3, 'Acer vPro Core i9', 20000.00, 2300.00),
--(4, 'Toshiba vPro Core i9', 20000.00, 2300.00),
--(5, 'Thinkpad vPro Core i9', 20000.00, 2300.00),
--(6, 'Lenovo vPro Core i9', 20000.00, 2300.00),
--(7, 'MacOS vPro Core i9', 20000.00, 2300.00),
--(8, 'Samsung vPro Core i9', 20000.00, 2300.00);

SELECT ProductID, ProductDescription,CostPrice,SalesPrice, (SalesPrice-CostPrice) AS Profit FROM  NewPoduct;