USE AdventureWorks2022;

CREATE TABLE OrderTable (
	ProductID INT,
	CustomerID VARCHAR(100),
	CustomerEmail VARCHAR(100),
	ProductName VARCHAR(100),
	ProductPrice DECIMAL(10,2),
	OrderDate DATE
);

INSERT INTO OrderTable VALUES
(1, 'Daniel', 'daniel@gmail.com', 'Play Station', 2000, '2025-06-06'),
(2, 'Samuel', 'samuel@gmail.com', 'X box', 1500, '2025-06-02'),
(3, 'Daniel', 'daniel@gmail.com', 'Play Station', 2000, '2025-06-06'),
(4, 'Samuel', 'samuel@gmail.com', 'X box', 1500, '2025-06-02'),
(5, 'Daniel', 'daniel@gmail.com', 'Play Station', 2000, '2025-06-06'),
(6, 'Samuel', 'samuel@gmail.com', 'X box', 1500, '2025-06-02'),
(7, 'Daniel', 'daniel@gmail.com', 'Play Station', 2000, '2025-06-06'),
(8, 'Samuel', 'samuel@gmail.com', 'X box', 1500, '2025-06-02');

CREATE TABLE Products (
	ProductID INT,
	ProductName VARCHAR,
	ProductPrice DECIMAL
);

--INSERT INTO Products(ProductID, ProductName, ProductPrice) VALUES
--(1, 'Laptop', 20000),
--(2, 'Keyboard' 3000),
--(3, 'Laptop', 20000),
--(4, 'Keyboard' 3000),
--(5, 'Laptop', 20000),
--(6, 'Keyboard' 3000);