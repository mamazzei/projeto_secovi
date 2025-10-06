package br.maua.corporativo.projeto.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.maua.corporativo.projeto.backend.entities.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByEmail(String email);

    User findById(Long id);

    void deleteById(Long id);

    java.util.List<User> findAll();

    User save(User user);
}