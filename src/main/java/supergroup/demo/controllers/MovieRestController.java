/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package supergroup.demo.controllers;

import supergroup.demo.models.Movie;
import supergroup.demo.repos.MovieRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author afrodeb
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MovieRestController {

    @Autowired
    MovieRepository repository;

    @GetMapping("/movies")
    public List<Movie> fetchAll() {
        List<Movie> movies = new ArrayList<>();
        repository.findAll().forEach(movies::add);
        return movies;
    }

    @PostMapping(value = "/movies/create")
    public Movie postMovie(@RequestBody Movie movie) {
        try {
            Movie _movie = repository.save(new Movie(movie.getName(), movie.getType(), movie.getRating()));
            return _movie;
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable("id") Integer id) {
        try {
            repository.deleteById(id);
            return new ResponseEntity<>("Movie has been deleted!", HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Error occured while deleting!", HttpStatus.OK);
        }
    }

    @DeleteMapping("/movies/delete")
    public ResponseEntity<String> deleteAllMovies() {
        repository.deleteAll();
        return new ResponseEntity<>("All movies have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "/movies/id/{id}")
    public List<Movie> findById(@PathVariable int id) {
        List<Movie> movie = repository.findById(id);
        return movie;
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable("id") Integer id, @RequestBody Movie movie) {
        Optional<Movie> movieData = repository.findById(id);
        if (movieData.isPresent()) {
            Movie _movie = movieData.get();
            _movie.setName(movie.getName());
            return new ResponseEntity<>(repository.save(_movie), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Error message")
    public void handleError() {
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
