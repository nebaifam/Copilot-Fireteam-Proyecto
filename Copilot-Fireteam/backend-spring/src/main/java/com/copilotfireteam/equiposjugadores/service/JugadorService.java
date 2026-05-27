package com.copilotfireteam.equiposjugadores.service;

import com.copilotfireteam.equiposjugadores.model.Jugador;
import com.copilotfireteam.equiposjugadores.repository.EquipoRepository;
import com.copilotfireteam.equiposjugadores.repository.JugadorRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JugadorService {
    private final JugadorRepository repo;
    private final EquipoRepository equipoRepository;

    public JugadorService(JugadorRepository repo, EquipoRepository equipoRepository) {
        this.repo = repo;
        this.equipoRepository = equipoRepository;
    }

    public List<Jugador> findAll() { return repo.findAll(); }
    public Jugador findById(Long id) { return repo.findById(id).orElse(null); }
    public Jugador save(Jugador jugador) {
        if (jugador.getEquipo() != null && jugador.getEquipo().getId() != null) {
            jugador.setEquipo(equipoRepository.getReferenceById(jugador.getEquipo().getId()));
        }

        return repo.save(jugador);
    }
    public void delete(Long id) { repo.deleteById(id); }
}
