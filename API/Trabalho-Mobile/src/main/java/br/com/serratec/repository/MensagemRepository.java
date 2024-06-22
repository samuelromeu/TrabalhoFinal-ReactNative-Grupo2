package br.com.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import br.com.serratec.entity.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {

	ResponseEntity<Mensagem> save(String mensagem);

}
