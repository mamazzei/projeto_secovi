package br.maua.corporativo.projeto.backend.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.maua.corporativo.projeto.backend.dtos.RegisterUserDto;
import br.maua.corporativo.projeto.backend.entities.Role;
import br.maua.corporativo.projeto.backend.entities.RoleEnum;
import br.maua.corporativo.projeto.backend.entities.User;
import br.maua.corporativo.projeto.backend.repositories.RoleRepository;
import br.maua.corporativo.projeto.backend.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;    

    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }

    /***
     * Criação do super usuário administrador
     * @param input
     * @return
     */
    public User createAdministrator(RegisterUserDto input) {
        Optional<Role> optionalRole = roleRepository.findByName(RoleEnum.ADMIN);

        if (optionalRole.isEmpty()) {
            return null;
        }

        var user = new User()
                .setFullName(input.getFullName())
                .setEmail(input.getEmail())
                .setPassword(passwordEncoder.encode(input.getPassword()))
                .setRole(optionalRole.get());

        return userRepository.save(user);
    }

}
