package br.com.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.serratec.entity.Like;

public interface LikeRepository extends JpaRepository<Like, Long> {

}
