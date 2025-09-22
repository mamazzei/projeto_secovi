package br.maua.corporativo.projeto.backend.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.maua.corporativo.projeto.backend.entities.Role;
import br.maua.corporativo.projeto.backend.entities.RoleEnum;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
    Optional<Role> findByName(RoleEnum name);
}
