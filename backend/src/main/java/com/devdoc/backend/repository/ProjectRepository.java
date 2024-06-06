// ProjectRepository.java

package com.devdoc.backend.repository;

import com.devdoc.backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByResumeId(Long resumeId);
}