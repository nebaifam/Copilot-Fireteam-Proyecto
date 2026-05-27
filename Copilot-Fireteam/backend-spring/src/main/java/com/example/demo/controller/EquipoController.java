package com.example.demo.controller;

import com.example.demo.model.Equipo;
import com.example.demo.service.EquipoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipos")
public class EquipoController {
    private final EquipoService service;

    public EquipoController(EquipoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Equipo> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Equipo getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Equipo create(@RequestBody Equipo equipo) {
        return service.save(equipo);
    }

    @PutMapping("/{id}")
    public Equipo update(@PathVariable Long id, @RequestBody Equipo equipo) {
        equipo.setId(id);
        return service.save(equipo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
