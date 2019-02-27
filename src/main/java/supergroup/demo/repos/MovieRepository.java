/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package supergroup.demo.repos;

import org.springframework.data.repository.CrudRepository;
import supergroup.demo.models.Movie;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author afrodeb
 */
public interface MovieRepository extends CrudRepository<Movie, Integer> {
   List<Movie> findById(int id);
//   void deleteById(int id);

    public Movie findByName(String name);
}
