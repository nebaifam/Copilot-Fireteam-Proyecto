-- schema.sql
-- Estructura relacional: equipo (1) -> futbolista (N)

DROP TABLE IF EXISTS futbolista;
DROP TABLE IF EXISTS equipo;

CREATE TABLE equipo (
    id_equipo INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    fundacion INT
);

CREATE TABLE futbolista (
    id_futbolista INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    posicion VARCHAR(50) NOT NULL,
    dorsal INT,
    id_equipo INT NOT NULL,
    CONSTRAINT fk_futbolista_equipo
        FOREIGN KEY (id_equipo)
        REFERENCES equipo(id_equipo)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
