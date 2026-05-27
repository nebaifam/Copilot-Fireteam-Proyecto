package com.example.equiposjugadores.service;

import com.example.equiposjugadores.model.Equipo;
import com.example.equiposjugadores.repository.EquipoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipoService {
    private final EquipoRepository repo;

    public EquipoService(EquipoRepository repo) {
        this.repo = repo;
    }

    public List<Equipo> findAll() {
        return repo.findAll();
    }

    public Equipo findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Equipo save(Equipo equipo) {
        if (equipo.getJugadores() != null) {
            equipo.getJugadores().forEach(jugador -> jugador.setEquipo(equipo));
        }

        return repo.save(equipo);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
