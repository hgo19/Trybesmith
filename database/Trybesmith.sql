DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  vocation TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
);

CREATE TABLE Trybesmith.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
);

INSERT INTO
  Trybesmith.users (username, vocation, level, password)
VALUES
  ("zoro", "Swordsman", 5, "cabecademarimo");