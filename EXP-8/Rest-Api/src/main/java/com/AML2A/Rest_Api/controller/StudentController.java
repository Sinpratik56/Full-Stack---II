package com.AML2A.Rest_Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AML2A.Rest_Api.model.Student;
import com.AML2A.Rest_Api.service.StudentService;


@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getStudents() {
        return service.getAllStudents();
    }
    
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
    	return service.getStudentById(id);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }
    
    @DeleteMapping("/{id}")  
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();  // Returns 204
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student student) {
        Student updated = service.updateStudent(id, student);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();  // 404
    }
}