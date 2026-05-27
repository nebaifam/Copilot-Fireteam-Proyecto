package com.copilotfireteam.equiposjugadores.repository;

import com.copilotfireteam.equiposjugadores.model.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JugadorRepository extends JpaRepository<Jugador, Long> {
}
