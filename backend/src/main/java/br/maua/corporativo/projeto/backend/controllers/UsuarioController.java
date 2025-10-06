package br.maua.corporativo.projeto.backend.controllers;
import br.maua.corporativo.projeto.backend.entities.User;
import br.maua.corporativo.projeto.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@PreAuthorize("hasAnyRole('ADMIN', 'SUPER_ADMIN')")
public class UsuarioController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> listarUsuarios() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User buscarPorId(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
//    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public User criarUsuario(@RequestBody User usuario) {
            return userService.save(usuario);
    }

    @PutMapping("/{id}")
    public User atualizarUsuario(@PathVariable Long id, @RequestBody User usuarioAtualizado) {
        User usuario = userService.findById(id);
        if (usuario == null) {
            throw new RuntimeException("Usuário não encontrado com ID: " + id);
        }
        usuario.setFullName(usuarioAtualizado.getFullName());
        usuario.setEmail(usuarioAtualizado.getEmail());
        usuario.setPassword(usuarioAtualizado.getPassword());
        usuario.setRole(usuarioAtualizado.getRole());
        return userService.save(usuario);
    }

    @DeleteMapping("/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        userService.deleteUserById(id);
    }
}
