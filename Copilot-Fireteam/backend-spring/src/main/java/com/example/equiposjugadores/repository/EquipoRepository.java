package com.example.equiposjugadores.repository;

import com.example.equiposjugadores.model.Equipo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
