package com.example.equiposjugadores.repository;

import com.example.equiposjugadores.model.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JugadorRepository extends JpaRepository<Jugador, Long> {
}
