package br.com.serratec.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;

@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 60, nullable = false) 
	private String nome;
	
	@Email
	private String email;
	
	@Column(length = 20, nullable = false)
	private String senha;
	
	public Usuario () {
		
	}
	
	public Usuario(Long id, String nome, String email, String senha, String bio) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.bio = bio;
	}

	public Usuario(Usuario usuario) {
		// TODO Auto-generated constructor stub
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	private String bio;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
