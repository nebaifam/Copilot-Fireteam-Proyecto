-- seed.sql
-- Datos de prueba para equipo (1) -> futbolista (N)

INSERT INTO equipo (id_equipo, nombre, ciudad, fundacion) VALUES
(1, 'Real Madrid', 'Madrid', 1902),
(2, 'FC Barcelona', 'Barcelona', 1899),
(3, 'Atletico de Madrid', 'Madrid', 1903);

INSERT INTO futbolista (id_futbolista, nombre, posicion, dorsal, id_equipo) VALUES
(1, 'Thibaut Courtois', 'Portero', 1, 1),
(2, 'Jude Bellingham', 'Centrocampista', 5, 1),
(3, 'Vinicius Junior', 'Delantero', 7, 1),
(4, 'Marc-Andre ter Stegen', 'Portero', 1, 2),
(5, 'Pedri', 'Centrocampista', 8, 2),
(6, 'Robert Lewandowski', 'Delantero', 9, 2),
(7, 'Jan Oblak', 'Portero', 13, 3),
(8, 'Koke', 'Centrocampista', 6, 3),
(9, 'Antoine Griezmann', 'Delantero', 7, 3);
