package br.com.serratec.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.serratec.entity.Usuario;
import br.com.serratec.exception.EmailException;
import br.com.serratec.exception.ResourceNotFoundException;
import br.com.serratec.repository.UsuarioRepository;

@Service
public class UserService {

	@Autowired
	private UsuarioRepository repository;
	
	public Usuario salvar(Usuario usuario) {
		return repository.save(usuario);
	}
	
	public Usuario inserir(Usuario usuario) throws Exception {
		if (repository.findByEmail(usuario.getEmail()) != null) {
			throw new EmailException("Email Já Existe na Base");
		}
		Usuario c = new Usuario();
		c.setNome(usuario.getNome());
		c.setEmail(usuario.getEmail());
		c.setSenha(usuario.getSenha());
		c.setBio(usuario.getBio());

		repository.save(c);
		return new Usuario(c);
	}
	
	public List<Usuario> findAll(){
		return repository.findAll();
	}
	
	public ResponseEntity<String> atualizar(Long id, Usuario usuario) {
		if (repository.existsById(id)) {
			usuario.setId(id);
			repository.save(usuario);
			return ResponseEntity.status(HttpStatus.OK).body("Informações Atualizadas com sucesso!");
		}
		throw new ResourceNotFoundException("Usuário com o id: " + id + " não encontrado!");
	}
	
	public ResponseEntity<String> deletar(Long id) {
		if (repository.existsById(id)) {
			repository.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado com sucesso!");
		}
		throw new ResourceNotFoundException("Usuário com o id: " + id + " não encontrado!");
	}
	
	public Usuario autenticar(String email, String senha) {
	    Usuario usuario = repository.findByEmail(email);

	    if (usuario != null && usuario.getSenha() == senha) {
	        Usuario response = new Usuario(usuario);
	    	return response;
	    } else {
	        return null; 
	    }
	}
}
