package com.example.equiposjugadores.controller;

import com.example.equiposjugadores.model.Jugador;
import com.example.equiposjugadores.service.JugadorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jugadores")
public class JugadorController {
    private final JugadorService service;

    public JugadorController(JugadorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Jugador> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Jugador getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Jugador create(@RequestBody Jugador jugador) {
        return service.save(jugador);
    }

    @PutMapping("/{id}")
    public Jugador update(@PathVariable Long id, @RequestBody Jugador jugador) {
        jugador.setId(id);
        return service.save(jugador);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
