package br.com.serratec.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Post_Photo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "photo_name")
	private String photoName;
	
	private String url;
	
	@JoinColumn(name = "mensagem_id")
	@ManyToOne
	private Mensagem mensagem;
	
	public Post_Photo () {
		
	}
	
	public Post_Photo(Long id, String photoName, String url, Mensagem mensagem) {
		this.id = id;
		this.photoName = photoName;
		this.url = url;
		this.mensagem = mensagem;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Mensagem getMensagem() {
		return mensagem;
	}

	public void setMensagem(Mensagem mensagem) {
		this.mensagem = mensagem;
	}

	
	
	
	
	
}
