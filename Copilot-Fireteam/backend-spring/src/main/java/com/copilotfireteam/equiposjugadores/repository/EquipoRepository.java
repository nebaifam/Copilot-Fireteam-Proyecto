package com.copilotfireteam.equiposjugadores.repository;

import com.copilotfireteam.equiposjugadores.model.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
