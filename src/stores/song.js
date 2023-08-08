import { defineStore } from 'pinia';
import artist from '../artist.json';

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null,
  }),
  
  actions: {
    loadSong(artist, track) {
      // Establecer el artista y la pista actual
      this.currentArtist = artist;
      this.currentTrack = track;
  
      // Si hay una canción cargada, pausarla y reiniciar
      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = '';
      }
  
      // Crear una nueva instancia de Audio y cargar la pista
      this.audio = new Audio();
      this.audio.src = track.path;
  
      // Reproducir la canción después de un retardo de 200 ms
      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },
  
    playOrPauseSong() {
      // Si está pausada, reproducir; si está reproduciéndose, pausar
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },
  
    playOrPauseThisSong(artist, track) {
      // Si no hay audio cargado o es una nueva canción, cargar y reproducir
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        this.loadSong(artist, track);
        return;
      }
  
      // Alternar entre reproducir y pausar la canción actual
      this.playOrPauseSong();
    },
  
    prevSong(currentTrack) {
      // Obtener la pista anterior
      let track = artist.tracks[currentTrack.id - 2];
      // Cargar y reproducir la pista anterior
      this.loadSong(artist, track);
    },
  
    nextSong(currentTrack) {
      // Si es la última canción, cargar la primera; 
      // de lo contrario, cargar la siguiente
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0];
        this.loadSong(artist, track);
      } else {
        let track = artist.tracks[currentTrack.id];
        this.loadSong(artist, track);
      }
    },
  
    playFromFirst() {
      // Restablecer el state y cargar y reproducir la primera canción
      this.resetState();
      let track = artist.tracks[0];
      this.loadSong(artist, track);
    },
  
    resetState() {
      // Restablecer el state a los valores iniciales
      this.isPlaying = false;
      this.audio = null;
      this.currentArtist = null;
      this.currentTrack = null;
    }
  },
  persist: true
})
