package com.example.demo;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class DemoController {
    @Autowired
    private PersonRepo personRepo;

    @GetMapping(
            value = "/api/classpath/person",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public JsonNode getPersonInClasspath() throws IOException {
        return new ObjectMapper()
                .readTree(Files.readAllBytes(Paths.get("src/main/resources/person.json")));
    }

    @GetMapping(
            value = "/api/db/person",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Person> getPersonInDB() {
        return personRepo.findAll();
    }
}
