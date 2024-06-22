package br.com.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.serratec.entity.Follow;

public interface followerRepository extends JpaRepository<Follow, Long> {

}
