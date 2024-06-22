package br.com.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.serratec.entity.Tags;

public interface TagRepository extends JpaRepository<Tags, Long> {

}
