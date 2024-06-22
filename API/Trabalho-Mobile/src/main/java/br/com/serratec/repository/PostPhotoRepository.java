package br.com.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.serratec.entity.Post_Photo;

public interface PostPhotoRepository extends JpaRepository<Post_Photo, Long> {

}
